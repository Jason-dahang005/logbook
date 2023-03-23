<?php

namespace App\Http\Controllers\guard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\guard\Logbook;
use App\Models\guard\Organization;
use Illuminate\Support\Facades\Validator;


use App\Http\Controllers\guard\BaseController as BaseController;

class LogbookController extends BaseController
{
    public function index(Request $request)
    {
        $logbooks = Logbook::when($request->filled('search'),function($log)use ($request
        ){
           $log->where('fname','lname','description','org_id','LIKE','%'.$request->search.'%')
           ->orWhere ('date','LIKE','%'.$request->search.'%');
        })->paginate($request->per_page);
      
        return response()->json([
            "success" => true,
            "message" => "Logs List",
            "data" => $logbooks
        ]);
    }
    

    public function store(Request $request, $id)
    {
      $organization = Organization::find($id);

        $request->validate([
            'fname' => 'required',
            'lname' => 'required',
            'description' => 'required',
           

    ]);
     $logbook = Logbook::create($request->all());
    $organization->save();
    return response()->json([
    "success" => true,
    'org_id'=> $organization,
    "message" => "Logs created successfully.",
    "data" => $logbook
    ]);
   
    } 

    
    public function show($id)
    {
    
        $logbook  = Logbook::find($id);
    
        if (is_null($logbook)) {
            return $this->sendError('Logs not found!');
        }
     
        return response()->json([
            "success" => true,
            "message" => "Logs Retrieved successfully.",
            "data" => $logbook
        
            ]);
    }
    
    
    public function update(Request $request,Logbook $logbook)
    {
        
        $input = $request->all();
     
        $validator = Validator::make($input, [
            'fname' => 'required',
            'lname' => 'required',
            'description' => 'required'
        ]);
     
        if($validator->fails()){
            return $this->sendError('Error logs name or description!', $validator->errors());       
        }
        $logbook->fname = $input['fname'];
        $logbook->lname = $input['lname'];
        $logbook->description = $input['description'];
        $logbook->save();
     
        return response()->json([
            "success" => true,
            "message" => "Logs updated successfully.",
            "data" => $logbook
            ]);
    }
   
    
    public function destroy(Logbook $logbook)
    {
        $logbook->delete();
        
        return response()->json([
            "success" => true,
            "message" => "Logs deleted successfully.",
            
            ]);
    }
}
