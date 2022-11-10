const btn = document.getElementById("btn");
const advice = document.getElementById("advice");
const urlAdv = "https://api.adviceslip.com/advice";

/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => (advice.textContent = res.slip.advice))
    .catch((el) => console.log("Error:" + el));
};

const onFirstLoad = () => {
  btn.addEventListener("click", () => {
    getAdvice(urlAdv);
  });

  getAdvice(urlAdv);
};

window.onload = onFirstLoad;
