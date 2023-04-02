export function contactsRender() {
  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("contacts-container");

  const contactsHead = document.createElement("div");
  contactsHead.classList.add("contacts-head");
  contactsHead.textContent = "Contact Us";
  contactsContainer.appendChild(contactsHead);

  content.appendChild(contactsContainer);

  const contacts1 = document.createElement("div");
  contacts1.textContent =
    "Phone: 555-1234\r\nEmail: info@savoriaskitchen.com\r\nAddress: 123 Main Street, Anytown USA";
  contactsContainer.appendChild(contacts1);
  contacts1.classList.add("contacts");
  contactsContainer.appendChild(contacts1);

  const contacts2 = document.createElement("div");
  contacts2.textContent =
    "Facebook: https://www.facebook.com/SavoriasKitchen\r\nInstagram: https://www.instagram.com/SavoriasKitchen\r\nTwitter: https://www.twitter.com/SavoriasKitchen";
  contactsContainer.appendChild(contacts2);
  contacts2.classList.add("contacts");
  contactsContainer.appendChild(contacts2);

  const contacts3 = document.createElement("div");
  contacts3.textContent =
    "We look forward to hearing from you and hope to see you soon at Savoria's Kitchen!";
  contactsContainer.appendChild(contacts3);
  contacts3.classList.add("contacts");
  contactsContainer.appendChild(contacts3);
}

export function hideContacts() {
  document.getElementsByClassName("contacts-container")[0].remove();
}
