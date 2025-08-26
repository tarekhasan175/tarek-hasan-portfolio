<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // return view('welcome');
    return view('auth.login');
});
Route::get('/dashboard', function () {
    return view('layouts.main');
});
