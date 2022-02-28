const textE2 = document.querySelectorAll(".maintitle");
const goTop = document.getElementById("goTop");
const openMenu = document.getElementById("MenuButton");
const navBar = document.getElementById("navContainer");
const list = document.getElementById("listContainer");
let isOpen = true;
//To Top Button
window.addEventListener("scroll", () => {
  window.pageYOffset > 100
    ? goTop.classList.add("GoTopVisible")
    : goTop.classList.remove("GoTopVisible");
});

const topFunction = () => {
  {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};
goTop.addEventListener("click", topFunction);

//MENU BUTTON

const open = () => {
  isOpen = !isOpen;
  !isOpen
    ? (navBar.classList.add("open"), navBar.classList.remove("closed"))
    : (navBar.classList.remove("open"), navBar.classList.add("closed"));
  console.log(isOpen);
};
const closedMenu = () => {
  navBar.classList.remove("closed");
};

openMenu.addEventListener("click", open);
navBar.addEventListener("transitionend", closedMenu);

//event delegation

list.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  e.target.tagName === "A" && open();
});

/* Ruber band aeffect over spans */
for (let i = 0; i < textE2.length; i++) {
  let rubbers = textE2[i];
  for (let j = 0; j < rubbers.children.length; j++) {
    let rubber = rubbers.children[j];
    rubber.addEventListener("animationend", () => {
      rubber.classList.remove("rubber");
      rubber.classList.add("rubber3");
    });
    rubber.addEventListener("mouseover", () => {
      rubber.classList.add("rubber2");
    });
    rubber.addEventListener("animationend", () => {
      rubber.classList.remove("rubber2");
    });
  }
}
