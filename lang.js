const togglefr = document.querySelector("#toggle-fr");
const toggleen = document.querySelector("#toggle-en");
const titleComming = document.querySelector("#title-comming");
const textComming = document.querySelector("#text-comming");
const buttonNewsletter = document.querySelector("#button-newsletter");
const inputNewsletter = document.querySelector("#input-newsletter");

function changeLangFr() {
  togglefr.classList.add("active");
  togglefr.classList.remove("inactive");
  toggleen.classList.add("inactive");
  toggleen.classList.remove("active");
  titleComming.textContent = "Notre site web arrive bientôt";
  buttonNewsletter.textContent = "M'avertir !";
  inputNewsletter.setAttribute("placeholder", "Votre adresse e-mail");
  textComming.textContent = "Nous travaillons d'arrache-pied pour terminer le développement de ce site. Inscrivez-vous ci-dessous pour recevoir des mises à jour et être informé du lancement !";
}

function changeLangEn() {
  toggleen.classList.add("active");
  toggleen.classList.remove("inactive");
  togglefr.classList.add("inactive");
  togglefr.classList.remove("active");
  titleComming.textContent = "Our Website is Coming Soon";
  buttonNewsletter.textContent = "Notify me !";
  inputNewsletter.setAttribute("placeholder", "Your email address");
  textComming.textContent = "We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!";
}

togglefr.addEventListener("click", changeLangFr);
toggleen.addEventListener("click", changeLangEn);

changeLangFr();