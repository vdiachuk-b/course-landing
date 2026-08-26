// ==========================================================================
// ТАЙМЕР ЗВОРОТНОГО ВІДЛІКУ
// Дедлайн береться з атрибута data-deadline на елементі .timer
// ==========================================================================
function startCountdown(container) {
  const deadline = new Date(container.dataset.deadline).getTime();

  const dayEl = container.querySelector("#days") || container.querySelector(".d");
  const hourEl = container.querySelector("#hours") || container.querySelector(".h");
  const minEl = container.querySelector("#minutes") || container.querySelector(".m");
  const secEl = container.querySelector("#seconds") || container.querySelector(".s");

  function update() {
    const now = Date.now();
    let diff = deadline - now;

    if (diff <= 0) {
      diff = 0;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (dayEl) dayEl.textContent = String(days).padStart(2, "0");
    if (hourEl) hourEl.textContent = String(hours).padStart(2, "0");
    if (minEl) minEl.textContent = String(minutes).padStart(2, "0");
    if (secEl) secEl.textContent = String(seconds).padStart(2, "0");

    if (diff <= 0) {
      clearInterval(intervalId);
    }
  }

  update();
  const intervalId = setInterval(update, 1000);
}

document.querySelectorAll(".timer[data-deadline]").forEach(startCountdown);

// ==========================================================================
// META PIXEL — InitiateCheckout при переході на оплату WayForPay
// ==========================================================================
const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn && typeof fbq === "function") {
  checkoutBtn.addEventListener("click", function () {
    fbq("track", "InitiateCheckout", { value: 299, currency: "UAH" });
  });
}
