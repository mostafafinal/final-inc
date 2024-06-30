// Loading
let loading = document.querySelector(".loading");
this.onload = function () {
  setTimeout(() => {
    loading.classList.add("hidden");
    document.body.style.overflow = "visible";
    setTimeout(() => {
      loading.remove();
    }, 3000);
  }, 3000);
};
