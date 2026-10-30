const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.log('No out directory found to process.');
  process.exit(0);
}

function getStandaloneScript(prefix) {
  return `
<script id="standalone-html-controller">
(function () {
  if (typeof window === "undefined") return;

  // 1. LIVE COUNTDOWN TICKER
  function initCountdown() {
    var target = new Date("2027-02-06T09:00:00+05:30").getTime();
    function updateCountdown() {
      var ms = Math.max(0, target - Date.now());
      var d = Math.floor(ms / 86400000);
      var h = Math.floor((ms / 3600000) % 24);
      var m = Math.floor((ms / 60000) % 60);
      var s = Math.floor((ms / 1000) % 60);

      function updateUnit(unit, val, minDigits) {
        var str = String(val).padStart(minDigits || 2, "0");
        var row = document.querySelector('.odometer-group[data-unit="' + unit + '"] .odometer-slots-row');
        if (!row) return;
        var digits = str.split("");
        var slots = row.querySelectorAll(".odometer-slot");
        if (slots.length !== digits.length) {
          row.innerHTML = digits.map(function(dig) {
            return '<div class="odometer-slot" aria-hidden="true"><span class="odometer-digit">' + dig + '</span></div>';
          }).join("");
        } else {
          digits.forEach(function(dig, idx) {
            var sp = slots[idx].querySelector(".odometer-digit");
            if (sp && sp.textContent !== dig) {
              sp.textContent = dig;
              sp.classList.add("is-ticking");
              setTimeout(function() { sp.classList.remove("is-ticking"); }, 220);
            }
          });
        }
      }

      updateUnit("days", d, Math.max(2, String(d).length));
      updateUnit("hours", h, 2);
      updateUnit("minutes", m, 2);
      updateUnit("seconds", s, 2);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // 2. HAMBURGER MOBILE MENU CONTROLLER
  function initMobileMenu() {
    var menuToggle = document.getElementById("menu-toggle") || document.querySelector(".menu-toggle");
    var exhibzNav = document.querySelector(".exhibz-nav");
    if (!menuToggle || !exhibzNav || menuToggle.dataset.standaloneInit) return;
    menuToggle.dataset.standaloneInit = "true";

    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = exhibzNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    exhibzNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        exhibzNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && exhibzNav.classList.contains("is-open")) {
        exhibzNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("click", function (e) {
      if (exhibzNav.classList.contains("is-open") && !exhibzNav.contains(e.target) && !menuToggle.contains(e.target)) {
        exhibzNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
        document.body.style.overflow = "";
      }
    });
  }

  // 3. TIMELINE SLIDER CONTROLLER (PREV/NEXT ARROWS, YEAR PILLS, AUTOPLAY)
  function initTimelineSlider() {
    var timelineWrap = document.querySelector(".interactive-timeline-wrapper");
    if (!timelineWrap || timelineWrap.dataset.standaloneInit) return;
    timelineWrap.dataset.standaloneInit = "true";

    var timelineMilestones = [
      {
        year: "Around 2000",
        stageNum: "01",
        guideBadge: "FOUNDING STORY",
        tabLabel: "Shared Vision",
        milestoneBadge: "Founding Vision Marker",
        badge: "ORIGIN ERA",
        tagline: "UNITING THE DENTAL COMMUNITY",
        title: "A Shared Vision for Tamil Nadu",
        text: "Around 2000, dental trade leaders envisioned a united community to strengthen Tamil Nadu's dental industry, bridge technology gaps, and help practitioners access quality equipment.",
        impactLabel: "FOUNDING IMPACT",
        stat: "A United Trade Community",
        statDesc: "Dental Leaders United",
        focusLabel: "FOUNDING IDEAS & PRIORITIES",
        highlights: ["Trade Unity", "Shared Progress", "Practitioner Support"]
      },
      {
        year: "2005",
        stageNum: "02",
        guideBadge: "DENTAL SHOW HISTORY",
        tabLabel: "The First Dental Show",
        milestoneBadge: "A Historic Milestone",
        badge: "HISTORIC BEGINNING",
        tagline: "TNDTMA AND THE FIRST DENTAL SHOW",
        title: "A Vision Becomes Reality",
        text: "TNDTMA was registered in 2005, marking a significant step towards a united dental trade community. That same year, the first Dental Show brought the shared vision to life, creating a platform for connection, discovery and progress.",
        impactLabel: "MILESTONE IMPACT",
        stat: "TNDTMA Registered",
        statDesc: "First Dental Show Held",
        focusLabel: "KEY FOCUS & ACHIEVEMENTS",
        highlights: ["First Dental Show", "Dental Trade Unity"]
      },
      {
        year: "2015",
        stageNum: "03",
        guideBadge: "DENTAL SHOW HISTORY",
        tabLabel: "A Decade of Progress",
        milestoneBadge: "A Decade of Growth",
        badge: "A DECADE OF PROGRESS",
        tagline: "BUILDING ON A SHARED VISION",
        title: "A Growing Platform for Dentistry",
        text: "Dental Show continued its journey of bringing the dental trade community together. Building on the vision established in its early years, the event created opportunities for industry connections, product discovery and the exchange of ideas across the dental ecosystem.",
        impactLabel: "MILESTONE IMPACT",
        stat: "A Growing Community",
        statDesc: "Connecting Dental Professionals",
        focusLabel: "KEY FOCUS & ACHIEVEMENTS",
        highlights: ["Community Connections", "Product Discovery"]
      },
      {
        year: "2025",
        stageNum: "04",
        guideBadge: "DENTAL SHOW HISTORY",
        tabLabel: "Two Decades of Progress",
        milestoneBadge: "A Legacy to Celebrate",
        badge: "TWO DECADES OF IMPACT",
        tagline: "CELEBRATING TWO DECADES OF DENTAL SHOW",
        title: "Two Decades of Connecting Dentistry",
        text: "Celebrating two decades of journey, Dental Show continues to bring the dental community together through innovation, professional connections and shared learning. Its legacy reflects a continuing commitment to supporting dental professionals and inspiring the next generation of dentistry.",
        impactLabel: "MILESTONE IMPACT",
        stat: "Two Decades of Progress",
        statDesc: "A Growing Dental Community",
        focusLabel: "KEY FOCUS & ACHIEVEMENTS",
        highlights: ["Legacy & Growth", "Future Dentists", "Dental Innovation"]
      },
      {
        year: "2027",
        stageNum: "05",
        guideBadge: "DENTAL SHOW 2027",
        tabLabel: "The Next Chapter",
        milestoneBadge: "Discover What's Next",
        badge: "THE FUTURE CHAPTER",
        tagline: "CHENNAI TRADE CENTRE · 6–7 FEBRUARY",
        title: "Dental Show 2027: Discover What's Next",
        text: "Bringing the dental community together on 6–7 February 2027 at Chennai Trade Centre, Dental Show invites dentists, students and industry professionals to discover innovations, exchange ideas and explore new possibilities for the future of dentistry.",
        impactLabel: "THE DENTAL SHOW EXPERIENCE",
        stat: "A Community of Possibilities",
        statDesc: "Discover. Connect. Grow.",
        focusLabel: "WHAT AWAITS YOU",
        highlights: ["Dental Innovations", "Professional Connections", "Learning & Discovery"]
      }
    ];

    var currentIdx = 0;
    var isPlaying = true;
    var progress = 0;
    var total = timelineMilestones.length;
    var isHovered = false;

    var showcaseCard = timelineWrap.querySelector(".timeline-master-showcase-card");
    var threadActive = timelineWrap.querySelector(".timeline-thread-line-active");
    var pills = timelineWrap.querySelectorAll(".timeline-year-pill-btn");
    var progressFill = timelineWrap.querySelector(".timeline-progress-fill");
    var statusText = timelineWrap.querySelector(".timeline-autoplay-status");
    var playBtn = timelineWrap.querySelector(".timeline-play-btn");

    function updateMilestone(idx) {
      currentIdx = idx;
      var m = timelineMilestones[idx];
      if (!m) return;

      if (showcaseCard) {
        showcaseCard.className = "timeline-master-showcase-card stage-theme-" + idx;
      }

      pills.forEach(function (pill, pIdx) {
        if (pIdx === idx) {
          pill.classList.add("is-active");
          pill.classList.remove("is-passed");
          pill.setAttribute("aria-selected", "true");
        } else if (pIdx < idx) {
          pill.classList.remove("is-active");
          pill.classList.add("is-passed");
          pill.setAttribute("aria-selected", "false");
        } else {
          pill.classList.remove("is-active");
          pill.classList.remove("is-passed");
          pill.setAttribute("aria-selected", "false");
        }
      });

      if (threadActive) {
        threadActive.style.width = ((idx / (total - 1)) * 100) + "%";
      }

      var hostBadge = timelineWrap.querySelector(".stage-host-badge span:last-child");
      if (hostBadge) hostBadge.textContent = m.guideBadge;

      var hostYear = timelineWrap.querySelector(".stage-host-year-callout");
      if (hostYear) hostYear.textContent = m.year;

      var hostLabel = timelineWrap.querySelector(".stage-host-label");
      if (hostLabel) hostLabel.textContent = m.tabLabel;

      var hostFooter = timelineWrap.querySelector(".stage-host-footer-pill span:last-child");
      if (hostFooter) hostFooter.textContent = m.milestoneBadge;

      var stageKicker = timelineWrap.querySelector(".timeline-stage-kicker-pill span:last-child");
      if (stageKicker) stageKicker.textContent = m.badge;

      var stageCounter = timelineWrap.querySelector(".timeline-stage-counter");
      if (stageCounter) stageCounter.textContent = "STAGE " + m.stageNum + " OF 0" + total;

      var stageYear = timelineWrap.querySelector(".stage-unified-year");
      if (stageYear) stageYear.textContent = m.year;

      var stageTagline = timelineWrap.querySelector(".stage-unified-tagline");
      if (stageTagline) stageTagline.textContent = m.tagline;

      var stageTitle = timelineWrap.querySelector(".stage-unified-title");
      if (stageTitle) stageTitle.textContent = m.title;

      var stageDesc = timelineWrap.querySelector(".stage-unified-desc");
      if (stageDesc) stageDesc.textContent = m.text;

      var impactLabel = timelineWrap.querySelector(".stage-unified-impact-card .stage-unified-card-label");
      if (impactLabel) impactLabel.textContent = m.impactLabel;

      var impactItems = timelineWrap.querySelectorAll(".stage-unified-impact-item");
      if (impactItems[0]) {
        var s0 = impactItems[0].querySelector("span:last-child");
        if (s0) s0.textContent = m.stat;
      }
      if (impactItems[1]) {
        var s1 = impactItems[1].querySelector("span:last-child");
        if (s1) s1.textContent = m.statDesc;
      }

      var focusLabel = timelineWrap.querySelector(".stage-unified-focus-card .stage-unified-card-label");
      if (focusLabel) focusLabel.textContent = m.focusLabel;

      var tagsWrap = timelineWrap.querySelector(".stage-unified-focus-tags");
      if (tagsWrap && m.highlights) {
        tagsWrap.innerHTML = m.highlights
          .map(function (h) {
            return '<span class="stage-unified-tag"><span class="tag-diamond">✦</span> ' + h + "</span>";
          })
          .join("");
      }

      progress = 0;
      if (progressFill) progressFill.style.width = "0%";
    }

    var prevBtn = timelineWrap.querySelector('.timeline-ctrl-btn[aria-label*="Previous"]') ||
                  timelineWrap.querySelector('.timeline-ctrl-btn[title*="Previous"]');
    var nextBtn = timelineWrap.querySelector('.timeline-ctrl-btn[aria-label*="Next"]') ||
                  timelineWrap.querySelector('.timeline-ctrl-btn[title*="Next"]');

    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        updateMilestone((currentIdx - 1 + total) % total);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        updateMilestone((currentIdx + 1) % total);
      });
    }

    pills.forEach(function (pill, pIdx) {
      pill.addEventListener("click", function (e) {
        e.preventDefault();
        updateMilestone(pIdx);
      });
    });

    if (playBtn) {
      playBtn.addEventListener("click", function (e) {
        e.preventDefault();
        isPlaying = !isPlaying;
        if (statusText) statusText.textContent = isPlaying ? "AUTO-CYCLING" : "PAUSED";
        playBtn.setAttribute("aria-label", isPlaying ? "Pause autoplay" : "Play autoplay");
        playBtn.setAttribute("title", isPlaying ? "Pause autoplay" : "Resume autoplay");
        playBtn.innerHTML = isPlaying
          ? '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>'
          : '<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" /></svg>';
      });
    }

    timelineWrap.addEventListener("mouseenter", function () { isHovered = true; });
    timelineWrap.addEventListener("mouseleave", function () { isHovered = false; });

    setInterval(function () {
      if (!isPlaying || isHovered) return;
      progress += (50 / 4500) * 100;
      if (progress >= 100) {
        progress = 0;
        updateMilestone((currentIdx + 1) % total);
      }
      if (progressFill) {
        progressFill.style.width = progress + "%";
      }
    }, 50);
  }

  // 4. AUDIENCE BENEFITS SLIDER (ARROWS & ACCORDION)
  function initBenefitsSlider() {
    var bContainer = document.querySelector(".benefits-showcase-container");
    if (!bContainer || bContainer.dataset.standaloneInit) return;
    bContainer.dataset.standaloneInit = "true";

    var bTrack = bContainer.querySelector(".benefits-cards-track");
    var bPrev = bContainer.querySelector(".slider-nav-btn--prev");
    var bNext = bContainer.querySelector(".slider-nav-btn--next");
    var bViewAll = bContainer.querySelector(".btn-view-all-top");

    if (bTrack && bPrev) {
      bPrev.addEventListener("click", function (e) {
        e.preventDefault();
        var firstCard = bTrack.querySelector(".benefit-staple-card");
        var step = firstCard ? firstCard.offsetWidth + 24 : 360;
        bTrack.scrollBy({ left: -step, behavior: "smooth" });
      });
    }

    if (bTrack && bNext) {
      bNext.addEventListener("click", function (e) {
        e.preventDefault();
        var firstCard = bTrack.querySelector(".benefit-staple-card");
        var step = firstCard ? firstCard.offsetWidth + 24 : 360;
        bTrack.scrollBy({ left: step, behavior: "smooth" });
      });
    }

    if (bTrack && bViewAll) {
      bViewAll.addEventListener("click", function (e) {
        e.preventDefault();
        var isGrid = bTrack.classList.toggle("is-grid-mode");
        bTrack.classList.toggle("container", isGrid);
        bTrack.classList.toggle("is-slider-mode", !isGrid);
        bViewAll.classList.toggle("is-active", isGrid);
        var span = bViewAll.querySelector("span");
        if (span) span.textContent = isGrid ? "SLIDER VIEW" : "FULL VIEW";
      });
    }

    bContainer.querySelectorAll(".staple-accordion-header-btn").forEach(function (headerBtn) {
      headerBtn.addEventListener("click", function (e) {
        e.preventDefault();

        var targetKey = "discover";
        if (headerBtn.classList.contains("staple-accordion-header-btn--connect")) {
          targetKey = "connect";
        } else if (headerBtn.classList.contains("staple-accordion-header-btn--grow")) {
          targetKey = "grow";
        }

        var wasActive = headerBtn.classList.contains("is-open");

        // Close ALL accordion items across ALL cards in bContainer
        bContainer.querySelectorAll(".staple-accordion-item").forEach(function (it) {
          it.classList.remove("is-active");
          var btn = it.querySelector(".staple-accordion-header-btn");
          if (btn) {
            btn.classList.remove("is-open");
            btn.setAttribute("aria-expanded", "false");
          }
          var collapse = it.querySelector(".staple-accordion-collapse");
          if (collapse) collapse.classList.remove("is-expanded");
          var chev = it.querySelector(".accordion-chevron-toggle");
          if (chev) chev.classList.remove("is-expanded");
        });

        // If not already active, open the target tab across ALL cards in bContainer!
        if (!wasActive) {
          bContainer.querySelectorAll(".staple-accordion-item--" + targetKey).forEach(function (it) {
            it.classList.add("is-active");
            var btn = it.querySelector(".staple-accordion-header-btn");
            if (btn) {
              btn.classList.add("is-open");
              btn.setAttribute("aria-expanded", "true");
            }
            var collapse = it.querySelector(".staple-accordion-collapse");
            if (collapse) collapse.classList.add("is-expanded");
            var chev = it.querySelector(".accordion-chevron-toggle");
            if (chev) chev.classList.add("is-expanded");
          });
        }
      });
    });
  }

  // 5. STAKEHOLDER STAGES ACCORDION
  function initStagesAccordion() {
    var stagesSection = document.querySelector(".stages-accordion-list");
    if (!stagesSection || stagesSection.dataset.standaloneInit) return;
    stagesSection.dataset.standaloneInit = "true";

    var stagesData = [
      {
        num: "01",
        pillarSubtitle: "Clinicians & Practices",
        title: "Private Practitioners & Clinic Owners",
        story: "Empowering solo and group dental practices across Tamil Nadu with direct-from-manufacturer access to high-precision equipment, intraoral digital scanners, hands-on clinical training, and special expo purchase subsidies.",
        tags: ["Pillar 01 of 05", "Chairside CAD/CAM", "Operatory Upgrades", "Direct Manufacturer Warranties", "Special Expo Offers"],
        previewImage: "${prefix}images/dental-show-images/vlcsnap-2026-10-29-00h42m36s862.png",
        previewCaption: "Over 4,500 active dental clinicians attend annually to upgrade their operatory capabilities."
      },
      {
        num: "02",
        pillarSubtitle: "Dental Laboratories",
        title: "Dental Laboratories & Technicians",
        story: "Bridging commercial technicians with state-of-the-art milling systems, sintered ceramics, and CAD design software, ensuring dental labs deliver world-class aesthetic and functional restorations.",
        tags: ["Pillar 02 of 05", "5-Axis Zirconia Milling", "3D Resin Printing", "Biocompatible Ceramics", "Analog-to-Digital Shift"],
        previewImage: "${prefix}images/dental-show-images/vlcsnap-2026-10-29-00h42m18s269.png",
        previewCaption: "Showcasing next-generation 5-axis dry and wet milling machines alongside biocompatible resins."
      },
      {
        num: "03",
        pillarSubtitle: "Postgraduates & Students",
        title: "Postgraduates & Aspiring Dentists",
        story: "Providing student-friendly registration packages, live clinical masterclasses with renowned faculties, and realistic consultation guidance for setting up new clinical operatory practices.",
        tags: ["Pillar 03 of 05", "BDS & MDS Workshops", "Hands-on Simulators", "Senior Mentorship", "Startup Clinic Advisory"],
        previewImage: "${prefix}images/dental-show-images/vlcsnap-2026-10-29-00h42m43s621.png",
        previewCaption: "Connecting dental students with senior clinicians, practical training tools, and clinic startup workshops."
      },
      {
        num: "04",
        pillarSubtitle: "Dealers & Distributors",
        title: "Dental Dealers, Traders & Distributors",
        story: "Uniting regional distributors with national and international manufacturers to negotiate volume stockists agreements, territory dealerships, and year-round supply partnerships.",
        tags: ["Pillar 04 of 05", "B2B Dealership Networking", "Consumables Wholesaling", "Regional Supply Chains", "Equipment Dealerships"],
        previewImage: "${prefix}images/dental-show-images/vlcsnap-2026-10-29-00h42m15s085.png",
        previewCaption: "Over 250 verified equipment brands connecting with trade dealers from across South India."
      },
      {
        num: "05",
        pillarSubtitle: "Manufacturers & Brands",
        title: "Global Manufacturers & Innovators",
        story: "The premier launchpad for Indian and multinational dental manufacturers to debut FDA/CE-cleared innovations, expand regional footprints, and demonstrate cutting-edge products.",
        tags: ["Pillar 05 of 05", "Flagship Product Debuts", "Brand Demonstration", "B2B Buyer Leads", "Pan-India Dealer Expansion"],
        previewImage: "${prefix}images/dental-show-images/vlcsnap-2026-10-29-00h42m12s093.png",
        previewCaption: "Providing expansive brand display stalls and dedicated client demonstration suites."
      }
    ];

    function renderStages(activeIdx) {
      var html = stagesData.map(function (s, idx) {
        if (idx === activeIdx) {
          return (
            '<div class="stage-card-active" role="region" aria-label="' + s.title + ' (' + s.pillarSubtitle + ')">' +
              '<div class="stage-active-topbar">' +
                '<div class="stage-active-title-group">' +
                  '<span class="stage-active-num">' + s.num + '.</span>' +
                  '<h3 class="stage-active-heading" style="color: #ffffff">' +
                    s.title + ' <span class="stage-active-year">(' + s.pillarSubtitle + ')</span>' +
                  '</h3>' +
                '</div>' +
                '<button type="button" class="stage-active-arrow-btn" data-stage-next="' + ((idx + 1) % stagesData.length) + '" aria-label="Next stakeholder pillar" title="Next stakeholder pillar">' +
                  '<span>↗</span>' +
                '</button>' +
              '</div>' +
              '<div class="stage-active-tags-row">' +
                s.tags.map(function (t) {
                  return '<span class="stage-active-tag-pill" style="color: #ffffff">' + t + '</span>';
                }).join('') +
              '</div>' +
              '<p class="stage-active-story" style="color: rgba(255, 255, 255, 0.95)">' + s.story + '</p>' +
              '<div class="stage-active-preview-card">' +
                '<div class="stage-preview-img-wrap">' +
                  '<img src="' + s.previewImage + '" alt="' + s.title + '" class="stage-preview-img" style="position: absolute; height: 100%; width: 100%; left: 0; top: 0; right: 0; bottom: 0; object-fit: cover;" />' +
                  '<div class="stage-preview-pill-badge"><span>' + s.pillarSubtitle + '</span></div>' +
                '</div>' +
                '<div class="stage-preview-caption-row">' +
                  '<span class="preview-sparkle">✦</span>' +
                  '<span class="preview-caption-text">' + s.previewCaption + '</span>' +
                '</div>' +
              '</div>' +
            '</div>'
          );
        } else {
          return (
            '<button type="button" class="stage-row-inactive" data-stage-idx="' + idx + '" role="tab" aria-selected="false" title="View ' + s.title + ': ' + s.pillarSubtitle + '">' +
              '<div class="stage-inactive-left">' +
                '<span class="stage-inactive-num">' + s.num + '.</span>' +
                '<span class="stage-inactive-title">' +
                  s.title + ' &mdash; <strong>' + s.pillarSubtitle + '</strong>' +
                '</span>' +
              '</div>' +
              '<div class="stage-inactive-arrow-btn" aria-hidden="true">' +
                '<span>↗</span>' +
              '</div>' +
            '</button>'
          );
        }
      }).join('');

      stagesSection.innerHTML = html;

      stagesSection.querySelectorAll(".stage-row-inactive").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          var targetIdx = parseInt(btn.getAttribute("data-stage-idx"), 10);
          renderStages(targetIdx);
        });
      });

      var nextArrow = stagesSection.querySelector(".stage-active-arrow-btn");
      if (nextArrow) {
        nextArrow.addEventListener("click", function (e) {
          e.preventDefault();
          var nextIdx = parseInt(nextArrow.getAttribute("data-stage-next"), 10);
          renderStages(nextIdx);
        });
      }
    }

    stagesSection.querySelectorAll(".stage-row-inactive").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var txt = btn.querySelector(".stage-inactive-num");
        var numStr = txt ? txt.textContent.replace(".", "").trim() : "1";
        var targetIdx = Math.max(0, parseInt(numStr, 10) - 1);
        renderStages(targetIdx);
      });
    });

    var existingNextArrow = stagesSection.querySelector(".stage-active-arrow-btn");
    if (existingNextArrow) {
      existingNextArrow.addEventListener("click", function (e) {
        e.preventDefault();
        renderStages(2);
      });
    }
  }

  // 6. GALLERY DUAL-ROW LIGHTBOX
  function initGalleryLightbox() {
    var marqueeCards = document.querySelectorAll(".gallery-marquee-card");
    if (marqueeCards.length === 0 || document.getElementById("standalone-lightbox")) return;

    var lightboxEl = document.createElement("div");
    lightboxEl.id = "standalone-lightbox";
    lightboxEl.className = "gallery-preview-lightbox-backdrop";
    lightboxEl.style.display = "none";
    lightboxEl.setAttribute("role", "dialog");
    lightboxEl.setAttribute("aria-modal", "true");

    lightboxEl.innerHTML =
      '<div class="gallery-preview-lightbox-dialog" onclick="event.stopPropagation()">' +
        '<div class="lightbox-dialog-header">' +
          '<div class="lightbox-header-meta">' +
            '<span class="lightbox-count-badge" id="standalone-lb-count">Photo</span>' +
            '<span class="lightbox-cat-badge">2026 Dental Show</span>' +
          '</div>' +
          '<button type="button" class="lightbox-dialog-close" id="standalone-lb-close" aria-label="Close photo preview" title="Close (Esc)">' +
            '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="lightbox-dialog-media">' +
          '<button type="button" class="lightbox-nav-btn lightbox-nav-prev" id="standalone-lb-prev" aria-label="Previous photo">' +
            '<svg class="icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18 9 12 15 6"/></svg>' +
          '</button>' +
          '<button type="button" class="lightbox-nav-btn lightbox-nav-next" id="standalone-lb-next" aria-label="Next photo">' +
            '<svg class="icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>' +
          '</button>' +
          '<div class="lightbox-img-wrapper">' +
            '<img id="standalone-lb-img" src="" alt="" class="lightbox-main-img" style="width: 100%; height: 100%; object-fit: contain;" />' +
          '</div>' +
        '</div>' +
        '<div class="lightbox-dialog-footer">' +
          '<div class="lightbox-footer-content">' +
            '<h3 class="lightbox-footer-title" id="standalone-lb-title" style="color: #ffffff"></h3>' +
            '<p class="lightbox-footer-caption" id="standalone-lb-caption" style="color: #ffffff"></p>' +
          '</div>' +
          '<a href="${prefix}gallery/index.html" class="btn-lightbox-central-link">' +
            '<span>Central Photo Archive</span>' +
            '<svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>' +
          '</a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(lightboxEl);

    var lbCards = Array.from(marqueeCards);
    var lbActiveIdx = 0;

    function showPhoto(idx) {
      lbActiveIdx = (idx + lbCards.length) % lbCards.length;
      var card = lbCards[lbActiveIdx];
      var img = card.querySelector("img");
      if (!img) return;

      var countBadge = document.getElementById("standalone-lb-count");
      var lbImg = document.getElementById("standalone-lb-img");
      var title = document.getElementById("standalone-lb-title");
      var caption = document.getElementById("standalone-lb-caption");

      if (countBadge) countBadge.textContent = "Photo " + (lbActiveIdx + 1) + " of " + lbCards.length;
      if (lbImg) {
        lbImg.src = img.src;
        lbImg.alt = img.alt || "Dental Show Photo";
      }
      if (title) title.textContent = img.alt || "Dental Show Moment";
      if (caption) caption.textContent = "Exclusive exhibition archive photograph from Dental Show Chennai.";

      lightboxEl.style.display = "flex";
      document.body.style.overflow = "hidden";
    }

    function hidePhoto() {
      lightboxEl.style.display = "none";
      document.body.style.overflow = "";
    }

    lbCards.forEach(function (card, idx) {
      card.addEventListener("click", function (e) {
        e.preventDefault();
        showPhoto(idx);
      });
    });

    lightboxEl.addEventListener("click", hidePhoto);
    var closeBtn = document.getElementById("standalone-lb-close");
    if (closeBtn) closeBtn.addEventListener("click", hidePhoto);

    var prevBtn = document.getElementById("standalone-lb-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        showPhoto(lbActiveIdx - 1);
      });
    }

    var nextBtn = document.getElementById("standalone-lb-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        showPhoto(lbActiveIdx + 1);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (lightboxEl.style.display === "flex") {
        if (e.key === "Escape") hidePhoto();
        if (e.key === "ArrowLeft") showPhoto(lbActiveIdx - 1);
        if (e.key === "ArrowRight") showPhoto(lbActiveIdx + 1);
      }
    });
  }

  // 7. OFFLINE / FILE PROTOCOL IMAGE AUTO-REPAIR
  function initImageFixer() {
    function fixImg(img) {
      if (!img || img.dataset.relFixed) return;
      var src = img.getAttribute("src");
      if (src && src.startsWith("/images/")) {
        img.src = "${prefix}" + src.slice(1);
        img.dataset.relFixed = "true";
      }
      var srcset = img.getAttribute("srcset");
      if (srcset && srcset.indexOf("/images/") !== -1) {
        img.setAttribute("srcset", srcset.replace(/(^|\s|,)\/images\//g, "$1${prefix}images/"));
      }
    }

    document.querySelectorAll("img").forEach(fixImg);

    if (typeof MutationObserver !== "undefined") {
      var mo = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) {
              if (node.tagName === "IMG") fixImg(node);
              else if (node.querySelectorAll) node.querySelectorAll("img").forEach(fixImg);
            }
          });
        });
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }

    window.addEventListener("error", function (e) {
      if (e.target && e.target.tagName === "IMG") {
        var img = e.target;
        if (!img.dataset.failRecovered) {
          img.dataset.failRecovered = "true";
          var cur = img.getAttribute("src") || img.src;
          if (cur && cur.indexOf("images/") !== -1) {
            var idx = cur.indexOf("images/");
            img.src = "${prefix}" + cur.substring(idx);
          }
        }
      }
    }, true);
  }

  function initAll() {
    initCountdown();
    initMobileMenu();
    initTimelineSlider();
    initBenefitsSlider();
    initStagesAccordion();
    initGalleryLightbox();
    initImageFixer();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
</script>
`;
}

