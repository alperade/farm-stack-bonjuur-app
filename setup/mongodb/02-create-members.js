conn = Mongo();
db = conn.getDB("bonjuur-db");

db.members.insertMany([
  {
    membership: "Just Keep",
    bedrooms: 2,
    bathrooms: 2,
    pets: 0,
    humans: 2,
    email: "alper@bonjuur.com",
    phone: "123-456-7890",
    address: "200 W End Ave",
    apt: "5K",
    start_date: "2022-11-18T00:00:00.000Z",
    time_slot: "Morning",
    cleaner: "Pema",
    is_active: true
  },
  {
    membership: "Keep+",
    bedrooms: 3,
    bathrooms: 2,
    pets: 1,
    humans: 2,
    email: "omer@bonjuur.com",
    phone: "123-456-7890",
    address: "606W57",
    apt: "5K",
    start_date: "2022-11-25T00:00:00.000Z",
    time_slot: "Afternoon",
    cleaner: "Pema",
    is_active: true
  },
]);
