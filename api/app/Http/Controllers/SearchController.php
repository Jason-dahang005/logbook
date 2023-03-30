<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Logbook;
use App\Models\Organization;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchController extends Controller
{
    public function searchOrg(Request $request)
    {
        $result = Organization::when($request->filled('search'),function ($org)use($request)
        {
           $org->where('name','LIKE','%'.$request->search.'%')->orWhere('description','LIKE','%'.$request->search.'%');
        })->get();

        if(count($result)){
            return response()->json($result);
        }
        else{
            return response()->json([
                "Result"=> 'Data not found'
            ], 404);
        }
    }

    public function searchLog(Request $request, $id)
    {
        Organization::find($id);

        $result=Logbook::when($request->filled('search'),function ($log)use($request)
        {
            $log->where('firstname','LIKE','%'.$request->search.'%')
            ->orWhere('lastname','LIKE','%'.$request->search.'%')
            ->orWhere ('description','LIKE','%'.$request->search.'%');
        })->whereDate('created_at', Carbon::today())->where('org_id', $id)->get();

        if($result){
            return response()->json([
                'result' => $result
            ], 200);
        }else{
            return response()->json([
                "Result"=> 'Data not found'
            ], 404);
        }

    }

}
