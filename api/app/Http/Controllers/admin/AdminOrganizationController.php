<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AdminOrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $organization = Organization::with('user')->get();

        return response()->json([
            'data' => $organization
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
        $validator = Validator::make($request->all(), [
            'name'              => 'required|string|max:255|unique:organizations',
            'user_id'           => 'required',
            'description'       => 'required|string|max:255',
        ],
        [
            'name.required'     => 'Name field is required',
            'name.unique'       => 'This name is already taken',
            'user_id'           => 'Kindly select a security guard',
            'description'       => 'Description field is required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors'    => $validator->errors(),
            ], 422);
        }

        $organization = Organization::create($request->all());

        return response()->json([
            'message'    => 'Organization created successfully',
            'data'      => $organization,
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $org = Organization::with('user')->find($id);

        return response()->json([
            'org' => $org
        ], 200);
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
