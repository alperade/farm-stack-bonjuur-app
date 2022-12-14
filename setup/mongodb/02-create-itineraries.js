conn = Mongo();
db = conn.getDB("fomore-db");

db.itineraries.insertMany([
  {
    _id: ObjectId("12343a8014829a865bbf700d"),
    name: "Fun trip",
    start_date: "2022-11-18T00:00:00.000Z",
    end_date: "2022-11-18T00:00:00.000Z",
    location: "new york",
    account_id: "637d311042e7b5cab655ce80",
  },
  {
    _id: ObjectId("21423a8014829a865bbf700e"),
    name: "Interview",
    start_date: "2022-11-18T00:00:00.000Z",
    end_date: "2022-11-18T00:00:00.000Z",
    location: "Seattle",
    account_id: "637d311042e7b5cab655ce80",
  },
  {
    _id: ObjectId("89123a8014829a865bbf700f"),
    name: "Getting Married",
    start_date: "2022-11-18T00:00:00.000Z",
    end_date: "2022-11-18T00:00:00.000Z",
    location: "Las Vegas",
    account_id: "637d311042e7b5cab655ce80",
  },
]);
