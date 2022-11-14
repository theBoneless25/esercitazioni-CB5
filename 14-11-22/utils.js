//--CREO DEI PARAMETRI PER AGEVOLARE LA SCRITTURA NEL MAIN.JS

/**
 *
 * @param {string} el             // CREO UN ELEMENTO CHE MI AIUTA A SELEZIONARE UN ELEMENTO NELL HTML
 * @returns
 */

const q = (el) => document.querySelector(el);

/**
 *
 * @param {string} el       /// CREO UN ELEMENTO CHE MI CREA UN ELEMENTO HTML
 * @returns
 */

const c = (el) => document.createElement(el);

/**
 *
 * @param {string} URL
 * @returns
 */
const GET = async (URL) => {
  const response = await fetch(URL); //
  const data = await response.json();
  return await data;
};

export { c, q, GET };
