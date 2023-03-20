<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\api\AuthenticationController;
use App\Http\Controllers\guard\OrganizationController;






Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::controller(AuthenticationController::class)->group(function() {
//     Route::post('register', 'register');
// });

// Route::get('organizations', [OrganizationController::class,'index']);
// Route::post('organizations', [OrganizationController::class,'store']);
// Route::get('organizations/{id}', [OrganizationController::class,'show']);
// Route::post('organizations/{id}', [OrganizationController::class,'update']);
// Route::delete('organizations/{id}', [OrganizationController::class,'destroy']);
Route::resource('organizations', OrganizationController::class);