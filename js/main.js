window.onscroll = () => {
      const scrollPosition = window.pageYOffset | document.body.scrollTop;

      if (scrollPosition != 0) {
            document.querySelector('nav').classList.add("white");
      } else {
            document.querySelector('nav').classList.remove("white");
      }
};

const menu = document.querySelector(".navbar-nav");

document.querySelector(".navbar-toggler").addEventListener("click", () => {
      if (!menu.classList.contains("show")) {
            menu.classList.add("show");
      } else {
            menu.classList.remove("show");
      }
});

//Modal

const modal = document.querySelector(".modal");

const btn = document.querySelector(".myBtn1");

const btn2 = document.querySelector(".myBtn2");

const btn3 = document.querySelector(".myBtn3");

const span = document.querySelector(".close");

btn.addEventListener('click', () => {
      modal.style.display = "block";
});

btn2.addEventListener('click', () => {
      modal.style.display = "block";
});

btn3.addEventListener('click', () => {
      modal.style.display = "block";
});

span.addEventListener('click', () => {
      modal.style.display = "none";
});

window.addEventListener('click', (event) => {
      if (event.target == modal) {
    modal.style.display = "none";
  }
});

