const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Desconecta depois de ativar (opcional)
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.55,
  }
);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});
