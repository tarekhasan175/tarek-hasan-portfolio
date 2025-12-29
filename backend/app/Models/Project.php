<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'link',
        'status',
        'start_date',
        'due_date',
        'assignee',
    ];

    protected $casts = [
        'start_date' => 'date',
        'due_date' => 'date',
    ];
}
