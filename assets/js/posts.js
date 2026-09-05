/**
 * VLOG_POSTS — centralized post data.
 *
 * TO ADD A NEW POST:
 * 1. Duplicate posts/template.html, rename it to match your new `id`
 *    (e.g. posts/mans-jaunais-ieraksts.html), and write your content inside it.
 * 2. Copy one object below and paste it into this array WHEREVER you want
 *    it to appear — posts are shown in the exact order they're listed here,
 *    top to bottom (no automatic sorting), and fill in its fields.
 * That's it — the homepage (first 3 entries) and the "Visi ieraksti" page
 * (all entries) update automatically.
 *
 * FIELD NOTES:
 * - id:        unique slug, lowercase, hyphens only. Must match the .html filename in /posts/
 * - title:     post title in Latvian
 * - date:      ISO format "YYYY-MM-DD" — shown on the card and post page (display only, does not affect order)
 * - excerpt:   short teaser, ~120–150 characters, shown on cards
 * - thumbnail: path to the card image, relative to the site root
 * - category:  one short label, e.g. "Pilsētvide", "Tradīcijas", "Ikdiena", "Svētki"
 * - url:       path to the post's own page, relative to the site root
 */

const VLOG_POSTS = [
  {
    id: "pirmais-ieraksts",
    title: "Ielu māksla kā pilsētas balss",
    date: "2026-09-04",
    excerpt: "Grafiti bieži tiek uzskatīti par vandālismu, taču tie var būt arī visatklātākais veids, kā pilsēta runā pati ar sevi.",
    thumbnail: "assets/img/posts/pirmais-ieraksts-thumb.jpg",
    category: "Pilsētvide",
    url: "posts/pirmais-ieraksts.html"
  },
  {
    id: "otrais-ieraksts",
    title: "Kāpēc mēs joprojām svinam Jāņus tā, kā svinēja vecvecāki",
    date: "2026-06-23",
    excerpt: "Pārdomas par to, kā senā tradīcija paliek dzīva pat pilsētas pagalmā, nevis tikai laukos.",
    thumbnail: "assets/img/posts/otrais-ieraksts-thumb.jpg",
    category: "Tradīcijas",
    url: "posts/otrais-ieraksts.html"
  },
  {
    id: "tresais-ieraksts",
    title: "Rīta rindā pie maiznīcas: mikrokultūras piemērs",
    date: "2026-04-11",
    excerpt: "Šķietami parasta ikdienas aina, kurā slēpjas negaidīti daudz nerakstītu noteikumu un pieklājības.",
    thumbnail: "assets/img/posts/tresais-ieraksts-thumb.jpg",
    category: "Ikdiena",
    url: "posts/tresais-ieraksts.html"
  }
  {
  id: "zales-plausana",
  title: "Zāles augstuma likumi: sabiedrības apņemšanās",
  date: "2026-09-05",
  excerpt: "Zāles garuma ierobežojumi šķiet pašsaprotama norma drošības un kārtības dēļ, bet vai aiz tiem neslēpjas arī mūsu standarti par pieņemamo, skaisto un sakopto?",
  thumbnail: "assets/img/posts/ielu-svetki-thumb.jpg",
  category: "Pilsētvide",
  url: "posts/zales-plausana.html"
}
];