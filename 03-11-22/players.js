const players = [
  {
    id: 1,
    title: "Alisson Becker",
    role: "Goalkeeper",
    ability: "1",
    weakfoot: "4",
    nationality: "Brasil",
    price: 60000,
    rating: 89,
    quantity: 35,
    league: "Premier League",
    runstyle: "none",
    image: "https://cdn.futbin.com/content/fifa23/img/players/212831.png?v=23",
  },
  {
    id: 2,
    title: "Thibaut Courtois",
    role: "Goalkeeper",
    ability: "1",
    weakfoot: "3",
    nationality: "Belgium",
    price: 80000,
    rating: 90,
    quantity: 50,
    league: "Liga",
    runstyle: "none",
    image: "https://cdn.futbin.com/content/fifa23/img/players/192119.png?v=23",
  },
  {
    id: 3,
    title: "Gianluigi Donnarumma",
    role: "Goalkeeper",
    ability: "1",
    weakfoot: "3",
    nationality: "Italy",
    price: 70000,
    rating: 88,
    quantity: 40,
    league: "Ligue 1",
    runstyle: "none",
    image: "https://cdn.futbin.com/content/fifa23/img/players/230621.png?v=23",
  },
  {
    id: 4,
    title: "Mike Maignan",
    role: "Goalkeeper",
    ability: "1",
    weakfoot: "4",
    nationality: "France",
    price: 50000,
    rating: 87,
    quantity: 50,
    league: "Serie A",
    runstyle: "none",
    image: "https://cdn.futbin.com/content/fifa23/img/players/215698.png?v=23",
  },
  {
    id: 5,
    title: "Manuel Neuer",
    role: "Goalkeeper",
    ability: "2",
    weakfoot: "4",
    nationality: "Germany",
    price: 60000,
    rating: 90,
    quantity: 50,
    league: "Bundesliga",
    runstyle: "none",
    image: "https://cdn.futbin.com/content/fifa23/img/players/167495.png?v=23",
  },
  {
    id: 3,
    title: " Virgil Van Dijk",
    role: "Defender",
    ability: "3",
    weakfoot: "3",
    nationality: "Holland",
    price: 200000,
    rating: 90,
    quantity: 60,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/203376.png?v=23",
  },
  {
    id: 4,
    title: "Antonio Rudiger",
    role: "Defender",
    ability: "3",
    weakfoot: "2",
    nationality: "Germany",
    price: 100000,
    rating: 87,
    quantity: 80,
    league: "Liga",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/205452.png?v=23",
  },
  {
    id: 5,
    title: "Sergio Ramos",
    role: "Defender",
    ability: "3",
    weakfoot: "4",
    nationality: "Spain",
    price: 20000,
    rating: 84,
    quantity: 74,
    league: "Ligue 1",
    runstyle: "controlled",
    image: "https://cdn.futbin.com/content/fifa23/img/players/155862.png?v=23",
  },
  {
    id: 6,
    title: "Marquinhos",
    role: "Defender",
    ability: "3",
    weakfoot: "4",
    nationality: "Brasil",
    price: 40000,
    rating: 88,
    quantity: 83,
    league: "Ligue 1",
    runstyle: "controlled",
    image: "https://cdn.futbin.com/content/fifa23/img/players/207865.png?v=23",
  },
  {
    id: 7,
    title: "Ruben Dias",
    role: "Defender",
    ability: "3",
    weakfoot: "2",
    nationality: "Portugal",
    price: 30000,
    rating: 88,
    quantity: 83,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/239818.png?v=23",
  },
  {
    id: 8,
    title: "Milan Skriniar",
    role: "Defender",
    ability: "3",
    weakfoot: "2",
    nationality: "Slovakia",
    price: 20000,
    rating: 86,
    quantity: 73,
    league: "Serie A",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/232363.png?v=23",
  },
  {
    id: 9,
    title: "Kalidou Koulibaly",
    role: "Defender",
    ability: "3",
    weakfoot: "4",
    nationality: "Senegal",
    price: 45000,
    rating: 87,
    quantity: 80,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/201024.png?v=23",
  },
  {
    id: 10,
    title: "Joao Cancelo",
    role: "Defender",
    ability: "4",
    weakfoot: "4",
    nationality: "Portugal",
    price: 55000,
    rating: 88,
    quantity: 83,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/210514.png?v=23",
  },
  {
    id: 11,
    title: "Luka Modric",
    role: "Midfielder",
    ability: "4",
    weakfoot: "4",
    nationality: "Croatia",
    price: 25000,
    rating: 88,
    quantity: 54,
    league: "Liga",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/177003.png?v=23",
  },
  {
    id: 12,
    title: "Nicolò Barella",
    role: "Midfielder",
    ability: "3",
    weakfoot: "3",
    nationality: "Italy",
    price: 23000,
    rating: 86,
    quantity: 54,
    league: "Serie A",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/224232.png?v=23",
  },
  {
    id: 13,
    title: "Sergej Milinkovic-Savic",
    role: "Midfielder",
    ability: "4",
    weakfoot: "4",
    nationality: "Serbia",
    price: 20000,
    rating: 86,
    quantity: 52,
    league: "Serie A",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/223848.png?v=23",
  },
  {
    id: 14,
    title: "N'Golo Kantè",
    role: "Midfielder",
    ability: "3",
    weakfoot: "2",
    nationality: "France",
    price: 50000,
    rating: 89,
    quantity: 45,
    league: "Premier League",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/215914.png?v=23",
  },
  {
    id: 15,
    title: "Joshua Kimmich",
    role: "Midfielder",
    ability: "4",
    weakfoot: "4",
    nationality: "Germany",
    price: 35000,
    rating: 89,
    quantity: 23,
    league: "Bundesliga",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/212622.png?v=23",
  },
  {
    id: 16,
    title: "Kevin De Bruyne",
    role: "Midfielder",
    ability: "4",
    weakfoot: "5",
    nationality: "Belgium",
    price: 110000,
    rating: 91,
    quantity: 32,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/192985.png?v=23",
  },
  {
    id: 17,
    title: "Pedri",
    role: "Midfielder",
    ability: "4",
    weakfoot: "4",
    nationality: "Spain",
    price: 20000,
    rating: 85,
    quantity: 44,
    league: "Liga",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/251854.png?v=23",
  },
  {
    id: 18,
    title: "Marco Verratti",
    role: "Midfielder",
    ability: "4",
    weakfoot: "4",
    nationality: "Italy",
    price: 15000,
    rating: 87,
    quantity: 35,
    league: "Ligue 1",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/199556.png?v=23",
  },
  {
    id: 19,
    title: "Erling Haaland",
    role: "Forward",
    ability: "3",
    weakfoot: "3",
    nationality: "Norway",
    price: 150000,
    rating: 88,
    quantity: 23,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/239085.png?v=23",
  },
  {
    id: 20,
    title: "Kylian Mbappe",
    role: "Forward",
    ability: "5",
    weakfoot: "4",
    nationality: "France",
    price: 120000,
    rating: 91,
    quantity: 15,
    league: "Ligue 1",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/231747.png?v=23",
  },
  {
    id: 21,
    title: "Lionel Messi",
    role: "Forward",
    ability: "4",
    weakfoot: "4",
    nationality: "Argentina",
    price: 100000,
    rating: 90,
    quantity: 51,
    league: "Ligue 1",
    runstyle: "controlled",
    image: "https://cdn.futbin.com/content/fifa23/img/players/158023.png?v=23",
  },
  {
    id: 22,
    title: "Neymar Jr",
    role: "Forward",
    ability: "5",
    weakfoot: "5",
    nationality: "Brasil",
    price: 90000,
    rating: 89,
    quantity: 64,
    league: "Ligue 1",
    runstyle: "controlled",
    image: "https://cdn.futbin.com/content/fifa23/img/players/190871.png?v=23",
  },
  {
    id: 23,
    title: "Cristiano Ronaldo",
    role: "Forward",
    ability: "5",
    weakfoot: "4",
    nationality: "Portugal",
    price: 120000,
    rating: 90,
    quantity: 50,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/20801.png?v=23",
  },
  {
    id: 24,
    title: "Harry Kane",
    role: "Forward",
    ability: "4",
    weakfoot: "4",
    nationality: "England",
    price: 60000,
    rating: 89,
    quantity: 40,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/202126.png?v=23",
  },
  {
    id: 25,
    title: "Robert Lewandowsky",
    role: "Forward",
    ability: "4",
    weakfoot: "4",
    nationality: "Poland",
    price: 80000,
    rating: 91,
    quantity: 50,
    league: "Bundesliga",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/188545.png?v=23",
  },
  {
    id: 26,
    title: "Momo Salah",
    role: "Forward",
    ability: "4",
    weakfoot: "3",
    nationality: "Egyptian",
    price: 110000,
    rating: 90,
    quantity: 21,
    league: "Premier League",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/209331.png?v=23",
  },
  {
    id: 27,
    title: "Karim Benzema",
    role: "Forward",
    ability: "4",
    weakfoot: "4",
    nationality: "France",
    price: 140000,
    rating: 91,
    quantity: 40,
    league: "Liga",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/165153.png?v=23",
  },
  {
    id: 28,
    title: "Sadio Mane",
    role: "Forward",
    ability: "4",
    weakfoot: "4",
    nationality: "Senegal",
    price: 100000,
    rating: 89,
    quantity: 51,
    league: "Bundesliga",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/208722.png?v=23",
  },
  {
    id: 29,
    title: "Theo Hernandez",
    role: "Defender",
    ability: "3",
    weakfoot: "3",
    nationality: "France",
    price: 90000,
    rating: 85,
    quantity: 48,
    league: "Serie A",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/232656.png?v=23",
  },
  {
    id: 30,
    title: "Marc Andrè Ter-stegen",
    role: "Goalkeeper",
    ability: "1",
    weakfoot: "4",
    nationality: "Germany",
    price: 30000,
    rating: 88,
    quantity: 59,
    league: "Liga",
    runstyle: "none",
    image: "https://cdn.futbin.com/content/fifa23/img/players/192448.png?v=23",
  },
  {
    id: 31,
    title: "Ederson",
    role: "Goalkeeper",
    ability: "1",
    weakfoot: "4",
    nationality: "Brasil",
    price: 20000,
    rating: 89,
    quantity: 51,
    league: "Premier League",
    runstyle: "none",
    image: "https://cdn.futbin.com/content/fifa23/img/players/210257.png?v=23",
  },
  {
    id: 32,
    title: "Trent Alexander-Arnold",
    role: "Defender",
    ability: "4",
    weakfoot: "4",
    nationality: "England",
    price: 50000,
    rating: 87,
    quantity: 12,
    league: "Premier League",
    runstyle: "controlled",
    image: "https://cdn.futbin.com/content/fifa23/img/players/231281.png?v=23",
  },
  {
    id: 33,
    title: "Andrew Robertson",
    role: "Defender",
    ability: "3",
    weakfoot: "4",
    nationality: "Scotland",
    price: 40000,
    rating: 87,
    quantity: 51,
    league: "Premier League",
    runstyle: "controlled",
    image: "https://cdn.futbin.com/content/fifa23/img/players/216267.png?v=23",
  },
  {
    id: 34,
    title: "Frenkie De Jong",
    role: "Midfielder",
    ability: "4",
    weakfoot: "4",
    nationality: "Holland",
    price: 70000,
    rating: 87,
    quantity: 31,
    league: "Liga",
    runstyle: "explosive",
    image: "https://cdn.futbin.com/content/fifa23/img/players/228702.png?v=23",
  },
  {
    id: 35,
    title: "Heug-Min Son",
    role: "Forward",
    ability: "4",
    weakfoot: "5",
    nationality: "Korea del Sud",
    price: 100000,
    rating: 89,
    quantity: 41,
    league: "Premier League",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/200104.png?v=23",
  },
  {
    id: 36,
    title: "Romelu Lukaku",
    role: "Forward",
    ability: "4",
    weakfoot: "4",
    nationality: "Belgium",
    price: 30000,
    rating: 86,
    quantity: 54,
    league: "Serie A",
    runstyle: "lenghty",
    image: "https://cdn.futbin.com/content/fifa23/img/players/192505.png?v=23",
  },
];

export default players;