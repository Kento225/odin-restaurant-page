export function menuRender() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);

  const appetizerHead = document.createElement("h1");
  appetizerHead.textContent = "Appetizers";
  const signatureHead = document.createElement("h1");
  signatureHead.textContent = "Signature dishes";

  const appetizerContainer = document.createElement("div");
  appetizerContainer.classList.add("menu-section-container");

  const hummusContainer = document.createElement("div");
  const hummusImg = document.createElement("div");
  const hummusDesc = document.createElement("p");

  hummusContainer.classList.add("hummus-container");
  hummusImg.classList.add("hummus-img");
  hummusDesc.classList.add("hummus-desc");
  hummusDesc.textContent = "Hummus";

  hummusContainer.appendChild(hummusImg);
  hummusContainer.appendChild(hummusDesc);
  appetizerContainer.appendChild(hummusContainer);

  const samosasContainer = document.createElement("div");
  const samosasImg = document.createElement("div");
  const samosasDesc = document.createElement("p");

  samosasContainer.classList.add("samosas-container");
  samosasImg.classList.add("samosas-img");
  samosasDesc.classList.add("samosas-desc");
  samosasDesc.textContent = "Samosas";

  samosasContainer.appendChild(samosasImg);
  samosasContainer.appendChild(samosasDesc);
  appetizerContainer.appendChild(samosasContainer);

  const signatureContainer = document.createElement("div");
  signatureContainer.classList.add("menu-section-container");

  const steakContainer = document.createElement("div");
  const steakImg = document.createElement("div");
  const steakDesc = document.createElement("p");

  steakContainer.classList.add("steak-container");
  steakImg.classList.add("steak-img");
  steakDesc.classList.add("steak-desc");
  steakDesc.textContent = "Grilled steak with chimichurri sauce";

  steakContainer.appendChild(steakImg);
  steakContainer.appendChild(steakDesc);

  const pepperContainer = document.createElement("div");
  const pepperImg = document.createElement("div");
  const pepperDesc = document.createElement("p");

  pepperContainer.classList.add("pepper-container");
  pepperImg.classList.add("pepper-img");
  pepperDesc.classList.add("pepper-desc");
  pepperDesc.textContent = "Stuffed peppers";

  pepperContainer.appendChild(pepperImg);
  pepperContainer.appendChild(pepperDesc);

  menuContainer.appendChild(signatureHead);
  menuContainer.appendChild(signatureContainer);
  signatureContainer.appendChild(steakContainer);
  signatureContainer.appendChild(pepperContainer);
  menuContainer.appendChild(appetizerHead);
  menuContainer.appendChild(appetizerContainer);
}

export function hideMenu() {
  document.getElementsByClassName("menu-container")[0].remove();
}
