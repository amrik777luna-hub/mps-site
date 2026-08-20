/* ==========================================================================
   MPS — main.js
   Nav, i18n toggle, mobile menu, reveal, FAQ accordion, hub diagram, forms
   ========================================================================== */

/* ---------- CONFIG ---------- */
window.MPS_CONFIG = {
  whatsappNumber: "77064261056",
  whatsappTextRu: "Здравствуйте! Хочу получить диагностику бизнеса от MPS.",
  whatsappTextEn: "Hello! I would like to get a business diagnostics from MPS.",
  // Optional webhook endpoint for lead capture (Google Apps Script / Sheet webhook).
  // Leave empty to send leads to WhatsApp only.
  leadWebhookUrl: ""
};

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- LANGUAGE TOGGLE ---------- */
  var LANG_KEY = "mps_lang";
  var html = document.documentElement;
  var savedLang = null;
  try { savedLang = localStorage.getItem(LANG_KEY); } catch (e) {}
  var initialLang = savedLang || html.getAttribute("data-lang") || "ru";
  setLang(initialLang, false);

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang-btn"), true);
    });
  });

  function setLang(lang, persist) {
    html.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
    if (persist) {
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    }
    updateWhatsAppLinks(lang);
    document.querySelectorAll(".hub-node-g").forEach(function (node) {
      var label = node.getAttribute("data-title-" + lang);
      if (label) node.setAttribute("aria-label", label);
    });
  }

  function updateWhatsAppLinks(lang) {
    var text = lang === "en" ? window.MPS_CONFIG.whatsappTextEn : window.MPS_CONFIG.whatsappTextRu;
    document.querySelectorAll("[data-wa-link]").forEach(function (a) {
      a.href = "https://wa.me/" + window.MPS_CONFIG.whatsappNumber + "?text=" + encodeURIComponent(text);
    });
  }
  updateWhatsAppLinks(initialLang);

  /* ---------- DESKTOP DROPDOWN NAV ---------- */
  document.querySelectorAll(".nav-item").forEach(function (item) {
    var link = item.querySelector(".nav-link");
    if (!link || !item.querySelector(".mega")) return;
    function open() { item.classList.add("open"); link.setAttribute("aria-expanded", "true"); }
    function close() { item.classList.remove("open"); link.setAttribute("aria-expanded", "false"); }
    item.addEventListener("mouseenter", open);
    item.addEventListener("mouseleave", close);
    link.addEventListener("focus", open);
    // Click always navigates to the section's own index page (real <a href>).
    // Hover already reveals the dropdown for mouse users, so click must not
    // fight it by toggling the menu closed instead of following the link.
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.querySelectorAll(".nav-item.open").forEach(function (i) { i.classList.remove("open"); });
  });

  /* ---------- MOBILE MENU ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      mobileNav.classList.toggle("open");
      var expanded = mobileNav.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", expanded);
      document.body.style.overflow = expanded ? "hidden" : "";
    });
    document.querySelectorAll(".m-top").forEach(function (top) {
      top.addEventListener("click", function () {
        var sub = top.nextElementSibling;
        if (sub && sub.classList.contains("m-sub")) {
          sub.classList.toggle("open");
        } else {
          mobileNav.classList.remove("open");
          document.body.style.overflow = "";
        }
      });
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  var revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
    // Safety net: if anything is still hidden after a short delay (slow JS,
    // unusual layout, very short viewport, etc.), just show it. Content must
    // never stay permanently invisible.
    setTimeout(function () {
      revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
    }, 1200);
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- FAQ ACCORDION ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var wasOpen = item.classList.contains("open");
      item.closest(".faq-list").querySelectorAll(".faq-item.open").forEach(function (i) {
        i.classList.remove("open");
        i.querySelector(".faq-a").style.maxHeight = "0px";
      });
      if (!wasOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------- HUB DIAGRAM TOOLTIPS ---------- */
  var hub = document.querySelector(".hub");
  if (hub) {
    var tip = hub.querySelector(".hub-tip");
    function goToNode(node) {
      var href = node.getAttribute("data-href");
      if (href) window.location.href = href;
    }
    hub.querySelectorAll(".hub-node-g").forEach(function (node) {
      node.addEventListener("mouseenter", showTip);
      node.addEventListener("focus", showTip);
      node.addEventListener("mouseleave", hideTip);
      node.addEventListener("blur", hideTip);
      node.addEventListener("click", function () { goToNode(node); });
      node.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          goToNode(node);
        }
      });
    });
    function showTip(e) {
      if (!tip) return;
      var node = e.currentTarget;
      var lang = html.getAttribute("data-lang") === "en" ? "en" : "ru";
      var title = node.getAttribute("data-title-" + lang) || "";
      var desc = node.getAttribute("data-desc-" + lang) || "";
      tip.innerHTML = "";
      var b = document.createElement("b");
      b.textContent = title;
      tip.appendChild(b);
      tip.appendChild(document.createTextNode(desc));
      var rect = node.getBoundingClientRect();
      var hubRect = hub.getBoundingClientRect();
      tip.style.left = (rect.left - hubRect.left + rect.width / 2) + "px";
      tip.style.top = (rect.top - hubRect.top + rect.height + 6) + "px";
      tip.classList.add("show");
      node.classList.add("active");
    }
    function hideTip(e) {
      if (!tip) return;
      tip.classList.remove("show");
      e.currentTarget.classList.remove("active");
    }
  }

  /* ---------- HERO SYSTEM DIAGRAM (v2, tooltips only — reveal/signal-flow are pure CSS) ---------- */
  var heroDiagram = document.getElementById("heroSystemDiagram");
  if (heroDiagram) {
    var h2Tip = document.getElementById("h2Tip");
    heroDiagram.querySelectorAll(".h2-node").forEach(function (node) {
      node.addEventListener("mouseenter", showH2Tip);
      node.addEventListener("focus", showH2Tip);
      node.addEventListener("mouseleave", hideH2Tip);
      node.addEventListener("blur", hideH2Tip);
    });
    function showH2Tip(e) {
      if (!h2Tip) return;
      var node = e.currentTarget;
      var lang = html.getAttribute("data-lang") === "en" ? "en" : "ru";
      var title = node.getAttribute("data-title-" + lang) || "";
      var desc = node.getAttribute("data-desc-" + lang) || "";
      h2Tip.innerHTML = "";
      var b = document.createElement("b");
      b.textContent = title;
      h2Tip.appendChild(b);
      h2Tip.appendChild(document.createTextNode(desc));
      var rect = node.getBoundingClientRect();
      var wrapRect = heroDiagram.getBoundingClientRect();
      h2Tip.style.left = (rect.left - wrapRect.left + rect.width / 2) + "px";
      h2Tip.style.top = (rect.top - wrapRect.top + rect.height + 6) + "px";
      h2Tip.classList.add("show");
      node.classList.add("active");
    }
    function hideH2Tip(e) {
      if (!h2Tip) return;
      h2Tip.classList.remove("show");
      e.currentTarget.classList.remove("active");
    }
  }

  /* ---------- MOBILE STICKY CTA ---------- */
  var mobileCta = document.getElementById("mobileCta");
  var waFloat = document.querySelector(".wa-float");
  var heroEl = document.querySelector(".hero, .diag-hero, .page-hero");
  if (mobileCta && heroEl) {
    window.addEventListener("scroll", function () {
      var show = window.scrollY > heroEl.offsetHeight;
      mobileCta.classList.toggle("show", show);
      if (waFloat) waFloat.classList.toggle("raised", show);
    }, { passive: true });
  }

  /* ---------- FORMS (diagnostics + contacts) ---------- */
  document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var requiredOk = true;
      form.querySelectorAll("[required]").forEach(function (field) {
        var errorEl = field.parentElement.querySelector(".field-error");
        if (!field.value || !field.value.trim()) {
          requiredOk = false;
          if (errorEl) errorEl.classList.add("show");
        } else if (errorEl) {
          errorEl.classList.remove("show");
        }
      });
      if (!requiredOk) return;

      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });

      var lang = html.getAttribute("data-lang");
      var lines = lang === "en"
        ? ["New MPS diagnostics request:", "Name: " + (data.name || "-"), "Country: " + (data.country || "-"), "Niche: " + (data.niche || "-"), "Turnover: " + (data.turnover || "-"), "Main task: " + (data.task || "-")]
        : ["Новая заявка на диагностику MPS:", "Имя: " + (data.name || "-"), "Страна: " + (data.country || "-"), "Ниша: " + (data.niche || "-"), "Оборот: " + (data.turnover || "-"), "Задача: " + (data.task || "-")];
      var message = lines.join("\n");
      var waUrl = "https://wa.me/" + window.MPS_CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message);

      var webhook = window.MPS_CONFIG.leadWebhookUrl;
      if (webhook) {
        fetch(webhook, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }).catch(function () {});
      }

      // Open WhatsApp with the pre-filled request so it lands with the manager,
      // and show a confirmation only once this actually happens.
      window.open(waUrl, "_blank");

      var successEl = form.parentElement.querySelector(".form-success");
      form.style.display = "none";
      if (successEl) successEl.classList.add("show");
    });
  });

  /* ---------- COUNTER ANIMATION (case metrics) ---------- */
  function animateCount(el) {
    var original = el.textContent.trim();
    var match = original.match(/^([+\-]?\d+)(.*)$/);
    if (!match) return;
    var target = parseInt(match[1], 10);
    var suffix = match[2];
    var duration = 1000;
    var start = performance.now();
    function step(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = original;
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); co.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { co.observe(el); });
  }
});
