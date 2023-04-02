export function homeRender() {
  const homeTitle = document.createElement("div");
  homeTitle.classList.add("home-title");
  homeTitle.textContent =
    "Taste the Fusion of Culture and Flavor at Savoria's Kitchen";

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-div");

  const homeSpan1 = document.createElement("span");
  homeSpan1.textContent = "Monday - Friday: 11:00 am - 10:00 pm";
  homeDiv.appendChild(homeSpan1);

  const homeSpan2 = document.createElement("span");
  homeSpan2.textContent = "Saturday: 10:00 am - 11:00 pm";
  homeDiv.appendChild(homeSpan2);

  const homeSpan3 = document.createElement("span");
  homeSpan3.textContent = "Sunday: 10:00 am - 9:00 pm";
  homeDiv.appendChild(homeSpan3);

  const homeDivContainer = document.createElement("div");
  homeDivContainer.classList.add("home-div-container");
  homeDivContainer.appendChild(homeDiv);

  content.appendChild(homeTitle);
  content.appendChild(homeDivContainer);
}

export function hideHome() {
  document.getElementsByClassName("home-title")[0].remove();
  document.getElementsByClassName("home-div-container")[0].remove();
}
