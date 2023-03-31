<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Organization;
use App\Models\Logbook;
use App\Models\User;

class SearchController extends Controller
{
    public function searchOrg(Request $request,$id)
    {
        $search = $request->input('search');
        User::find($id);
        $result=Organization::where('user_id',$id)
        ->where('name', 'LIKE', '%' . $search . '%')
        ->orwhere ('description','LIKE','%' . $search . '%')  
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

    public function searchLog(Request $request,$id)
    {
        $search = $request->get('search');
        Organization::find($id);
        $result = Logbook::where('org_id',$id)
        ->where('firstname', 'LIKE', '%' . $search . '%')
        ->orWhere ('lastname','LIKE','%' . $search . '%') 
        ->orWhere ('description','LIKE','%' . $search . '%')  
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

}
