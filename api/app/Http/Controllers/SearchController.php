<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Organization;
use App\Models\Logbook;

class SearchController extends Controller
{
    public function searchOrg(Request $request)
    {
        $result=Organization::when($request->filled('search'),function ($org)use($request)
        {
           $org->where ('name','LIKE','%'.$request->search.'%')->orWhere ('description','LIKE','%'.$request->search.'%');
        })->paginate($request->per_page);
        if(count($result)){
            return response()->json($result);
        }
        else{
            return response()->json([
                "Result"=> 'Data not found'
            ], 404);
        }
    }

    public function searchLog(Request $request)
    {
        $result=Logbook::when($request->filled('search'),function ($log)use($request)
        {
            $log->where ('firstname','LIKE','%'.$request->search.'%')
            ->orWhere ('lastname','LIKE','%'.$request->search.'%')
            ->orWhere ('description','LIKE','%'.$request->search.'%');
        })->get();

        if($result){
            return response()->json([
                'result' => $result
            ]);
        }
        else{
            return response()->json([
                "Result"=> 'Data not found'
            ], 404);
        }

    }

}
