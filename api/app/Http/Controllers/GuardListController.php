<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
//use Spatie\Permission\Traits\HasRoles;

class GuardListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $guard = User::role('user')->get();

        return response()->json([
            'guards' => $guard
        ]);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        User::find($id);

        $guard = User::where('user_id', $id)->get();
        if($guard){
            return response()->json([
                'Attendance' => $guard
            ]);
        } else {
            return response()->json([
                'message' => 'no current logs'
            ]);
        }
    }


    //     $user = User::find($id);
    //     if(!$user) {
    //         return response()->json(['message'=> 'user not exist'], 404);
    //     }
    //     return response()->json(['data' => $user], 200);
    // }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
