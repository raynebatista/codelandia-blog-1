//scroll animado

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: false,
});

ScrollReveal().reveal(".post", { delay: 300 });
ScrollReveal().reveal(".data", { delay: 300 });
ScrollReveal().reveal(".title", { delay: 400 });
ScrollReveal().reveal(".paragrafo", { delay: 500 });
ScrollReveal().reveal(".footer", { delay: 500 });

//coração like

const likes = document.querySelectorAll(".like");

for (let like of likes) like.addEventListener("click", () => liked(like));

const liked = (item) => {
  if (item.classList.contains("far")) {
    item.classList.remove("far");
    item.classList.add("fas");
  } else {
    item.classList.remove("fas");
    item.classList.add("far");
  }
};
