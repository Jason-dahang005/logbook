<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;
use App\Models\Logbook;
use Illuminate\Support\Facades\DB;



class HistoryController extends Controller
{
    public function loghistory($id)
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

    public function date(Request $request,$id)
    {
        
        $search = $request->input('search');

        Organization::find($id);
        
        $results = Logbook::where('org_id',$id)->where('created_at', 'like', '%' . $search . '%')
      ->orderBy("created_at", 'desc')
      ->paginate(10)
      ->withPath('?search=' . $search);

      if(count($results)){ 
        return response()->json([
            'data' => $results,
            
        ]);
         }
         else {
        return response()->json([
            'message' => 'Search not found'
        ]);
    }
        
    }
}



