(function () {
  "use strict";
  // Set to true to show live Google Drive preview players inside the device/phone screens.
  // (Videos must be shared as "Anyone with the link". Clicks still open the full /view page.)
  var EMBED_PREVIEWS = false;

  var links = [].slice.call(document.querySelectorAll("[data-nav]"));
  var sections = links.map(function (a) { return document.getElementById(a.dataset.nav); });
  var ribbon = document.getElementById("ribbon");

  // Fade-in when slides enter the viewport
  var slides = [].slice.call(document.querySelectorAll(".slide"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });
    slides.forEach(function (s) { io.observe(s); });
  } else { slides.forEach(function (s) { s.classList.add("in"); }); }

  // Active section highlighting
  var ticking = false;
  function update() {
    var y = window.scrollY + window.innerHeight * 0.35, cur = 0;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) cur = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = sections.length - 1;
    links.forEach(function (a, i) {
      var on = i === cur; a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    var act = links[cur]; if (act && ribbon.scrollWidth > ribbon.clientWidth) act.scrollIntoView({ block: "nearest", inline: "center" });
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  window.addEventListener("load", update);
  update();

  // Anchor clicks (nav + table of contents): smooth scroll, update hash, no jump
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var t = document.getElementById(a.getAttribute("href").slice(1));
    if (!t) return;
    e.preventDefault();
    if (t.id === "home") window.scrollTo({ top: 0, behavior: "smooth" }); else t.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#" + t.id);
  });

  // Optional live Drive previews (off by default)
  if (EMBED_PREVIEWS) {
    [].slice.call(document.querySelectorAll(".vid[data-preview]:not(.label)")).forEach(function (a) {
      var f = document.createElement("iframe");
      f.className = "vid-frame"; f.src = a.dataset.preview; f.loading = "lazy"; f.allow = "autoplay"; f.title = a.getAttribute("aria-label");
      f.style.cssText = "left:" + a.style.left + ";top:" + a.style.top + ";width:" + a.style.width + ";height:" + a.style.height;
      a.parentNode.insertBefore(f, a);
    });
  }
})();
