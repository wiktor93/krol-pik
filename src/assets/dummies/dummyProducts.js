const dummyProducts = [
  {
    id: 1,
    productName: "Rower MTB 29 cali",
    category: "Rowery",
    subcategory: "",
    manufacturer: "Romet",
    pictureURL: "https://bit.ly/2Z3IvVJ",
    images: [
      { url: "https://bit.ly/2Z3IvVJ" },
      { url: "https://bit.ly/2X3Hiem" },
      { url: "https://bit.ly/2X0Domx" },
      { url: "https://bit.ly/3bISliE" },
    ],
    SKUCode: "345FAG13",
    price: "2450.00",
    productDetails: [
      {
        name: "Koła / Rama",
        value: '29" / alu 6061',
      },
      {
        name: "Widelec",
        value: "amortyzowany",
      },
      {
        name: "Kierownica",
        value: "Romet Comfort Bar",
      },
      {
        name: "Siodełko",
        value: "Selle Royal Freeway 50946",
      },
      {
        name: "Waga",
        value: "14,3 kg",
      },
    ],
    productOptions: [
      {
        name: "Kolor",
        value: "Biały|Czarny",
      },
      {
        name: "Rozmiar ramy",
        value: '19"|21" ',
      },
    ],
  },

  {
    id: 2,
    productName: "Siodełko rowerowe Shiver HC Flow",
    category: "Części rowerowe",
    subcategory: "Siodełka",
    manufacturer: "SELLE ITALIA",
    pictureURL: "https://bit.ly/2XUpnYe",
    SKUCode: "34G23GSD",
    price: "149.99",
    productDetails: [
      {
        name: "Waga",
        value: "335 g",
      },
      {
        name: "Gwarancja",
        value: "2 lata",
      },
    ],
    productOptions: [],
  },

  {
    id: 3,
    productName: "Łańcuch rowerowy HG53 9-biegowy TIAGRA / DEORE",
    category: "Części rowerowe",
    subcategory: "Łańcuchy",
    manufacturer: "SHIMANO",
    pictureURL: "https://bit.ly/2XmpQDg",
    SKUCode: "4245G5F",
    price: "84.99",
    productDetails: [
      {
        name: " Konstrukcja",
        value: "100.00% Stal",
      },
      {
        name: "Kompatybilność",
        value: "Kompatybilny z napędami Shimano i Sram 10 biegowymi.",
      },
      {
        name: "Gwarancja",
        value: "2 lata",
      },
    ],
    productOptions: [],
  },
  {
    id: 4,
    productName: "Bagażnik rowerowy 800 ultra lekki",
    category: "Akcesoria rowerowe",
    subcategory: "",
    manufacturer: "BTWIN",
    pictureURL: "https://bit.ly/2XQiM0G",
    SKUCode: "56H35Y2",
    price: "89.99",
    productDetails: [
      {
        name: "Materiał",
        value: "100.00% Aluminium",
      },
      {
        name: "Maks. obciążenie",
        value: "18 kg",
      },
      {
        name: "Kompatybilność",
        value:
          "Pasuje do większości rowerów 26, 28'' wyposażonych w inserty do montażu.",
      },
      {
        name: "Waga",
        value: "700 g",
      },
      {
        name: "Gwarancja",
        value: "2 lata",
      },
    ],
    productOptions: [],
  },
  {
    id: 5,
    productName: "Spodenki rowerowe TX300 męskie",
    category: "Odzież rowerowa",
    subcategory: "",
    manufacturer: "BTWIN",
    pictureURL: "https://bit.ly/3gGbUeS",
    SKUCode: "6H234G2",
    price: "49.99",
    productDetails: [
      {
        name: " Materiał główny",
        value: "80.00% Poliamid, 20.00% Elastan",
      },
      {
        name: "Wypełnienie - Materiał wewnętrzny",
        value: "100.00% Poliamid",
      },
      {
        name: "Wypełnienie - Materiał zewnętrzny",
        value: "77.00% Poliester, 23.00% Elastan",
      },
    ],
    productOptions: [
      {
        name: "Rozmiar",
        value: "S|M|L|XL|2XL",
      },
    ],
  },
]

module.exports = dummyProducts
