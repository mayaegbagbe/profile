// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
if (toggle && navList) {
  toggle.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  navList.addEventListener("click", () => navList.classList.remove("open"));
}

// Contact form: opens your email app with the message filled in
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent("Hello from " + data.get("name"));
    const body = encodeURIComponent(data.get("message") + "\n\n" + data.get("name") + " (" + data.get("email") + ")");
    window.location.href = "mailto:" + form.dataset.email + "?subject=" + subject + "&body=" + body;
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
