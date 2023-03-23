<?php

namespace App\Http\Controllers;

use App\Models\Logbook;
use App\Models\Organization;
use Illuminate\Http\Request;

class LogbookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        Organization::find($id);

        $log = Logbook::orderBy('created_at', 'desc')->where('org_id', $id)->get();

        if($log){
            return response()->json([
                'status'    => 'success',
                'logs'      => $log
            ]);
        } else {
            return response()->json([
                'message' => 'no current logs'
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
    public function store(Request $request, $id)
    {
        $org = Organization::find($id);

        $log = Logbook::create([
            'firstname'     => $request->firstname,
            'lastname'      => $request->lastname,
            'description'   => $request->description,
            'org_id'        => $id
        ]);

        if($log){
            return response()->json([
                'status'    => 'success',
                'log'       => $log,
            ]);
        } else {
            return response()->json([
                'message'   => 'Something went wrong!'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Logbook  $logbook
     * @return \Illuminate\Http\Response
     */
    public function show(Logbook $logbook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Logbook  $logbook
     * @return \Illuminate\Http\Response
     */
    public function edit(Logbook $logbook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Logbook  $logbook
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Logbook $logbook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Logbook  $logbook
     * @return \Illuminate\Http\Response
     */
    public function destroy(Logbook $logbook)
    {
        //
    }
}
