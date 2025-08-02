const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
  }
);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});
