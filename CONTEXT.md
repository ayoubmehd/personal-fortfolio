# Context

Personal portfolio and blog for Ayoub Elmahdaoui, branded **Ow1.dev**. Forked from the
[Astro Sphere](https://github.com/markhorn-dev/astro-sphere) theme and customised since.

Static Astro 4 site — no SSR adapter, no server runtime. Every route is prerendered to HTML at
build time and served as files. Solid.js supplies the few interactive islands (tag filters, search,
skills chart); everything else is plain Astro components and inline scripts in `public/js/`.

| Concern | Detail |
| --- | --- |
| Build | `pnpm build` (`astro check && astro build`) → `dist/` |
| Local | `pnpm dev` |
| Hosted | Netlify, `https://n1-owl.netlify.app` |
| Node / pnpm | 22.14 / 9.15 |

The `Ow1.dev` name appears throughout the UI but the domain is **not registered** — it doesn't
resolve. `site` in `astro.config.mjs` points at the Netlify URL and should be updated if the
domain is ever purchased, along with `data-domains` on the analytics tracker.

## Glossary

Use these terms in commit messages, issues, and code. They match what the code already calls things.

**Collection** — one of the four Astro content collections defined in `src/content/config.ts`:
`blog`, `projects`, `work`, `legal`. Schemas differ; `blog` and `projects` are near-identical
apart from `demoUrl` / `repoUrl`.

**Entry** — a single item in a collection. Prefer this over "post" or "item" when the code could
mean either a blog or a project, since the shared layouts are written against
`CollectionEntry<"projects"> | CollectionEntry<"blog">`.

**Article** — an entry that has its own detail page, i.e. a `blog` or `projects` entry. `work` and
`legal` are collections but not articles: work entries all render onto the single `/work` page.
The article layouts (`ArticleTopLayout`, `ArticleBottomLayout`) are shared by both.

**Work** — a place the author has been employed, and the collection of those places. Shown together
on one page. _Avoid_: project, portfolio, "my work".

**Project** — a portfolio piece with its own page. A **Project** is an **Article**. _Avoid_: work.

**Slug** — an entry's URL segment, derived by Astro from the containing folder name
(`src/content/blog/<slug>/index.md`). It is **not** prefixed with the collection name; a blog
entry's slug is just `why-typescript-over-javascript-...`. Code that assumes otherwise is buggy —
see Known drift.

**Draft** — `draft: true` in an entry's frontmatter. Means the entry is not published: it is
excluded from listings, search, prev/next navigation, RSS, the sitemap, and is not built as a page
at all. Draft files still live in the repo; they simply produce no output.

**Hero** — the full-viewport introduction on the home page: the claim, the name, the technologies
shown, and the actions. The skills chart and the recent-projects list are not part of it.
_Avoid_: header, banner, above the fold.

**Placement** — where on a page a social link appears: `hero`, `contact`, or `footer`. The `hero`
value means the link is rendered inside the **Hero**; it is not a name for the Hero itself. All
three render from the same `SOCIALS` array in `src/consts.ts`, so placement is what distinguishes
them. Recorded as an analytics event property, not part of the event name.

**Event** — a Umami custom event fired by a `data-umami-event` attribute on a link. Named for the
destination, never the page: `social-email`, `social-github`, `social-linkedin`, `project-demo`,
`project-repo`, `cta-view-projects`. The primary Hero action goes to the projects page, so the
event is named for that destination. The page is already recorded as `url_path` on every event, so
event names must not encode it.

**Pageview** — automatic per-page-load hit from the Umami tracker. Requires no wiring; covers every
route including each article. Distinct from an Event.

**Deploy preview** — a Netlify build for a branch or PR, served on a `*.netlify.app` subdomain that
is not `n1-owl.netlify.app`. Deliberately excluded from analytics.

## Analytics

Umami Cloud (Hobby plan: free, 100K events/month, 6 months retention), configured as a single
script tag in `src/components/BaseHead.astro`, which every page reaches via `PageLayout`.

Decisions worth not relitigating:

- **Cookieless by design.** Umami sets no cookies, so the site needs no consent banner and no
  cookie policy. This is the main reason it was chosen over Google Analytics.
- **The website ID is public.** It ships in the HTML of every page, so it is hardcoded rather than
  injected via a `PUBLIC_*` environment variable. An env var would add a Netlify config step and a
  silent-failure mode for no benefit.
- **`data-domains` handles environment exclusion**, not a build-time `NODE_ENV` check. The tracker
  only runs when `window.location.hostname` matches, which covers localhost, `astro preview`, and
  deploy previews in one place that stays correct regardless of how the site is built.
- **Outbound links are tagged manually.** Umami does not track them automatically. Umami's docs
  offer an auto-tagging snippet that stamps every outbound anchor; it was rejected because it
  collapses all clicks into one bucket and breaks silently if View Transitions is ever enabled.

The two questions the analytics exists to answer: which posts get read, and whether reading a post
leads to a GitHub, LinkedIn, or email click. Anything that doesn't serve those is out of scope.

## Known drift

Template leftovers and bugs, recorded so they aren't mistaken for intent:

- `SITE.AUTHOR` in `src/consts.ts` is still `"Mark Horn"`, the theme author, and
  `SITE.DESCRIPTION` still describes Astro Sphere.
- `src/pages/rss.xml.ts` builds links with `item.slug.startsWith("blog")`, which is never true
  (see Slug). Every feed item, blog posts included, is published with a `/projects/` link and
  therefore 404s.
- `/legal/privacy` and `/legal/terms` are lorem ipsum with `[Your Company Name]` placeholders. The
  footer links to them are commented out, so they are unreachable in the UI.
- `ViewTransitions` is imported but commented out in `BaseHead.astro`. Several components listen
  for `astro:after-swap` / `astro:before-swap`, so that code is currently dead. Enabling it would
  require re-checking pageview tracking, which currently relies on full page loads.
- A `.nuxt/` directory with 30 files is committed. Nothing in the project uses Nuxt.
- The six `01-` … `06-astro-sphere-*` blog entries are theme tutorials, not authored content. They
  are drafts, so they no longer build, but the files remain.

## Decision records

No `docs/adr/` yet. The analytics decisions above are the first set substantial enough to warrant
ADRs; promote them if a second reader ever needs the reasoning in full.
