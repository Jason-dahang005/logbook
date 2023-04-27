<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;
use App\Models\Logbook;
use Illuminate\Support\Carbon;



class HistoryController extends Controller
{
    public function loghistory(Organization $org,$id)
    {
        $org = Organization::find($id);
        $log = Logbook::orderBy('created_at', 'desc')->where('org_id', $id)->paginate(10);
        
        if($org){
        return response()->json([
            'organization' => $org,
            'logbooks'=> $log,
        ]);
        }
         else {
        return response()->json([
            'message' => 'Organizations not foud'
        ]);
        }

    }

    public function date_list($id)
    {
        Organization::find($id);
       $date = Logbook::where('created_at','>=',Carbon::now()->subdays(1))
        ->get(['firstname','lastname','created_at']);
         return response()->json($date);
    }
}



