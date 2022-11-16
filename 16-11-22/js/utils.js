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

const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

export { c, q, GET, POST, DELETE };
