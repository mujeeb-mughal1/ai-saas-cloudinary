## Cloudinary Showcase — Full-Stack Media SaaS Platform

A production-grade media management platform engineered for efficient video and image lifecycle management, featuring seamless cloud integration, robust database tracking, and a high-performance UI/UX.

### Key Features

* **Intelligent Media Pipeline:** Stream-based video uploads with automated file validation and metadata indexing in PostgreSQL, paired with on-the-fly image transformations leveraging `CldImage` and AI-driven gravity cropping.
* **Dual-State Video Interaction:** Implements an optimized user experience with silent 15-second hover-previews for rapid content scanning, alongside a secondary click-to-play mode supporting native audio and full playback controls.
* **Social Share & Transformation Hub:** Real-time aspect ratio cropping tailored for multi-platform publishing, backed by a secure `blob`-based download utility with dynamic naming and loading state protection.
* **Modern Tech Stack:** Built using Next.js (App Router), Tailwind CSS, daisyUI, Prisma ORM, and PostgreSQL.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
