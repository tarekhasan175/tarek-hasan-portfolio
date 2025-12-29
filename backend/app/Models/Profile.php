<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'bio',
        'about_me',
        'email',
        'cv_link',
        'social_links',
    ];

    protected $casts = [
        'social_links' => 'array',
    ];
}
