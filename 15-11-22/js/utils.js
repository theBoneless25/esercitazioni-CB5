// API
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const q = (el) => document.querySelector(el);

const c = (el) => document.createElement(el);

const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const POST = async (BASE_URL, body) => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      // Uso questa utils post per inviare i dati dell'url tramite i form
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export { c, q, GET, POST, uuidv4 };
