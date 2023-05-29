<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id, $date)
    {
        Organization::find($id);

        $attendance = Attendance::where('org_id', $id)->whereDate('created_at', $date)->orderBy('created_at', 'desc')->get();

        if($attendance){
            return response()->json([
                'attendance' => $attendance
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
        $request->validate([
            'firstname'     => 'required',
            'lastname'      => 'required',
            'description'   => 'required',
            'signature'     => 'required'
        ]);

        $imageData = $request->input('signature');

        $decodeImage = base64_decode($imageData);
        $filename = uniqid().'.jpg';
        Storage::disk('public')->put($filename, $decodeImage);

        Organization::find($id);

        $attendance = Attendance::create([
            'firstname'     => ucwords($request->firstname),
            'lastname'      => ucwords($request->lastname),
            'description'   => ucwords($request->description),
            'org_id'        => $id,
            'signature'     => $filename
        ]);

        return response()->json([
            'status'                => 'Success',
            'Attendance logbook'    => $attendance,
            'Message'               => 'Attendance logged succesfully!'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function show(Attendance $attendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function edit(Attendance $attendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Attendance $attendance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Attendance  $attendance
     * @return \Illuminate\Http\Response
     */
    public function destroy(Attendance $attendance)
    {
        //
    }
}
