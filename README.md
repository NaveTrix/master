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

## Build and Export for Static Hosting (Namecheap, cPanel, etc.)

1. **Build the app for static export:**
   > Next.js 13+ with the app directory uses `output: "export"` in `next.config.js` for static export. You do NOT need to run `npm run export`.
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```
   This will generate a static site in the `out` directory.

2. **Deploy to Namecheap or cPanel:**
   - Log in to your Namecheap cPanel.
   - Go to the File Manager and navigate to the `public_html` directory.
   - Upload the contents of the `out` folder (not the folder itself, just its contents).
   - Make sure your domain is pointed to Namecheap and DNS is set up.
   - Visit your domain to verify the deployment.

## Deploying to Vercel (Recommended)

[Vercel](https://vercel.com) is the official hosting platform for Next.js and provides seamless integration, serverless functions, and automatic CI/CD.

### 1. Deploy with One Click
- Go to [https://vercel.com/import](https://vercel.com/import) and import your GitHub/GitLab/Bitbucket repository, or use the Vercel CLI:
  ```bash
  npx vercel
  ```
- Follow the prompts to link your project and select the correct framework (Next.js).

### 2. Set Environment Variables
- In your Vercel dashboard, go to your project > Settings > Environment Variables.
- Add the following variables (from your `.env` file):
  - `RESEND_API_KEY`
  - `RESEND_FROM`
  - `RESEND_TO`
  - `HCAPTCHA_SECRET`
  - `NEXT_PUBLIC_HCAPTCHA_SITEKEY`
- Deploy or redeploy your project after saving variables.

### 3. Production URL
- After deployment, your site will be live at `https://your-vercel-project-name.vercel.app` or your custom domain (e.g., `https://navetrix.com`) if configured.
- You can manage custom domains in the Vercel dashboard.

### 4. Serverless Functions
- API routes (e.g., `/api/contact`) work out of the box on Vercel, enabling features like the contact form with Resend and hCaptcha.

## Environment Variables & Third-Party Service Setup

### 1. Resend (Transactional Email Service)
- **Sign up at [Resend](https://resend.com/)** and create a new API key.
- Add the following to your `.env` file:
  ```env
  RESEND_API_KEY=your_resend_api_key
  RESEND_FROM=your_verified_sender_email
  RESEND_TO=recipient_email_address
  ```
- `RESEND_FROM` must be a verified sender in your Resend dashboard.
- `RESEND_TO` is the email address where contact form submissions will be sent.

### 2. hCaptcha (Anti-Spam Protection)
- **Sign up at [hCaptcha](https://www.hcaptcha.com/)** and register your site.
- In your hCaptcha dashboard, get your **Site Key** and **Secret Key**.
- Add the following to your `.env` file:
  ```env
  HCAPTCHA_SECRET=your_hcaptcha_secret_key
  NEXT_PUBLIC_HCAPTCHA_SITEKEY=your_hcaptcha_site_key
  ```
- `NEXT_PUBLIC_HCAPTCHA_SITEKEY` is used in the frontend to render the widget.
- `HCAPTCHA_SECRET` is used in the backend to verify submissions.

### 3. Example `.env` file
See `.env.example` for a template:
```env
RESEND_API_KEY=xxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM=noreply@navetrix.com
RESEND_TO=info@navetrix.com
HCAPTCHA_SECRET=your_hcaptcha_secret_key
NEXT_PUBLIC_HCAPTCHA_SITEKEY=your_hcaptcha_site_key
```

---

## Notes
- Never commit your real `.env` file or secrets to version control.
- For production, set all environment variables securely on your hosting platform.
- For static hosting, only features that do not require a Node.js server (e.g., API routes) will work. Contact forms using Resend/hCaptcha will only work if you deploy to a platform that supports serverless functions or Node.js (e.g., Vercel, Netlify, or a VPS).

---

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
