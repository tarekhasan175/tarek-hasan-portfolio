<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
        // Group skills by category as requested: { "backend": [...], "frontend": [...] }
        $skills = Skill::all()->groupBy('category')->map(function ($items) {
            return $items->pluck('name');
        });

        return response()->json($skills);
    }
}
