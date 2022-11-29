const qs = (type) => document.querySelector(type);

const ce = (type) => document.createElement(type);

const GET = async (url) => await fetch(url).then((res) => res.json());

const POST = async (url, body) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export { qs, ce, GET, POST };
