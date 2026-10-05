# Shahd Mohammed - Portfolio

Static website (no build step). Open `index.html` in a browser, or upload the whole folder to any static host.

```
index.html        page structure (home + "All Projects" page + "All Certificates" page)
css/style.css     all styles (dark/light tokens, RTL support)
js/main.js        language (EN/AR), theme, animations, projects, certificates, contact form
assets/           images (logo layers, hero art, project previews, certificates, service icons)
```

## Contact form -> your email
The form posts to FormSubmit (`FORM_ENDPOINT` at the top of `js/main.js`), which forwards messages to shahd.m87a@gmail.com.
1. Host the site (Netlify Drop, GitHub Pages, Vercel...). It does not work from a local file.
2. Send one test message from the live site.
3. FormSubmit emails you once: click "Activate". After that every message reaches your inbox.
If the request fails, the form falls back to opening the visitor's email app.

## Edit quickly (all in `js/main.js`)
- **Links:** `LINKS` object (LinkedIn, GitHub profile, Recipes repo). Digital Detective currently points to the GitHub profile.
- **Projects:** `PROJECTS` array (add `url` to link a project to its repo; without `url` it opens a preview window).
- **Certificates:** `CERTS` array + images in `assets/`. The first two show on the home page, all of them on the "All Certificates" page.
- **Arabic text:** the `AR` object at the top.
- **Colors:** CSS variables at the top of `css/style.css` (`--ac`, `--ac2`, `--vio`).
- **Logo:** `assets/logo-center.png` (static) + `assets/logo-ring.png` (the ring that rotates).
