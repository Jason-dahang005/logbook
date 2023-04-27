<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\PermissionServiceProvider;

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
        //    $org= Organization::
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
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'=>'required',
            'description'=>'required',
           
        ]);
        $org = Organization::find($id);
        $org->name =  $request->input('name');
        $org->description = $request->input('description');
        $org->save();

        return response()->json([
            'message'=> 'Organization Updated Successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function status_update($id)
    {
        $org = Organization::find($id)
                    ->select('status')
                    ->where('id')
                    ->first();
    //Check organization status
        if($org->status == '1'){
            $status = '2';
        }else{
            $status = '1';
        }//update organization status
        $values = array('status' => $status );
        Organization::where('organizations')->where('id')->update($values);
    
        return response()->json('Organization status has been updated successfully.');
        
    }

    public function destroy($id)
    {
        $organization = Organization::find($id);
        $organization->delete();
     
        return response()->json([ 
            'meassage'=>'Organization Deleted Successfully!']);
    }
}

