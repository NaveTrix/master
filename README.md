# Navetrix Technologies Website

This is a [Next.js](https://nextjs.org) project for Navetrix Technologies, styled with Tailwind CSS and optimized for SEO, accessibility, and responsive design.

## Getting Started (Development)

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Build for Production

1. **Build the app:**
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. **Start the production server:**
   ```bash
   npm start
   # or
   yarn start
   # or
   pnpm start
   ```

## Deployment

- **Vercel (Recommended):**
  1. Push your code to GitHub.
  2. Go to [Vercel](https://vercel.com/import) and import your repository.
  3. Follow the prompts to deploy. No extra configuration is needed for most cases.

- **Other Hosting:**
  1. Build the app as above.
  2. Serve the `.next` output with a Node.js server or compatible platform.

## Useful Commands

- `npm run lint` — Check for lint errors
- `npm run build` — Build for production
- `npm run dev` — Start development server
- `npm start` — Start production server

## Project Structure

- `src/app/` — Main application code (pages, components, styles)
- `public/` — Static assets (images, favicon, etc.)
- `tailwind.config.js` — Tailwind CSS configuration
- `next.config.ts` — Next.js configuration

## Additional Notes

- All navigation, modals, and CTAs are implemented as reusable components.
- SEO, accessibility, and responsive best practices are followed.
- For any issues, check the console output or open an issue in your repository.

---

For more, see the [Next.js documentation](https://nextjs.org/docs) and [Vercel deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).
