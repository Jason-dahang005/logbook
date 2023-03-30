<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\UserController;
use App\Http\Controllers\LogbookController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\api\AuthenticationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Authentication Routes
Route::controller(AuthenticationController::class)->group(function() {
    Route::post('register', 'register');
    Route::post('login', 'login');
});

// Admin Routes
Route::group(['middleware' => ['api', 'role:admin', 'auth:api']], function () {
    Route::get('auth-user', [UserController::class, 'index']);
    Route::controller(OrganizationController::class)->group(function() {
        Route::post('create-org', 'store');
    });

    Route::post('logout', [AuthenticationController::class, 'logout']);
});

// Users Routes
Route::group(['middleware' => ['api', 'role:user', 'auth:api']], function () {
    Route::get('auth-user', [UserController::class, 'index']);
    Route::controller(OrganizationController::class)->group(function() {
        Route::post('create-org', 'store');
        Route::get('org-list', 'index');
        Route::get('show-org/{id}', 'show');
        Route::post('update-org/{id}', 'update');

    });

    Route::controller(LogbookController::class)->group(function() {
        Route::post('log-user/{id}', 'store');
        Route::get('logbook/{id}', 'index');
    });

    Route::controller(SearchController::class)->group(function(){
        Route::get('search-org','searchOrg');
        Route::get('search-log/{id}','searchLog');
    });

    Route::post('logout', [AuthenticationController::class, 'logout']);
});
