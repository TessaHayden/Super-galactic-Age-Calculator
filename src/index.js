import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Year from "../src/years";

function calcMerc(currentAge) {
  let year = new Year();
  return year.mercuryYear(currentAge);
}
function calcVenus(currentAge) {
  let year = new Year();
  return year.venusYear(currentAge);
}
function calcMars(currentAge) {
  let year = new Year();
  return year.marsYear(currentAge);
}
function calcJupiter(currentAge) {
  let year = new Year();
  return year.jupiterYear(currentAge);
}
function handleMercury() {
  const age = document.querySelector("#currAgeInput").value;
  const calculatedAge = calcMerc(age);
  return calculatedAge;
}
function displayMercuryAges(event) {
  event.preventDefault();
  const calculateAge = handleMercury();
  const mercuryDiv = document.querySelector("#merc-age");
  mercuryDiv.innerText = "Your age in Mercury years: " + calculateAge;
}
function handleVenus() {
  const age = document.querySelector("#currAgeInput").value;
  const calculatedAge = calcVenus(age);
  return calculatedAge;
}
function displayVenusAges(event) {
  event.preventDefault();
  const calculateAge = handleVenus();
  const venusDiv = document.querySelector("#ven-age");
  venusDiv.innerText = "Your age in Venus years: " + calculateAge;
}
function handleMars() {
  const age = document.querySelector("#currAgeInput").value;
  const calculatedAge = calcMars(age);
  return calculatedAge;
}
function displayMarsAges(event) {
  event.preventDefault();
  const calculateAge = handleMars();
  const marsDiv = document.querySelector("#mars-age");
  marsDiv.innerText = "Your age in Mars years: " + calculateAge;
}
function handleJupiter() {
  const age = document.querySelector("#currAgeInput").value;
  const calculatedAge = calcJupiter(age);
  return calculatedAge;
}
function displayJupiterAges(event) {
  event.preventDefault();
  const calculateAge = handleJupiter();
  const jupiterDiv = document.querySelector("#jupiter-age");
  jupiterDiv.innerText = "Your age in Jupiter years: " + calculateAge;
}
window.addEventListener("load", function () {
  const mercBtn = document.querySelector("#mercury-btn");
  const venusBtn = document.querySelector("#venus-btn");
  const marsBtn = document.querySelector("#mars-btn");
  const jupiterBtn = document.querySelector("#jupiter-btn");
  mercBtn.addEventListener("click", displayMercuryAges);
  venusBtn.addEventListener("click", displayVenusAges);
  marsBtn.addEventListener("click", displayMarsAges);
  jupiterBtn.addEventListener("click", displayJupiterAges);
});
