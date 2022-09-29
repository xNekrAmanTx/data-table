export const tableRows = [
  {
    date: new Date(),
    name: "Adam",
    quantity: 43,
    distance: 126,
  },
  {
    date: new Date(Date.now() - 24 * 60 * 60 * 1000),
    name: "Jerom",
    quantity: 16,
    distance: 1102,
  },
  {
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    name: "Shelly",
    quantity: 58,
    distance: 250,
  },
  {
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    name: "Leo",
    quantity: 77,
    distance: 330,
  },
  {
    date: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000),
    name: "Tyler",
    quantity: 12,
    distance: 110,
  },
];

export const tableCaptions = [
  { name: "Date", ref: "date" },
  { name: "Title", ref: "title" },
  { name: "Quantity", ref: "quantity" },
  { name: "Distance", ref: "distance" },
];

export const orderKinds = {
  NONE: "none",
  ASCENDING: "asc",
  DESCENDING: "desc"
}

export const baseUrl = "http://localhost:3001/api/v1/items?size=2"
