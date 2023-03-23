<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $organization = Organization::where('user_id', auth()->id())->get();

        if($organization){
            return response()->json([
                'organization' => $organization
            ]);
        } else {
            return response()->json([
                'message' => 'no organization found'
            ]);
        }
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
        $user = auth()->user();

        $request->validate([
            'name'          => 'required|string',
            'description'   => 'required',
        ]);

        $org = new  Organization();
        $org->name          = $request->name;
        $org->description   = $request->description;

        if($user->hasRole('admin')){
            $org->user_id   = $request->user_id;
        } else if($user->hasRole('user')){
            $org->user_id   = $user->id;
        }
        $organization = $org->save();

        if($organization){
            return response()->json([
                'organization'  => $organization,
                'message'       => 'Organization Successfully Created!'
            ]);
        } else {
            return response()->json([
                'message'       => 'Something went wrong!'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function show(Organization $organization, $id)
    {
        $organization =  Organization::find($id);

        if($organization){
            return response()->json([
                'status'        => 'success',
                'organization'  => $organization
            ]);
        } else {
            return response()->json([
                'message' => 'no organization found'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function edit(Organization $organization)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Organization $organization)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function destroy(Organization $organization)
    {
        //
    }
}
