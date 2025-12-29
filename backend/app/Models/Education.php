<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $table = 'education'; // Explicitly define table name as singular 'education' is standard in migration but Laravel might expect 'educations'

    protected $fillable = [
        'degree',
        'institution',
        'period',
        'description',
    ];
}
