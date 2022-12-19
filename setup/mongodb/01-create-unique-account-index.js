conn = Mongo();
db = conn.getDB("bonjuur-db");

db.accounts.insertOne({
  _id: ObjectId("633184f42ec069ab607b0b5b"),
  email: "admin@gmail.com",
  password: "$2b$12$n.6H7Ae1Rc4zRohLAA4NtOGJmVX/UuRcjTwixigQ65dWyUUvuV1pa",
  full_name: "Generic Name",
});
db.accounts.insertOne({
  _id: ObjectId("637d2d4fdfb3e725298257cf"),
  email: "alper@bonjuur.com",
  password: "$2b$12$n.6H7Ae1Rc4zRohLAA4NtOGJmVX/UuRcjTwixigQ65dWyUUvuV1pa",
  full_name: "alper",
});
db.accounts.createIndex({ email: 1 }, { unique: true });
