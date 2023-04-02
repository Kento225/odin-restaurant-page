console.log("bibis");
import "./main.css";
import { homeRender } from "./home.js";
import { menuRender } from "./menu.js";
import { contactsRender } from "./contacts";
import { hideHome } from "./home.js";
import { hideContacts } from "./contacts";
import { hideMenu } from "./menu.js";

let page = "";

const content = document.querySelector("#content");

const navbar = document.createElement("div");
navbar.classList.add("navbar");
content.appendChild(navbar);

const rightSide = document.createElement("div");
rightSide.classList.add("right-side");

const leftSide = document.createElement("div");
leftSide.classList.add("left-side");

const homeBtn = document.createElement("div");
homeBtn.classList.add("home-btn");
homeBtn.textContent = "Home";
rightSide.appendChild(homeBtn);

const menuBtn = document.createElement("div");
menuBtn.classList.add("menu-btn");
menuBtn.textContent = "Menu";
rightSide.appendChild(menuBtn);

const contactsBtn = document.createElement("div");
contactsBtn.classList.add("contacts-btn");
contactsBtn.textContent = "Contacts";
rightSide.appendChild(contactsBtn);

const logo = document.createElement("div");
logo.classList.add("logo");
logo.textContent = "Logo";
leftSide.appendChild(logo);

navbar.appendChild(leftSide);
navbar.appendChild(rightSide);

homeBtn.addEventListener("click", () => {
  homeBtn.style.textDecoration = "underline";
  menuBtn.style.textDecoration = "none";
  contactsBtn.style.textDecoration = "none";
  if (page === "c") {
    hideContacts();
  } else if (page === "m") {
    hideMenu();
  } else if (page === "h") {
    return;
  }
  homeRender();
  page = "h";
  console.log(page);
});

menuBtn.addEventListener("click", () => {
  homeBtn.style.textDecoration = "none";
  menuBtn.style.textDecoration = "underline";
  contactsBtn.style.textDecoration = "none";
  if (page === "h") {
    hideHome();
  } else if (page === "c") {
    hideContacts();
  } else if (page === "m") {
    return;
  }
  menuRender();
  page = "m";
});

contactsBtn.addEventListener("click", () => {
  homeBtn.style.textDecoration = "none";
  menuBtn.style.textDecoration = "none";
  contactsBtn.style.textDecoration = "underline";
  if (page === "h") {
    hideHome();
  } else if (page === "m") {
    hideMenu();
  } else if (page === "c") {
    return;
  }
  contactsRender();
  page = "c";
  console.log(page);
});
