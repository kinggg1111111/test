const translations = {
  ku: {
    title: "سڵاو، من محمدم 👋",
    aboutTitle: "دەربارەی من",
    about: "من محمدم، خوێندکار و بەرهەم‌هێنەر لە بوارەکانی وێب‌گەشەپێدان. حەزم لە فێربوون، نووسین و دروستکردنی پرۆژەی نوێیە.",
    projectsTitle: "پڕۆژەکان",
    projects: [
      "دروستکردنی وێبسایتی بازرگانی بە HTML, CSS, JS",
      "سیستەمی CRUD بە PHP و MySQL",
      "لاندینگ پیجی خەلاق بۆ بەزنس"
    ],
    contactTitle: "پەیوەندی",
    contact: "دەتوانیت پەیوەندیم پێوە بکەیت لە ڕێگەی: 📧 example@email.com",
    footer: "مافی پارێزراوە © 2025 محمد"
  },
  en: {
    title: "Hello, I am Muhammad 👋",
    aboutTitle: "About Me",
    about: "I am Muhammad, a student and developer in the field of web development. I enjoy learning, writing, and building new projects.",
    projectsTitle: "Projects",
    projects: [
      "Created an e-commerce website with HTML, CSS, JS",
      "Built a CRUD system using PHP and MySQL",
      "Designed a creative landing page for businesses"
    ],
    contactTitle: "Contact",
    contact: "You can reach me at: 📧 example@email.com",
    footer: "All rights reserved © 2025 Muhammad"
  }
};

function changeLang(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("about-title").innerText = translations[lang].aboutTitle;
  document.getElementById("about").innerText = translations[lang].about;
  document.getElementById("projects-title").innerText = translations[lang].projectsTitle;

  const projectList = document.getElementById("projects");
  projectList.innerHTML = "";
  translations[lang].projects.forEach(proj => {
    const li = document.createElement("li");
    li.innerText = proj;
    projectList.appendChild(li);
  });

  document.getElementById("contact-title").innerText = translations[lang].contactTitle;
  document.getElementById("contact").innerText = translations[lang].contact;
  document.getElementById("footer").innerText = translations[lang].footer;
}
