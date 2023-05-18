<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Organization;
use Illuminate\Http\Request;


class AdminListAttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id, $date)
    {
        Organization::find($id);

        $attendance = Attendance::where('org_id', $id)->whereDate('created_at', $date)->orderBy('created_at', 'desc')->with('organization')->get();

        if($attendance){
            return response()->json([
                'Attendance' => $attendance
            ]);
        } else {
            return response()->json([
                'message' => 'no current logs'
            ]);
        }
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
