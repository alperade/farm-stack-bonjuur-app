conn = Mongo();
db = conn.getDB("bonjuur-db");

db.waitlistemails.insertMany([
  {
    email: "jack@test.com",
    address: "100 W End Ave",
    created_on: "2022-11-11T00:00:00.000Z",
  },
  {
    email: "nick@test.com",
    address: "100 W 56th St",
    created_on: "2022-11-15T00:00:00.000Z",
  },
]);