function processHtmlFile(filePath) {
  const relPath = path.relative(outDir, filePath).replace(/\\/g, '/');
  const parts = relPath.split('/');
  const depth = parts.length - 1;
  const prefix = depth === 0 ? './' : '../'.repeat(depth);

  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Asset paths: _next, images, brochures, icons
  html = html.replace(/(href|src)=["']\/_next\//g, `$1="${prefix}_next/`);
  html = html.replace(/(href|src)=["']\/images\//g, `$1="${prefix}images/`);
  html = html.replace(/(href|src)=["']\/brochures\//g, `$1="${prefix}brochures/`);
  html = html.replace(/href=["']\/favicon\.ico(?:\?[^"']*)?["']/g, `href="${prefix}favicon.ico"`);
  html = html.replace(/href=["']\/icon\.png["']/g, `href="${prefix}icon.png"`);
  html = html.replace(/href=["']\/apple-icon\.png["']/g, `href="${prefix}apple-icon.png"`);
  html = html.replace(/srcset=["']([^"']*)["']/g, (match, val) => {
    return `srcset="${val.replace(/(^|\s|,)\/images\//g, `$1${prefix}images/`).replace(/(^|\s|,)\/_next\//g, `$1${prefix}_next/`)}"`;
  });

  // 2. Internal navigation links for offline browsing
  html = html.replace(/href=["']\/["']/g, `href="${prefix}index.html"`);
  html = html.replace(/href=["']\/about\/?["']/g, `href="${prefix}about/index.html"`);
  html = html.replace(/href=["']\/events\/?["']/g, `href="${prefix}events/index.html"`);
  html = html.replace(/href=["']\/gallery\/?["']/g, `href="${prefix}gallery/index.html"`);
  html = html.replace(/href=["']\/contact\/?["']/g, `href="${prefix}contact/index.html"`);
  html = html.replace(/href=["']\/visitor-registration\/?["']/g, `href="${prefix}visitor-registration/index.html"`);
  html = html.replace(/href=["']\/exhibitor-registration\/?["']/g, `href="${prefix}exhibitor-registration/index.html"`);
  html = html.replace(/href=["']\/privacy-policy\/?["']/g, `href="${prefix}privacy-policy/index.html"`);
  html = html.replace(/href=["']\/terms-and-conditions\/?["']/g, `href="${prefix}terms-and-conditions/index.html"`);
  html = html.replace(/href=["']\/disclaimer\/?["']/g, `href="${prefix}disclaimer/index.html"`);
  html = html.replace(/href=["']\/events\/([a-zA-Z0-9_-]+)\/?["']/g, `href="${prefix}events/$1/index.html"`);

  // 3. Inject standalone native controller script before </body>
  const scriptContent = getStandaloneScript(prefix);
  if (!html.includes('id="standalone-html-controller"')) {
    html = html.replace('</body>', scriptContent + '</body>');
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '_next') {
        walkDir(fullPath);
      }
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      processHtmlFile(fullPath);
    }
  }
}

walkDir(outDir);
console.log('✓ Successfully converted static HTML files to relative standalone paths with controller in out/ directory!');
