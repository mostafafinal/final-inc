// Loading
let loading = document.querySelector(".loading");
window.onload = function () {
  setTimeout(() => {
    loading.classList.add("hidden");
    document.body.style.overflow = "visible";
    setTimeout(() => {
      loading.remove();
    }, 3000);
  }, 3000);
};

// Scroll Up Bottom
let scrollBtn = document.querySelector(".scroll-up");
window.onscroll = function () {
  scrollY >= 700
    ? scrollBtn.classList.remove("hidden")
    : scrollBtn.classList.add("hidden");
};
scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
