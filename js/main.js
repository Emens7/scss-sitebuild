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



// Get the modal
const modal = document.querySelector(".myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}