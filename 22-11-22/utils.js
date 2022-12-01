const q = (el) => document.querySelector(el);

const c = (el) => document.createElement(el);

const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

export { c, q, GET, DELETE };
