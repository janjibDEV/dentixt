import clientPromise from "@/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dentixt");

  try {
    let result = [];
    if (req.method == "GET") {
      // find clinic based on zipcode
      const cursor = db
        .collection("clinics")
        .find({ zip: req.query.zip })
        .sort({ price: 1 });
      await cursor.forEach((item) => result.push(item));
      res.status(200).send({ status: "ok", data: result });
    } else {
      // Process a POST request
      // post clinic detail
      let myPost = await db.collection("clinics").insertOne(req.body);
      // get id back
      res.send(myPost.insertedId.toString());
    }
  } catch (e) {
    res.status(400).send({ status: "failed", msg: e });
  }
}
