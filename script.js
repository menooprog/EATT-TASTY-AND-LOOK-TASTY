/* ===================================================================
   FUEL TABLE — app logic
   Sections: mode dial, recipe grid/search/filter, modal, BMI calc,
   calorie calc, 3-month planner, progress tracker (all localStorage)
=================================================================== */
(function () {
  "use strict";

  const LS = {
    mode: "fueltable_mode",
    plan: "fueltable_plan",
    progress: "fueltable_progress"
  };

  const ALL_FOODS = (typeof FOODS !== "undefined") ? FOODS
                    : (typeof window !== "undefined" && Array.isArray(window.FOODS)) ? window.FOODS
                    : [];
  let visibleCount = 24;
  const PAGE_SIZE = 24;
  let currentFilter = "all";
  let currentCuisine = "";
  let currentSort = "name";
  let currentQuery = "";

  /* ---------------------------------------------------------------
     MODE DIAL (theme)
  --------------------------------------------------------------- */
  function setMode(mode) {
    document.body.classList.toggle("mode-gain", mode === "gain");
    document.body.classList.toggle("mode-loss", mode === "loss");
    document.getElementById("btnModeGain").classList.toggle("active", mode === "gain");
    document.getElementById("btnModeLoss").classList.toggle("active", mode === "loss");
    localStorage.setItem(LS.mode, mode);
  }

  function initMode() {
    const saved = localStorage.getItem(LS.mode) || "loss";
    setMode(saved);
    document.getElementById("btnModeGain").addEventListener("click", () => setMode("gain"));
    document.getElementById("btnModeLoss").addEventListener("click", () => setMode("loss"));
  }

  /* ---------------------------------------------------------------
     MOBILE NAV
  --------------------------------------------------------------- */
  function initNavToggle() {
    const btn = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  /* ---------------------------------------------------------------
     RECIPE GRID
  --------------------------------------------------------------- */
  function populateCuisineFilter() {
    const sel = document.getElementById("cuisineFilter");
    const cuisines = [...new Set(ALL_FOODS.map(r => r.cuisine))].sort();
    cuisines.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c; opt.textContent = c;
      sel.appendChild(opt);
    });
  }

  function getFiltered() {
    let list = ALL_FOODS;
    if (currentFilter !== "all") list = list.filter(r => r.category === currentFilter);
    if (currentCuisine) list = list.filter(r => r.cuisine === currentCuisine);
    if (currentQuery) {
      const q = currentQuery.toLowerCase();
      list = list.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.ingredients.some(i => i.toLowerCase().includes(q)) ||
        r.nutrition.vitamins.some(v => v.toLowerCase().includes(q))
      );
    }
    list = [...list];
    switch (currentSort) {
      case "cal-asc": list.sort((a, b) => a.nutrition.calories - b.nutrition.calories); break;
      case "cal-desc": list.sort((a, b) => b.nutrition.calories - a.nutrition.calories); break;
      case "protein-desc": list.sort((a, b) => b.nutrition.protein - a.nutrition.protein); break;
      default: list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }

  function macroBar(n) {
    const total = n.protein * 4 + n.carbs * 4 + n.fats * 9;
    const p = total ? (n.protein * 4 / total * 100) : 33;
    const c = total ? (n.carbs * 4 / total * 100) : 33;
    const f = total ? (n.fats * 9 / total * 100) : 34;
    return `<div class="macro-bar" title="Protein/Carbs/Fats">
      <span class="p" style="width:${p}%"></span>
      <span class="c" style="width:${c}%"></span>
      <span class="f" style="width:${f}%"></span>
    </div>`;
  }

  function renderGrid() {
    const grid = document.getElementById("recipeGrid");
    const filtered = getFiltered();
    const slice = filtered.slice(0, visibleCount);
    document.getElementById("resultCount").textContent =
      `${filtered.length} recipe${filtered.length === 1 ? "" : "s"} found`;

    grid.innerHTML = slice.map(r => `
      <button class="recipe-card" data-id="${r.id}">
        <span class="tag ${r.category}">${r.category === "gain" ? "Weight Gain" : "Weight Loss"}</span>
        <h3>${r.name}</h3>
        <p class="rc-desc">${r.description}</p>
        ${macroBar(r.nutrition)}
        <div class="rc-meta">
          <span class="rc-cal">${r.nutrition.calories} kcal</span>
          <span>${r.prepTimeMin + r.cookTimeMin} min · serves ${r.servings}</span>
        </div>
      </button>
    `).join("");

    grid.querySelectorAll(".recipe-card").forEach(card => {
      card.addEventListener("click", () => openRecipe(Number(card.dataset.id)));
    });

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    loadMoreBtn.hidden = visibleCount >= filtered.length;
  }

  function openRecipe(id) {
    const r = ALL_FOODS.find(x => x.id === id);
    if (!r) return;
    const body = document.getElementById("modalBody");
    body.innerHTML = `
      <span class="tag ${r.category}">${r.category === "gain" ? "Weight Gain" : "Weight Loss"}</span>
      <h2 id="modalTitle">${r.name}</h2>
      <p class="rc-desc">${r.description}</p>
      <p class="fine-print">Prep ${r.prepTimeMin} min · Cook ${r.cookTimeMin} min · Serves ${r.servings} · Cuisine: ${r.cuisine}</p>

      <div class="modal-nutri-grid">
        <div class="nutri-chip"><div class="n-val">${r.nutrition.calories}</div><div class="n-label">Calories</div></div>
        <div class="nutri-chip"><div class="n-val">${r.nutrition.protein}g</div><div class="n-label">Protein</div></div>
        <div class="nutri-chip"><div class="n-val">${r.nutrition.carbs}g</div><div class="n-label">Carbs</div></div>
        <div class="nutri-chip"><div class="n-val">${r.nutrition.fats}g</div><div class="n-label">Fats</div></div>
        <div class="nutri-chip"><div class="n-val">${r.nutrition.fiber}g</div><div class="n-label">Fiber</div></div>
      </div>

      <h3>Vitamins &amp; minerals</h3>
      <div class="vit-pills">${r.nutrition.vitamins.map(v => `<span class="vit-pill">${v}</span>`).join("")}</div>

      <h3>Ingredients</h3>
      <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

      <h3>Method</h3>
      <ol>${r.instructions.map(s => `<li>${s}</li>`).join("")}</ol>
    `;
    document.getElementById("modalOverlay").hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.getElementById("modalOverlay").hidden = true;
    document.body.style.overflow = "";
  }

  function initRecipeUI() {
    populateCuisineFilter();
    renderGrid();

    document.getElementById("segToggle").addEventListener("click", e => {
      const btn = e.target.closest(".seg-btn");
      if (!btn) return;
      document.querySelectorAll(".seg-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      visibleCount = PAGE_SIZE;
      renderGrid();
    });

    document.getElementById("cuisineFilter").addEventListener("change", e => {
      currentCuisine = e.target.value;
      visibleCount = PAGE_SIZE;
      renderGrid();
    });

    document.getElementById("sortFilter").addEventListener("change", e => {
      currentSort = e.target.value;
      renderGrid();
    });

    document.getElementById("searchForm").addEventListener("submit", e => {
      e.preventDefault();
      currentQuery = document.getElementById("searchInput").value.trim();
      visibleCount = PAGE_SIZE;
      renderGrid();
      document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("searchInput").addEventListener("input", e => {
      currentQuery = e.target.value.trim();
      visibleCount = PAGE_SIZE;
      renderGrid();
    });

    document.getElementById("loadMoreBtn").addEventListener("click", () => {
      visibleCount += PAGE_SIZE;
      renderGrid();
    });

    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalOverlay").addEventListener("click", e => {
      if (e.target.id === "modalOverlay") closeModal();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ---------------------------------------------------------------
     BMI CALCULATOR
  --------------------------------------------------------------- */
  function initBmi() {
    const unitsSel = document.getElementById("bmiUnits");
    const wLabel = document.getElementById("bmiWeightLabel");
    const hLabel = document.getElementById("bmiHeightLabel");

    unitsSel.addEventListener("change", () => {
      if (unitsSel.value === "metric") {
        wLabel.firstChild.textContent = "Weight (kg)";
        hLabel.firstChild.textContent = "Height (cm)";
      } else {
        wLabel.firstChild.textContent = "Weight (lb)";
        hLabel.firstChild.textContent = "Height (in)";
      }
    });

    document.getElementById("bmiCalcBtn").addEventListener("click", () => {
      let w = parseFloat(document.getElementById("bmiWeight").value);
      let h = parseFloat(document.getElementById("bmiHeight").value);
      if (!w || !h) return;

      if (unitsSel.value === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hMeters = h / 100;
      const bmi = w / (hMeters * hMeters);

      let category, pct;
      if (bmi < 18.5) { category = "Underweight"; pct = (bmi / 18.5) * 25; }
      else if (bmi < 25) { category = "Normal weight"; pct = 25 + ((bmi - 18.5) / (25 - 18.5)) * 25; }
      else if (bmi < 30) { category = "Overweight"; pct = 50 + ((bmi - 25) / (30 - 25)) * 25; }
      else { category = "Obese"; pct = 75 + Math.min((bmi - 30) / 10, 1) * 25; }
      pct = Math.max(2, Math.min(98, pct));

      document.getElementById("bmiNumber").textContent = bmi.toFixed(1);
      document.getElementById("bmiCategory").textContent = category;
      document.getElementById("bmiScaleMarker").style.left = pct + "%";
      document.getElementById("bmiResult").hidden = false;
    });
  }

  /* ---------------------------------------------------------------
     CALORIE CALCULATOR (Mifflin-St Jeor)
  --------------------------------------------------------------- */
  function initCalorieCalc() {
    document.getElementById("calCalcBtn").addEventListener("click", () => {
      const sex = document.getElementById("calSex").value;
      const age = parseFloat(document.getElementById("calAge").value);
      const weight = parseFloat(document.getElementById("calWeight").value);
      const height = parseFloat(document.getElementById("calHeight").value);
      const activity = parseFloat(document.getElementById("calActivity").value);
      const goal = document.getElementById("calGoal").value;
      if (!age || !weight || !height) return;

      let bmr = sex === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

      const maintenance = bmr * activity;
      let target = maintenance;
      let label = "Maintenance / day";
      if (goal === "loss") { target = maintenance - maintenance * 0.2; label = "Target for loss / day"; }
      if (goal === "gain") { target = maintenance + maintenance * 0.15; label = "Target for gain / day"; }

      document.getElementById("calMaintain").textContent = Math.round(maintenance);
      document.getElementById("calTarget").textContent = Math.round(target);
      document.getElementById("calTargetLabel").textContent = label;

      const protein = Math.round(weight * (goal === "gain" ? 2.0 : 1.8));
      const fats = Math.round((target * 0.28) / 9);
      const carbs = Math.round((target - protein * 4 - fats * 9) / 4);
      document.getElementById("calMacroNote").textContent =
        `Suggested split at this target: ~${protein}g protein · ~${carbs}g carbs · ~${fats}g fats per day. Adjust with a doctor or dietitian for medical conditions.`;

      document.getElementById("calResult").hidden = false;
    });
  }

  /* ---------------------------------------------------------------
     3-MONTH PLANNER
  --------------------------------------------------------------- */
  function pickMeals(goal, count) {
    const pool = ALL_FOODS.filter(r => r.category === goal);
    const picked = [];
    const used = new Set();
    while (picked.length < count && used.size < pool.length) {
      const idx = Math.floor(Math.random() * pool.length);
      if (used.has(idx)) continue;
      used.add(idx);
      picked.push(pool[idx].id);
    }
    return picked;
  }

  function generatePlan() {
    const goal = document.getElementById("plannerGoal").value;
    const meals = parseInt(document.getElementById("plannerMeals").value, 10);
    const weeks = [];
    for (let w = 1; w <= 12; w++) {
      weeks.push({ week: w, mealIds: pickMeals(goal, meals) });
    }
    const plan = { goal, meals, weeks, createdAt: new Date().toISOString() };
    localStorage.setItem(LS.plan, JSON.stringify(plan));
    renderPlan(plan);
  }

  function renderPlan(plan) {
    const wrap = document.getElementById("plannerWeeks");
    if (!plan) { wrap.innerHTML = ""; return; }
    const byId = Object.fromEntries(ALL_FOODS.map(r => [r.id, r]));
    wrap.innerHTML = plan.weeks.map(w => `
      <div class="week-card">
        <h4>Week ${w.week} · rotate these ${plan.meals} meals daily</h4>
        <div class="week-meals">
          ${w.mealIds.map(id => byId[id] ? `
            <div class="week-meal">
              <small>${byId[id].nutrition.calories} kcal · ${byId[id].nutrition.protein}g protein</small>
              ${byId[id].name}
            </div>` : "").join("")}
        </div>
      </div>
    `).join("");
    document.getElementById("plannerNote").textContent =
      `Saved plan: ${plan.goal === "gain" ? "Weight gain" : "Weight loss"} · ${plan.meals} meals/day · 12 weeks. Stored in this browser.`;
  }

  function initPlanner() {
    const saved = localStorage.getItem(LS.plan);
    if (saved) {
      try {
        const plan = JSON.parse(saved);
        document.getElementById("plannerGoal").value = plan.goal;
        document.getElementById("plannerMeals").value = String(plan.meals);
        renderPlan(plan);
      } catch (e) { /* ignore corrupt data */ }
    }

    document.getElementById("plannerGenBtn").addEventListener("click", generatePlan);
    document.getElementById("plannerClearBtn").addEventListener("click", () => {
      localStorage.removeItem(LS.plan);
      renderPlan(null);
      document.getElementById("plannerNote").textContent = "Your plan is saved automatically in this browser.";
    });
  }

  /* ---------------------------------------------------------------
     PROGRESS TRACKER
  --------------------------------------------------------------- */
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(LS.progress)) || [];
    } catch (e) { return []; }
  }
  function saveProgress(entries) {
    localStorage.setItem(LS.progress, JSON.stringify(entries));
  }

  function drawChart(entries) {
    const canvas = document.getElementById("progressChart");
    const empty = document.getElementById("progressEmpty");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.parentElement.clientWidth;
    canvas.width = cssWidth * dpr;
    canvas.height = 220 * dpr;
    canvas.style.width = cssWidth + "px";
    canvas.style.height = "220px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, 220);

    if (entries.length === 0) {
      canvas.style.display = "none";
      empty.style.display = "block";
      return;
    }
    canvas.style.display = "block";
    empty.style.display = "none";

    const sorted = [...entries].sort((a, b) => new Date(a.date) - new Date(b.date));
    const weights = sorted.map(e => e.weight);
    const min = Math.min(...weights) - 1;
    const max = Math.max(...weights) + 1;
    const padL = 40, padR = 16, padT = 16, padB = 28;
    const w = cssWidth - padL - padR;
    const h = 220 - padT - padB;

    const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#6FCBEB";

    ctx.strokeStyle = "rgba(243,230,216,0.12)";
    ctx.lineWidth = 1;
    ctx.font = "10px monospace";
    ctx.fillStyle = "rgba(199,178,162,0.8)";
    for (let i = 0; i <= 3; i++) {
      const y = padT + (h / 3) * i;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + w, y); ctx.stroke();
      const val = max - ((max - min) * (i / 3));
      ctx.fillText(val.toFixed(1), 4, y + 3);
    }

    ctx.beginPath();
    ctx.strokeStyle = accent || "#6FCBEB";
    ctx.lineWidth = 2.5;
    sorted.forEach((e, i) => {
      const x = padL + (sorted.length === 1 ? w / 2 : (w * i) / (sorted.length - 1));
      const y = padT + h - ((e.weight - min) / (max - min)) * h;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    sorted.forEach((e, i) => {
      const x = padL + (sorted.length === 1 ? w / 2 : (w * i) / (sorted.length - 1));
      const y = padT + h - ((e.weight - min) / (max - min)) * h;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = accent || "#6FCBEB";
      ctx.fill();
    });
  }

  function renderProgress() {
    const entries = loadProgress().sort((a, b) => new Date(a.date) - new Date(b.date));
    const tbody = document.getElementById("progressTableBody");
    tbody.innerHTML = entries.map((e, i) => {
      const prev = entries[i - 1];
      let changeHtml = "—", changeClass = "";
      if (prev) {
        const diff = e.weight - prev.weight;
        changeClass = diff > 0 ? "change-up" : diff < 0 ? "change-down" : "";
        changeHtml = (diff > 0 ? "+" : "") + diff.toFixed(1) + " kg";
      }
      return `<tr>
        <td>${e.date}</td>
        <td>${e.weight.toFixed(1)}</td>
        <td class="${changeClass}">${changeHtml}</td>
        <td>${e.note ? e.note : ""}</td>
        <td><button class="row-del" data-id="${e.id}" aria-label="Delete entry">×</button></td>
      </tr>`;
    }).join("");

    tbody.querySelectorAll(".row-del").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const remaining = loadProgress().filter(e => String(e.id) !== id);
        saveProgress(remaining);
        renderProgress();
      });
    });

    drawChart(entries);
  }

  function initProgress() {
    document.getElementById("progDate").value = new Date().toISOString().slice(0, 10);
    renderProgress();

    document.getElementById("progressForm").addEventListener("submit", e => {
      e.preventDefault();
      const date = document.getElementById("progDate").value;
      const weight = parseFloat(document.getElementById("progWeight").value);
      const note = document.getElementById("progNote").value.trim();
      if (!date || !weight) return;

      const entries = loadProgress();
      entries.push({ id: Date.now(), date, weight, note });
      saveProgress(entries);
      document.getElementById("progWeight").value = "";
      document.getElementById("progNote").value = "";
      renderProgress();
    });

    document.getElementById("progressClearBtn").addEventListener("click", () => {
      if (confirm("Clear all saved progress entries? This cannot be undone.")) {
        saveProgress([]);
        renderProgress();
      }
    });

    window.addEventListener("resize", () => drawChart(loadProgress()));
  }

  /* ---------------------------------------------------------------
     INIT
  --------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    if (!ALL_FOODS.length) {
      const grid = document.getElementById("recipeGrid");
      if (grid) {
        grid.innerHTML = `<p style="color:var(--muted);grid-column:1/-1;">
          Couldn't load the recipe data. Make sure <code>foods.js</code> is saved in the
          same folder as this HTML file, then refresh the page. (Open your browser's
          developer console — F12 — for more detail if this keeps happening.)
        </p>`;
      }
      console.error("Fuel Table / EAT AND LOOK TASTY: FOODS array is empty or missing. " +
        "Check that foods.js loaded before script.js and sits in the same folder as index.html.");
    }

    document.getElementById("statGain").textContent =
      ALL_FOODS.filter(r => r.category === "gain").length;
    document.getElementById("statLoss").textContent =
      ALL_FOODS.filter(r => r.category === "loss").length;

    try {
      initMode();
      initNavToggle();
      initRecipeUI();
      initBmi();
      initCalorieCalc();
      initPlanner();
      initProgress();
    } catch (err) {
      console.error("EAT AND LOOK TASTY init error:", err);
    }
  });
})();
