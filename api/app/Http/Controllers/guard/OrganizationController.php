<?php

namespace App\Http\Controllers\guard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\guard\Organization;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\guard\BaseController as BaseController;

class OrganizationController extends BaseController
{
    public function index(Request $request)
    {
        $organizations = Organization::when($request->filled('search'),function($org)use ($request
        ){
           $org->where('org_name','LIKE','%'.$request->search.'%')
           ->orWhere ('description','LIKE','%'.$request->search.'%');
        })->paginate($request->per_page);
      
        return response()->json([
            "success" => true,
            "message" => "Organization List",
            "data" => $organizations
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $request->validate( [
            'org_name' => 'required',
            'description' => 'required'
        ]);
       
     $organization = Organization::create($request->all());
    return response()->json([
    "success" => true,
    "message" => "Organization created successfully.",
    "data" => $organization
    ]);
   
    } 

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $organization = Organization::find($id);
    
        if (is_null($organization)) {
            return $this->sendError('Organization not found!');
        }
     
        return response()->json([
            "success" => true,
            "message" => "Organization Retrieved successfully.",
            "data" => $organization
        
            ]);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Organization $organization)
    {
        $input = $request->all();
     
        $validator = Validator::make($input, [
            'org_name' => 'required',
            'description' => 'required'
        ]);
     
        if($validator->fails()){
            return $this->sendError('Error organization name or description!', $validator->errors());       
        }
     
        $organization->org_name = $input['org_name'];
        $organization->description = $input['description'];
        $organization->save();
     
        return response()->json([
            "success" => true,
            "message" => "Organization updated successfully.",
            "data" => $organization
            ]);
    }
   
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Organization $organization)
    {
        $organization->delete();
        
        return response()->json([
            "success" => true,
            "message" => "Organization deleted successfully.",
            "data" => $organization
            ]);
    }
}
