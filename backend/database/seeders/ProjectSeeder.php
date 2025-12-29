<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::create([
            'title' => 'Portfolio Website',
            'description' => 'My personal portfolio website built with Laravel.',
            'status' => 'in_progress',
            'start_date' => '2025-01-01',
            'due_date' => '2025-02-01',
            'assignee' => 'Tarek Hasan',
        ]);

        Project::create([
            'title' => 'E-commerce API',
            'description' => 'RESTful API for an e-commerce platform.',
            'status' => 'completed',
            'start_date' => '2024-11-01',
            'due_date' => '2024-12-15',
            'assignee' => 'Tarek Hasan',
        ]);

        Project::create([
            'title' => 'Task Manager App',
            'description' => 'A simple task manager using Vue.js and Firebase.',
            'status' => 'pending',
            'start_date' => '2025-03-01',
            'due_date' => '2025-04-01',
            'assignee' => 'Tarek Hasan',
        ]);
    }
}
