<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\UserController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\LogbookController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\api\AuthenticationController;
use App\Http\Controllers\GuardListController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminOrganizationController;

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
    Route::put('change-password/{id}', 'change_password');
});

// Admin Routes
Route::group(['middleware' => ['api', 'role:admin', 'auth:api']], function () {
    Route::get('admin-user', [UserController::class, 'index']);

    Route::controller(GuardListController::class)->group(function() {
        Route::get('guard-list', 'index');
    });

    Route::controller(DashboardController::class)->group(function () {
        Route::get('dashboard', 'index');
    });

    Route::controller(AdminOrganizationController::class)->group(function () {
        Route::get('admin-org-list', 'index');
    });

    Route::post('admin-logout', [AuthenticationController::class, 'logout']);
});

// Users Routes
Route::group(['middleware' => ['api', 'role:user', 'auth:api']], function () {
    Route::get('auth-user', [UserController::class, 'index']);

    Route::controller(OrganizationController::class)->group(function() {
        Route::post('create-org', 'store');
        Route::get('org-list', 'index');
        Route::get('show-org/{id}', 'show');
        Route::put('update-org/{id}', 'update');
        Route::put('status-update/{id}', 'status_update');
        Route::delete('delete_org/{id}', 'destroy');
    });

    Route::controller(HistoryController::class)->group(function(){
        Route::get('logsearch/{id}', 'loghistory');
        Route::get('show-logdate/{id}', 'date_list');
    });

    Route::controller(AttendanceController::class)->group(function () {
        Route::post('create-attendance-logbook/{id}', 'store');
        Route::get('list-attendance-logbook/{id}/{date}', 'index');
    });

    Route::controller(NoteController::class)->group(function () {
        Route::post('create-note-logbook/{id}', 'store');
        Route::get('list-note-logbook/{id}/{date}', 'index');
    });

    Route::controller(LogbookController::class)->group(function() {
        Route::post('log-user/{id}', 'store');
        Route::get('logbook/{id}/{date}', 'index');
        Route::delete('delete_log/{id}', 'destroy');
    });

    Route::controller(SearchController::class)->group(function(){
        Route::get('search-org/{id}','searchOrg');
        Route::get('search-log/{id}','searchLog');
    });

    Route::post('user-logout', [AuthenticationController::class, 'logout']);
});
