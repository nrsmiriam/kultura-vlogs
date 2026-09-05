/**
 * main.js — shared behavior for the whole site.
 * Depends on posts.js being loaded first (VLOG_POSTS must already exist).
 */

const LV_MONTHS = [
  "janvārī", "februārī", "martā", "aprīlī", "maijā", "jūnijā",
  "jūlijā", "augustā", "septembrī", "oktobrī", "novembrī", "decembrī"
];

/** Formats an ISO date "YYYY-MM-DD" into Latvian, e.g. "4. septembrī, 2026" */
function formatDateLV(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const dayNum = parseInt(day, 10);
  return `${dayNum}. ${LV_MONTHS[month - 1]}, ${year}`;
}

/** Returns VLOG_POSTS sorted newest-first by date. */
function getSortedPosts() {
  return [...VLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/** Builds the HTML string for a single post card. */
function renderPostCard(post) {
  return `
    <a class="post-card" href="${post.url}">
      <span class="post-card__fold" aria-hidden="true"></span>
      <div class="post-card__media">
        <img src="${post.thumbnail}" alt="" loading="lazy">
      </div>
      <div class="post-card__body">
        <h3 class="post-card__title">${post.title}</h3>
        <p class="post-card__excerpt">${post.excerpt}</p>
        <span class="post-card__date">${formatDateLV(post.date)}</span>
      </div>
    </a>
  `;
}

/** Injects up to `limit` posts, newest first, into the element with id `targetId`. */
function injectPosts(targetId, limit) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const sorted = getSortedPosts();
  const posts = limit ? sorted.slice(0, limit) : sorted;
  if (posts.length === 0) {
    target.innerHTML = `<p class="empty-state">Vēl nav neviena ieraksta. Pirmais tuvojas.</p>`;
    return;
  }
  target.innerHTML = posts.map(renderPostCard).join("");
}

/** Small shared UI behavior: mobile nav toggle + current year in footer. */
function initSiteChrome() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const yearEl = document.querySelector("[data-current-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mark the current page's nav link as active
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav] a").forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) link.classList.add("is-active");
  });
}

document.addEventListener("DOMContentLoaded", initSiteChrome);