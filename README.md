# Kultūra ap katra stūra

Personīgs kultūras vlogs — vienkāršs, bez datubāzes, bez build soļa. Tīra HTML5 + CSS3 + vanilla JS.

## Kā publicēt jaunu ierakstu (3 soļi)

1. **Nokopē veidni.** Iekš `posts/` nokopē `template.html` un pārsauc, piem. `posts/mans-jaunais-ieraksts.html`. Faila nosaukumam jāsakrīt ar `id` lauku, ko pievienosi 2. solī.
2. **Uzraksti saturu.** Atver jauno failu un aizvieto vietturus (skaties `<!-- STEP 1 -->` līdz `<!-- STEP 6 -->` komentārus failā) — nosaukumu, kategoriju, datumu, virsattēlu, tekstu. Video un galerijas sadaļas ir izvēles — izdzēs tās, ja konkrētajam ierakstam tās nav vajadzīgas.
3. **Pievieno ierakstu sarakstam.** Atver `assets/js/posts.js`, nokopē vienu objektu no `VLOG_POSTS` masīva un ielīmē to masīvā **tajā vietā, kur vēlies, lai ieraksts parādās** — ieraksti tiek rādīti tieši tādā secībā, kādā tie ir šajā masīvā (nekāda automātiska kārtošana pēc datuma nenotiek).

Sākumlapa vienmēr rāda pirmos 3 masīva ierakstus, "Visi ieraksti" lapa — visus, tādā pašā secībā.

## Failu struktūra

```
index.html          → Sākumlapa
posts.html           → Visi ieraksti
par-vlogu.html        → Par vlogu
kontakti.html          → Kontakti (kontaktinformācija, bez formas)
posts/template.html     → Veidne jauniem ierakstiem
posts/*.html              → Atsevišķi ieraksti
assets/css/style.css       → Viss vietnes dizains
assets/js/posts.js          → Ierakstu dati (VIENĪGĀ vieta, kur pievienot jaunus ierakstus)
assets/js/main.js            → Attēlošanas loģika
assets/img/                   → Attēli (posts/, gallery/, site/)
```

## Attēli

Aizvieto vietturu attēlus (`PLACEHOLDER-*.jpg` failu nosaukumos) ar īstiem attēliem šajās mapēs:
- `assets/img/posts/` — kartīšu sīktēli un ierakstu virsattēli
- `assets/img/gallery/` — iekļautās galerijas bildes
- `assets/img/site/` — logo, favicon

Homepage un "Par vlogu" lapā portreta attēls netiek izmantots — abas ir teksta-only.

## Izvietošana (Netlify)

Push uz GitHub → savieno repo ar Netlify → nekādu build komandu nav nepieciešams (statisks HTML/CSS/JS).