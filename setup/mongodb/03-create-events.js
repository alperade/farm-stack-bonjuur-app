conn = Mongo();
db = conn.getDB("fomore-db");

db.events.insertMany([
  {
    name: "taylor swift concert $28000",
    date: "2022-11-18T00:00:00.000Z",
    location: "string",
    category: "event",
    venue: "string",
    description: "too expensive",
    rating: "N/A",
    address: "N/A",
    itinerary_id: "63755aa26282cfade5af40f9",
    image_url:
      "https://media.npr.org/assets/img/2022/11/21/gettyimages-484816706-8838823b36e61ecf9459debab7c14d769ab83205-s800-c85.webp",
  },
  {
    name: "M- Sushi",
    date: "2022-11-18T00:00:00.000Z",
    location: "Durham",
    category: "resturant",
    venue: "N/A",
    rating: "N/A",
    address: "N/A",
    description: "good sushi",
    itinerary_id: "63755aa26282cfade5af40f9",
    image_url:
      "https://lh3.googleusercontent.com/p/AF1QipNZNbBLdBDkYD9m3oSNwAgUPA5u7AslIUZgmXA1=s680-w680-h510",
  },
  {
    name: "Capitol Grille",
    date: "2022-11-18T00:00:00.000Z",
    location: "string",
    category: "resturant",
    venue: "N/A",
    rating: "N/A",
    address: "N/A",
    description: "too expensive",
    itinerary_id: "63755aa26282cfade5af40f9",
    image_url:
      "https://lh3.googleusercontent.com/p/AF1QipM7vhTZW5oArBXwNkvM5qGO0_AToOi4uKbsAWx4=s680-w680-h510",
  },
  {
    name: "statue of liberty",
    date: "2022-11-18T00:00:00.000Z",
    location: "new york",
    category: "attraction",
    venue: "string",
    rating: "N/A",
    address: "N/A",
    description: "very big statue",
    itinerary_id: "63755aa26282cfade5af40f9",
    image_url:
      "https://lh3.googleusercontent.com/p/AF1QipPqc7_WalohF_8TeKnqf6ewdNgdtt2a7jLq8jo=s680-w680-h510",
  },
]);
