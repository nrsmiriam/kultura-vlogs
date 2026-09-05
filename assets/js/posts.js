/**
 * VLOG_POSTS — centralized post data.
 *
 * TO ADD A NEW POST:
 * 1. Duplicate posts/template.html, rename it to match your new `id`
 *    (e.g. posts/mans-jaunais-ieraksts.html), and write your content inside it.
 * 2. Copy one object below and paste it into this array — anywhere, order
 *    doesn't matter, posts are always shown newest-first by `date`.
 * That's it — the homepage (first 3, newest) and the "Visi ieraksti" page
 * (all entries, newest first) update automatically.
 *
 * FIELD NOTES:
 * - id:        unique slug, lowercase, hyphens only. Must match the .html filename in /posts/
 * - title:     post title in Latvian
 * - date:      ISO format "YYYY-MM-DD" — controls sort order (newest first) and is shown on the card/post page
 * - excerpt:   short teaser, ~120–150 characters, shown on cards
 * - thumbnail: path to the card image, relative to the site root
 * - url:       path to the post's own page, relative to the site root
 *
 * COMMON MISTAKE: forgetting the comma between two objects, or between two
 * fields, will silently break EVERY post on the site (not just the new one) —
 * see the README for how to check for this.
 */

const VLOG_POSTS = [
  {
    id: "Zāles augstuma likumi: sabiedrības apņemšanās",
    title: "Zāles augstuma likumi: sabiedrības apņemšanās — Kultūra ap katra stūra",
    date: "2026-09-05",
    excerpt: "Zāles garuma ierobežojumi šķiet pašsaprotama norma drošības un kārtības dēļ, bet vai aiz tiem neslēpjas arī mūsu standarti par pieņemamo, skaisto un sakopto?",
    thumbnail: "assets/img/posts/pirmais-ieraksts-thumb.jpg",
    url: "posts/zales-plausana.html"
  }
];