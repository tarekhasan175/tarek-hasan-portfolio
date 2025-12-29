This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Backend Integration

This frontend is designed to work with a Laravel backend API.

### Configuration

1.  Create a `.env.local` file in the root directory.
2.  Add the `NEXT_PUBLIC_API_URL` variable pointing to your backend API:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### API Endpoints

The application expects the following endpoints:

-   `/profile`: Returns profile information (name, title, bio, email, social links).
-   `/experiences`: Returns a list of work experiences.
-   `/educations`: Returns a list of educational background.
-   `/services`: Returns a list of services offered.
-   `/projects`: Returns a list of portfolio projects.
-   `/testimonials`: Returns a list of client testimonials.
-   `/skills`: Returns a list of skills categorized by type (backend, frontend, tools, database).
-   `/pricing`: Returns a list of pricing plans.
-   `/contact`: Accepts POST requests with `{ name, email, message }` for contact form submission.
