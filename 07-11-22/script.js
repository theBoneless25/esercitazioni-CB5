fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) =>
    todos.map((i) =>
      console.log("id: " + i.id, "\n", "Title: " + i.title, "\n")
    )
  )
  .catch((err) => console.log("Error:" + err))
  .finally(() =>
    console.log("<--------------------------------------------------------->")
  );

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) =>
    users.map((i) =>
      console.log(
        "Name: " + i.name,
        "\n",
        "Address: " + Object.values(i.address, i.lenght <= 3),
        "\n",
        "City: " + i.address.city,
        "\n"
      )
    )
  )
  .catch((err) => console.log("Error:" + err))
  .finally(() => console.log("<------------------------------------------>"));
