let identityCard = ["Rick", "Sanchez", "Età 64", "Scienzato"];
//---console.log(identityCard)

//----Eliminare un elemento all'interno dell'array---
identityCard.splice(2, 1);
//---console.log("eliminare età")

//----Aggiugere data di nascita al posto dell'età---
//--identityCard[2] = "20 luglio 1962";---
identityCard.splice(2, 0, "20 luglio 1962");
//----console.log("agg.data di nascita")

//-----Trasformare Nome e Cognore in maiuscolo---
identityCard[0] = identityCard[0].toUpperCase();
identityCard[1] = identityCard[1].toUpperCase();
console.log(identityCard);
//---console.log("maiusc. nome e cognome")

//---triangolo 7x#----

let triangle = "########";
for (let i = 7; i >= 0; i--) {
  triangle = triangle.slice(0, i);
  console.log(triangle);
}
