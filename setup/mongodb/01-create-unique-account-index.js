conn = Mongo();
db = conn.getDB("fomore-db");

db.accounts.insertOne({
  _id: ObjectId("633184f42ec069ab607b0b5b"),
  email: "admin@gmail.com",
  password: "$2b$12$n.6H7Ae1Rc4zRohLAA4NtOGJmVX/UuRcjTwixigQ65dWyUUvuV1pa",
  full_name: "Generic Name",
});
db.accounts.insertOne({
  _id: ObjectId("633185412ec069ab607b0b5c"),
  email: "cara@fomore.com",
  password: "$2b$12$n.6H7Ae1Rc4zRohLAA4NtOGJmVX/UuRcjTwixigQ65dWyUUvuV1pa",
  full_name: "Cara",
});
db.accounts.insertOne({
  _id: ObjectId("637d2d4fdfb3e725298257cf"),
  email: "alper@fomore.com",
  password: "$2b$12$n.6H7Ae1Rc4zRohLAA4NtOGJmVX/UuRcjTwixigQ65dWyUUvuV1pa",
  full_name: "alper",
});
db.accounts.insertOne({
  _id: ObjectId("637d2d61d1fdb41e34fe890e"),
  email: "connor@fomore.com",
  password: "$2b$12$n.6H7Ae1Rc4zRohLAA4NtOGJmVX/UuRcjTwixigQ65dWyUUvuV1pa",
  full_name: "connor",
});
db.accounts.insertOne({
  _id: ObjectId("637d2d679b109c6d9399d8fc"),
  email: "patrick@fomore.com",
  password: "$2b$12$n.6H7Ae1Rc4zRohLAA4NtOGJmVX/UuRcjTwixigQ65dWyUUvuV1pa",
  full_name: "patrick",
});
db.accounts.insertOne({
  _id: ObjectId("637d2d6b26eb9f00db8cf99d"),
  email: "bryan@fomore.com",
  password: "$2b$12$n.6H7Ae1Rc4zRohLAA4NtOGJmVX/UuRcjTwixigQ65dWyUUvuV1pa",
  full_name: "bryan",
});
db.accounts.createIndex({ email: 1 }, { unique: true });
