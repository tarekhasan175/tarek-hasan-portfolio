<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function edit()
    {
        $profile = Profile::firstOrCreate([
            'email' => 'tarekhn175@gmail.com' // Default to ensure one exists
        ], [
            'name' => 'Md. Tarek Hasan',
            'title' => 'Full Stack Web Developer'
        ]);
        return view('admin.profile.edit', compact('profile'));
    }

    public function update(Request $request)
    {
        $profile = Profile::first();

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'about_me' => 'nullable|string',
            'email' => 'required|email',
            'cv_link' => 'nullable|url',
            'social_links' => 'nullable|array',
        ]);

        $profile->update($validated);

        return redirect()->route('admin.profile.edit')->with('success', 'Profile updated successfully.');
    }
}
