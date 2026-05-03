# Physio Grade — Website

Marketing website for **Physio Grade Physiotherapy Centre**, Palwal.
Stack: **Vite + React + TypeScript + Tailwind CSS + React Router**.

---

## Quick start (local development)

```bash
npm install        # install dependencies (already done if you cloned this)
npm run dev        # start dev server at http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the built dist/ locally to test before upload
```

---

## How to update content (no code changes needed)

All editable content lives in **`src/config/`**. Edit a file → run `npm run build` → re-upload `dist/`.

| File | What it controls |
| --- | --- |
| `src/config/site.ts` | Business name, phone, WhatsApp, email, address, hours, map, social links, YouTube channel |
| `src/config/services.ts` | All 8 service detail pages (titles, summaries, conditions, techniques, FAQs) |
| `src/config/conditions.ts` | Conditions list shown on `/conditions` (categorised) |
| `src/config/faqs.ts` | Home-page FAQ accordion |
| `src/config/testimonials.ts` | Patient testimonials carousel — **replace placeholders with real Google reviews** |
| `src/config/videos.ts` | YouTube videos in the gallery (just add the video ID) |

### Adding a YouTube video

1. Copy the YouTube URL of the video (e.g., `https://youtu.be/ABC123XYZ` or `https://www.youtube.com/watch?v=ABC123XYZ`).
2. The **video ID** is the part after `v=` or `youtu.be/` — in this example, `ABC123XYZ`.
3. Open `src/config/videos.ts` and add an entry:

```ts
{
  id: "ABC123XYZ",
  title: "Your video title",
  description: "Short description shown under the title.",
  durationLabel: "4:32",
  category: "Exercises", // or Treatments, Patient Stories, Tips
}
```

That's it. The video appears in the home-page gallery and on the `/videos` page automatically.

---

## TODO checklist before going live

- [ ] Replace `email`, `address.line1`, and `mapsEmbedSrc` in `src/config/site.ts`. Get the embed URL from Google Maps → Share → Embed → copy the `src=` attribute.
- [ ] Update `socials` and `youtubeChannel` URLs in `src/config/site.ts`.
- [ ] Replace the founder placeholder name + bio in `src/routes/About.tsx` (search for "TODO").
- [ ] Replace the four clinic photo URLs in `src/routes/About.tsx` and the doctor photo. You can host real photos in `public/images/` and reference them as `/images/your-photo.jpg`.
- [ ] Replace placeholder testimonials in `src/config/testimonials.ts` with real verified Google reviews.
- [ ] Add real YouTube video IDs in `src/config/videos.ts` (the placeholders are just sample IDs).
- [ ] Add an `og-image.jpg` (1200×630) to `public/` for nicer link previews on WhatsApp / Facebook.
- [ ] Update `https://physiograde.in` in `public/sitemap.xml` and `public/robots.txt` if you choose a different domain.

---

## Deploying to GoDaddy

The site builds to a static `dist/` folder — pure HTML/CSS/JS. **No server, no Node.js, no database required.** Any GoDaddy **Linux/cPanel** plan works (don't pick the Windows plan).

### One-time setup

1. Buy your domain + a GoDaddy Linux Web Hosting plan.
2. From the GoDaddy dashboard, point the domain at the hosting plan (it's automatic if you bought both at the same time).

### Deploy steps

1. **Build:**
   ```bash
   npm run build
   ```
   This produces a `dist/` folder containing `index.html`, an `assets/` directory, the `.htaccess` rewrite rules, `robots.txt`, `sitemap.xml`, and your favicon.

2. **Open cPanel → File Manager → `public_html/`** (this folder *is* your domain root).

3. **Delete the default GoDaddy placeholder** files in `public_html/` (usually `index.html`, `cgi-bin/` you can leave alone).

4. **Upload everything inside `dist/`** (not the `dist` folder itself — its **contents**) into `public_html/`.
   - In cPanel File Manager: click *Upload*, drag the files in.
   - Or use FTP (FileZilla → connect with the credentials cPanel gives you → drag `dist/*` to `public_html/`).

5. **Make sure `.htaccess` got uploaded.** It's a hidden file — in cPanel File Manager toggle "Show Hidden Files" to verify. Without it, `/about` and other deep links will 404 on refresh.

6. **Enable HTTPS:** cPanel → SSL/TLS Status → "Run AutoSSL". Wait ~10 minutes. Once green, edit `public/.htaccess` and uncomment the three "Force HTTPS" lines, rebuild, and re-upload.

7. **Visit your domain** and test:
   - Click "Call Now" on a phone — opens dialer with `+91 90509 19288`.
   - Click WhatsApp — opens chat with the pre-filled message.
   - Refresh `/about`, `/services/back-and-neck-pain` — they should load (no 404).

### Re-deploying after content updates

```bash
npm run build           # rebuild dist/
# upload dist/* to public_html/ via cPanel File Manager or FTP, overwriting
```

That's the whole loop.

### Common gotchas

| Issue | Fix |
| --- | --- |
| Refreshing `/about` returns 404 | `.htaccess` not uploaded, or hosting is Windows (not Linux). Check both. |
| Old version still shows after re-upload | Browser cache. Hard refresh (Ctrl+Shift+R) or clear site data. cPanel → "Optimize Website" can also help. |
| Map shows generic Palwal pin instead of clinic | You haven't replaced `mapsEmbedSrc` in `site.ts` with the real Google Maps embed URL. |

---

## Project layout

```
physio_grade/
├── public/                   Static files copied as-is into dist/
│   ├── .htaccess             SPA routing + caching for Apache (GoDaddy)
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/               (Add your real photos here)
├── src/
│   ├── main.tsx, App.tsx     App shell + router
│   ├── config/               Single source of truth for content
│   ├── lib/                  SEO helpers, JSON-LD builders, utilities
│   ├── components/
│   │   ├── layout/           Header, Footer, FloatingActions
│   │   ├── ui/               CallButton, WhatsAppButton, Accordion, VideoCard, ...
│   │   └── sections/         Hero, ServicesGrid, VideoGallery, FAQ, ...
│   ├── routes/               Home, About, ServicesIndex, ServiceDetail, Conditions, Videos, Contact, NotFound
│   └── styles/index.css      Tailwind directives + base typography
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Contact form

The contact form (`/contact`) submits to **formsubmit.co**, a free no-signup service that forwards form submissions to your email.

**To activate it:**
1. Set the real email in `src/config/site.ts` (the `email` field).
2. The first time someone submits, formsubmit.co sends a confirmation email to that address — click the link in that email to activate forwarding.
3. After that, every form submission lands in your inbox.

If you want to switch to a different solution later (Google Forms, Netlify Forms, your own email script), the form lives at `src/routes/Contact.tsx` and submits to a single URL — easy to change.
