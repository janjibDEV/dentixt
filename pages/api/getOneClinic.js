import clientPromise from "@/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dentixt");

  // Handle get method
  let o_id = new ObjectId(req.query.id);
  let data = await db.collection("clinics").findOne({ _id: o_id });
  res.send({ status: "ok", data });
}
