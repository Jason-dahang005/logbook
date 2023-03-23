<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\guard\LogbookController;
use App\Http\Controllers\guard\OrganizationController;






Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();

});

Route::resource('organizations', OrganizationController::class);

Route::get('logbooks', [LogbookController::class,'index']);
Route::post('logbooks', [LogbookController::class,'store']);
Route::get('logbooks/{id}', [LogbookController::class,'show']);
Route::post('logbooks/{id}',[LogbookController::class,'update']);
Route::post('logbooks/{id}', [LogbookController::class,'destroy']);