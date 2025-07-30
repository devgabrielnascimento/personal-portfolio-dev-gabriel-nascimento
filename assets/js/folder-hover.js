let lastClicked = null;

function handleClick(e, wrapper) {
  if (lastClicked !== wrapper) {
    e.preventDefault();
    lastClicked = wrapper;

    document.querySelectorAll(".svg-wrapper").forEach((w) => {
      w.classList.remove("show-hover");
    });
    wrapper.classList.add("show-hover");
  } else {
    lastClicked = null;
  }
}

function abrir(e) {
  e.stopPropagation();
}

function editar(e) {
  e.stopPropagation();
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".svg-wrapper")) {
    document.querySelectorAll(".svg-wrapper").forEach((w) => {
      w.classList.remove("show-hover");
    });
    lastClicked = null;
  }
});
