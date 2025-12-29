<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\PricingController;
use App\Http\Controllers\Api\ContactController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/profile', [ProfileController::class, 'index']);
Route::get('/experiences', [ExperienceController::class, 'index']);
Route::get('/educations', [EducationController::class, 'index']);
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/testimonials', [TestimonialController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/pricing', [PricingController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
