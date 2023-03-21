// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dentixt");

  if (req.method === "POST") {
    try {
      // Process a POST request
      // post customer reservations detail
      let myPost = await db.collection("reservations").insertOne(req.body);
      // get id back
      res.send(myPost.insertedId.toString());
    } catch (e) {
      console.log(e);
    }
  } else {
    // Handle get method
    let o_id = new ObjectId(req.query.id);
    let data = await db.collection("reservations").findOne({ _id: o_id });
    res.send({ status: "ok", data });
  }
}
