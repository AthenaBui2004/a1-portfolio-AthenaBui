// Sections displayed by the navigation.
const pageIds = ["home", "projects", "skills", "contact"];

const pages = pageIds.map((id) => {
  return document.getElementById(id);
});

const navigationLinks = document.querySelectorAll(
  'nav[aria-label="Main navigation"] a'
);

const main = document.getElementById("main");

// Allow focus to move to the newly displayed content.
main.setAttribute("tabindex", "-1");

function showPage(pageId, moveFocus = false) {
  // Display selected section.
  pages.forEach((page) => {
    page.hidden = page.id !== pageId;
  });

  // Highlight the selected navigation link.
  navigationLinks.forEach((link) => {
    const isSelected = link.getAttribute("href") === `#${pageId}`;

    if (isSelected) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const pageNames = {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  };

  document.title = `Athena Bui | ${pageNames[pageId]}`;

  if (moveFocus) {
    main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

function pageFromAddress() {
  const pageId = window.location.hash.slice(1);

  return pageIds.includes(pageId) ? pageId : "home";
}

// Handle navigation links and homepage buttons.
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');

  if (
    !link ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const pageId = link.getAttribute("href").slice(1);

  // Leave other links, including Skip to main content, unchanged.
  if (!pageIds.includes(pageId)) {
    return;
  }

  event.preventDefault();

  if (window.location.hash !== `#${pageId}`) {
    window.history.pushState(null, "", `#${pageId}`);
  }

  showPage(pageId, true);
});

// Handle browser Back and Forward navigation.
window.addEventListener("popstate", () => {
  showPage(pageFromAddress(), true);
});

// Handle changes to the address fragment.
window.addEventListener("hashchange", () => {
  showPage(pageFromAddress(), true);
});

// Open Home unless the address specifies another section.
showPage(pageFromAddress());