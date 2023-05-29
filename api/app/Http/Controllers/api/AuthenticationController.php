<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Notifications\PasswordResetRequest;
use App\Notifications\PasswordResetSuccess;
use App\Models\PasswordReset;

class AuthenticationController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'firstname'     => 'required|string',
            'lastname'      => 'required|string',
            'email'     => 'required|email',
            'password'  => 'required|min:5',

        ]);

        $input = $request->all();
        $input['firstname'] =ucwords($input['firstname']);
        $input['lastname'] =ucwords($input['lastname']);
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        if(User::count() == 1){
            $user->assignRole('admin');
        } else {
            $user->assignRole('user');
        }

        return response()->json([
            'status'        => 'success',
            'credentials'   => $user,
            'message'       => 'Registered Successful!'
        ], 200);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email'     => 'required|email',
            'password'  => 'required|min:5',

        ]);

        $credential = $request->only('email', 'password');

        if(Auth::guard('web')->attempt($credential)){
            $user = User::query()->where('email', $request['email'])->first();
            $role = $user->roles;
            $token = $user->createToken('personal_access_token')->accessToken;

            return response()->json([
                'status'        => 'success',
                'user'          => $user,
                'token'         => $token,
                'message'       => 'Logged in Successfully!'
            ], 200);

        }else{
            return response()->json([
                'status'        => 'unauthorized',
            ], 401);
        }
    }
    public function create(Request $request)
    {
        $request->validate([
        'email' => 'required|string|email:rfc,dns',
        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user)
            return response()->json([
                'message' => 'We cant find a user with that e-mail address.'
            ], 404);
        $passwordReset = PasswordReset::updateOrCreate(
            ['email' => $user->email],
            [
                'email' => $user->email,
                'token' => Str::random(15),
                'created_at' => Carbon::now()
                ]
        );
        if ($user && $passwordReset)
            $user->notify(
                new PasswordResetRequest($passwordReset->token)
            );
        return response()->json([
            'message' => 'We have e-mailed your password reset link!'
        ]);
    }
    
    public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required|string',
            'password' => 'required|string|confirmed',
            
        ]);
        $passwordReset = PasswordReset::where([
            ['token', $request->token],
            ['email', $request->email]
        ])->first();
        if (!$passwordReset)
            return response()->json([
                'message' => 'This password reset token is invalid.'
            ], 404);
        $user = User::where('email', $passwordReset->email)->first();
        if (!$user)
            return response()->json([
                'message' => 'We cant find a user with that e-mail address.'
            ], 404);
        $user->password = bcrypt($request->password);
        $user->save();
        $passwordReset->delete();
        $user->notify(new PasswordResetSuccess($passwordReset));
        return response()->json([
            'message'=> 'New Password Created Successfully',
            
        ]);
    }
    
     public function logout(Request $request)
    {
        $user = Auth::user();
        $user->tokens()->delete();
        return response()->json([
            'message'   => 'Logged out successfully!'
        ]);
    }
}
