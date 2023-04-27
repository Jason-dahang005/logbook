<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Logbook;
use App\Models\Organization;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class SearchController extends Controller
{
    public function searchOrg(Request $request,$id)
    {
        $search = $request->input('search');
        User::find($id);
        $result=Organization::where('user_id',$id)
        ->where(function ($q) use ($search) {
            $q->where('name', 'LIKE', '%' . $search . '%')
            ->orWhere ('description','LIKE','%' . $search . '%');  
        })
        ->orderBy('created_at', 'desc')
        ->paginate(10)
        ->withPath('?search=' . $search); 
        
        if(count($result)){
            return response()->json($result);
        }
        else{
            return response()->json([
                "Result"=> 'Data not found'
            ], 404);
        }
    }

    public function searchLog($id,Request $request)
    {
        
        $search = $request->input('search');
        Organization::find($id);
       
        $result = Logbook::where('org_id',$id)
        ->where(function ($q) use ($search) {
            $q->where('firstname', 'LIKE', '%' . $search . '%')
            ->orWhere('lastname','LIKE','%' . $search . '%') 
            ->orWhere ('description','LIKE','%' . $search . '%');  
        })
        ->orderBy('created_at', 'desc')
        ->paginate(10)
        ->withPath('?search=' . $search);
             
            if(count($result)){
            return response()->json($result);
        }
        else{
            return response()->json([
                "Result"=> 'Data not found'
            ], 404);
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
