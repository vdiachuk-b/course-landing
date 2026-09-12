// ==========================================================================
// ТАЙМЕР ЗВОРОТНОГО ВІДЛІКУ
// Рахує до кінця поточної доби (23:59:59) і сам стартує заново з опівночі.
// ==========================================================================
function endOfToday() {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23, 59, 59, 999
  ).getTime();
}

function startCountdown(container) {
  let deadline = endOfToday();

  const hourEl = container.querySelector("#hours") || container.querySelector(".h");
  const minEl = container.querySelector("#minutes") || container.querySelector(".m");
  const secEl = container.querySelector("#seconds") || container.querySelector(".s");

  function update() {
    let diff = deadline - Date.now();

    if (diff <= 0) {
      // Доба закінчилась — рахуємо заново до кінця нової доби.
      deadline = endOfToday();
      diff = deadline - Date.now();
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (hourEl) hourEl.textContent = String(hours).padStart(2, "0");
    if (minEl) minEl.textContent = String(minutes).padStart(2, "0");
    if (secEl) secEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

document.querySelectorAll(".timer").forEach(startCountdown);

// ==========================================================================
// SCROLL REVEAL — плавна поява елементів при прокрутці до них
// ==========================================================================
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
}

// ==========================================================================
// META PIXEL — InitiateCheckout при переході на оплату WayForPay
// ==========================================================================
const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn && typeof fbq === "function") {
  checkoutBtn.addEventListener("click", function () {
    fbq("track", "InitiateCheckout", { value: 299, currency: "UAH" });
  });
}
