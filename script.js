document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const form = document.getElementById("quoteForm");
  const formStatus = document.getElementById("formStatus");
  const addItemBtn = document.getElementById("addItemBtn");
  const itemsWrap = document.getElementById("itemsWrap");

  if (addItemBtn && itemsWrap) {
    addItemBtn.addEventListener("click", () => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="form-grid four">
          <div class="field">
            <label>Typ prvku</label>
            <select name="Typ prvku[]">
              <option>Jednodílné okno</option>
              <option>Dvoudílné okno</option>
              <option>Trojdílné okno</option>
              <option>Balkonové dveře</option>
              <option>Vchodové dveře</option>
              <option>Posuvný portál</option>
              <option>Atyp</option>
            </select>
          </div>
          <div class="field">
            <label>Rozměr (š × v v mm)</label>
            <input type="text" name="Rozměr[]" placeholder="např. 1500 x 1450">
          </div>
          <div class="field">
            <label>Počet ks</label>
            <input type="number" name="Počet ks[]" min="1" value="1">
          </div>
          <div class="field">
            <label>Upřesnění</label>
            <input type="text" name="Upřesnění položky[]" placeholder="např. fix, sklopné, žaluzie">
          </div>
        </div>
        <button type="button" class="remove-item">Odebrat</button>
      `;
      itemsWrap.appendChild(row);
    });

    itemsWrap.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-item")) {
        const rows = itemsWrap.querySelectorAll(".item-row");
        if (rows.length > 1) {
          e.target.closest(".item-row").remove();
        }
      }
    });
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (formStatus) formStatus.textContent = "Odesílám poptávku...";

      const data = new FormData(form);
      try {
        const response = await fetch(form.action, { method: "POST", body: data });
        const result = await response.json();
        if (result.success) {
          if (formStatus) formStatus.textContent = "Poptávka byla úspěšně odeslána.";
          form.reset();
        } else {
          if (formStatus) formStatus.textContent = "Odeslání se nepodařilo. Zkuste to prosím znovu.";
        }
      } catch (error) {
        if (formStatus) formStatus.textContent = "Došlo k chybě při odesílání formuláře.";
      }
    });
  }

  const toggleBtn = document.getElementById("toggleGardenTypes");
  const gardenTypes = document.getElementById("gardenTypes");
  if (toggleBtn && gardenTypes) {
    toggleBtn.addEventListener("click", () => {
      gardenTypes.classList.toggle("collapsed");
      toggleBtn.textContent = gardenTypes.classList.contains("collapsed") ? "Zobrazit více" : "Zobrazit méně";
    });
  }

  const openHelp = document.getElementById("openHelp");
  const helpModal = document.getElementById("helpModal");
  const closeHelp = document.getElementById("closeHelp");
  if (openHelp && helpModal && closeHelp) {
    openHelp.addEventListener("click", () => { helpModal.style.display = "flex"; });
    closeHelp.addEventListener("click", () => { helpModal.style.display = "none"; });
    helpModal.addEventListener("click", (e) => {
      if (e.target === helpModal) helpModal.style.display = "none";
    });
  }
});
