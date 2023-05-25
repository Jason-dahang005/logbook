<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Exeption;

class AuthenticationController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'firstname'     => 'required|string',
            'lastname'      => 'required|string',
            'email'     => 'required|email:rfc,dns|unique:users,email',
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
            'email'     => 'required|email:rfc,dns',
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
    public function change_password(Request $request,$id)
    {
        $user = User::find($id);
        $request->validate([
            'current_password' => ['required', function ($attribute, $value, $fail) use ($user) {
                if (!Hash::check($value, $user->password)) {
                    return $fail(('The current password is incorrect!'));
                }
            }],
            'new_password'=>'required|min:5',
            'confirm_password'=>'required|same:new_password'
        ]);
        $user->password = bcrypt($request['confirm_password']);
        $user->save();
        return response()->json([
            'message'=> 'Password Change Successfully!',
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
