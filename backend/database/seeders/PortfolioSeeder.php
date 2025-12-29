<?php

namespace Database\Seeders;

use App\Models\Education;
use App\Models\Experience;
use App\Models\Pricing;
use App\Models\Profile;
use App\Models\Service;
use App\Models\Skill;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        // Profile
        Profile::create([
            'name' => 'Md. Tarek Hasan',
            'title' => 'Full Stack Web Developer',
            'bio' => 'Short bio for meta description or header...',
            'about_me' => 'Longer text for the About section...',
            'email' => 'tarekhn175@gmail.com',
            'cv_link' => 'https://example.com/my-cv.pdf',
            'social_links' => [
                [
                    'platform' => 'GitHub',
                    'url' => 'https://github.com/tarekhasan175',
                    'icon' => 'icon-GitHub'
                ],
                [
                    'platform' => 'LinkedIn',
                    'url' => 'https://linkedin.com/in/...',
                    'icon' => 'icon-LinkedIn'
                ]
            ]
        ]);

        // Experiences
        Experience::create([
            'title' => 'Senior Developer',
            'company' => 'Tech Solutions Inc.',
            'period' => '2020 - Present',
            'description' => 'Led backend development...'
        ]);

        // Education
        Education::create([
            'degree' => 'B.Sc in Computer Science',
            'institution' => 'University of Dhaka',
            'period' => '2015 - 2019',
            'description' => 'Graduated with honors...'
        ]);

        // Services
        Service::create([
            'title' => 'Custom AI Solutions',
            'description' => 'Building custom AI models...',
            'number' => '01',
            'image' => '/assets/images/item/service-item-1.webp'
        ]);

        // Testimonials
        Testimonial::create([
            'quote' => 'Tarek delivered exceptional work...',
            'author' => 'John Doe',
            'position' => 'CEO, Tech Corp',
            'image' => '/assets/images/user/client1.png'
        ]);

        // Skills
        $skills = [
            'backend' => ['PHP', 'Laravel', 'Node.js'],
            'frontend' => ['React', 'Next.js', 'Tailwind'],
            'database' => ['MySQL', 'PostgreSQL'],
            'tools' => ['Git', 'Docker', 'AWS']
        ];

        foreach ($skills as $category => $names) {
            foreach ($names as $name) {
                Skill::create([
                    'category' => $category,
                    'name' => $name
                ]);
            }
        }

        // Pricing
        Pricing::create([
            'name' => 'Standard Plan',
            'price' => '$29',
            'unit' => '/per hour',
            'features' => [
                '60 keywords',
                '6,000 monthly visitors',
                '8 blogs / month'
            ]
        ]);
    }
}
