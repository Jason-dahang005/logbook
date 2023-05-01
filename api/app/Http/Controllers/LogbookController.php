<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Logbook;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Unique;

class LogbookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id, $date)
    {
        Organization::find($id);

        $log = Logbook::where('org_id', $id)->whereDate('created_at', $date)->orderBy('created_at', 'desc')->get();

        if($log){
            return response()->json($log);
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
        $request->validate([
            'firstname'     => 'required',
            'lastname'      => 'required',
            'description'   => 'required',
        ]);

        $org = Organization::find($id);

      

        $log = Logbook::create([
            'firstname'     => ucwords($request->firstname),
            'lastname'      => ucwords($request->lastname),
            'description'   => ucwords($request->description),
            'org_id'        => $id,
            // 'image'         => $path
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
    public function update(Request $request,$id)
    {
       //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Logbook  $logbook
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $log = Logbook::find($id);
        $log->delete();

        return response()->json([
            'meassage'=>'Logs Deleted Successfully!']);
    }
}
