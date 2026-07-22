# Personal Portfolio Site

Built with Next.js 14 (App Router) + Tailwind CSS.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) installed (v18 or newer).

```bash
cd portfolio-site
npm install
npm run dev
```

Open http://localhost:3000 — you should see the site. Edit `app/page.tsx`
and it'll hot-reload as you save.

Before going further, personalize:
- `app/page.tsx` — swap the `[bracketed]` project links for your real GitHub repo URLs, add your LinkedIn URL (or delete that button)
- `public/resume.pdf` — already your latest CV; replace it here whenever you update your CV

## 2. Push it to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
gh repo create portfolio-site --public --source=. --remote=origin --push
```

(No `gh` CLI? Create an empty repo at github.com/new named `portfolio-site`,
then `git remote add origin <url>` and `git push -u origin main`.)

## 3. Deploy it for free (Netlify)

```bash
npm install -g netlify-cli
netlify login
netlify init
```

`netlify init` will ask a few questions:
- "What would you like to do?" → **Create & configure a new site**
- Pick your team (your personal account is fine)
- Site name → whatever you like, or leave blank for a random one
- It auto-detects Next.js via `netlify.toml` (already included in this project)

Then deploy:

```bash
netlify deploy --prod
```

You'll get a live URL like `your-site-name.netlify.app` in under a minute.
Every time you `git push`, Netlify redeploys automatically once the repo
is linked (which `netlify init` does for you).

## 4. Buy a domain and connect it

1. Buy a domain from any registrar — Namecheap, Cloudflare Registrar, or
   Google Domains/Squarespace are all reputable and reasonably priced
   (`.dev` or `.me` domains suit a dev portfolio well, usually $10-15/year)
2. In the Netlify dashboard → **Domain settings** → **Add a domain**
3. Netlify shows you the DNS records to add (usually an A record for the
   apex domain and a CNAME for `www`) — or you can delegate to Netlify DNS
   by pointing your registrar's nameservers at Netlify's, which Netlify
   will show you
4. Add those records at your registrar's DNS settings
5. DNS can take a few minutes to a few hours to propagate — Netlify shows
   a green "Netlify DNS" or SSL-issued checkmark once it's live

That's it — a live, self-hosted site on your own domain, deployed straight
from your own GitHub repo.
