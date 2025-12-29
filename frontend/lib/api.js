const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

export function getImageUrl(path) {
    if (!path) return "/assets/images/item/service-item-1.webp"; // Default fallback
    if (path.startsWith('http')) return path;
    return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

async function fetchAPI(endpoint, options = {}) {
    try {
        const res = await fetch(`${API_URL}${endpoint} `, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            cache: 'no-store', // Ensure dynamic data fetching
        });

        if (!res.ok) {
            console.error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText} `);
            // Return null or empty object/array depending on expected structure to prevent crash
            return null;
        }

        return res.json();
    } catch (error) {
        console.error(`Error fetching ${endpoint}: `, error);
        return null;
    }
}

export async function getProfile() {
    return fetchAPI('/profile') || {};
}

export async function getExperiences() {
    return fetchAPI('/experiences') || [];
}

export async function getEducations() {
    return fetchAPI('/educations') || [];
}

export async function getServices() {
    return fetchAPI('/services') || [];
}

export async function getProjects() {
    return fetchAPI('/projects') || [];
}

export async function getTestimonials() {
    return fetchAPI('/testimonials') || [];
}

export async function getSkills() {
    return fetchAPI('/skills') || {};
}

export async function getPricing() {
    return fetchAPI('/pricing') || [];
}

export async function submitContact(data) {
    return fetchAPI('/contact', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}
