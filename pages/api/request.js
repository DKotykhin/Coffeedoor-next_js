import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
    let { db } = await connectToDatabase();

    const coffeelist = await db.collection("coffeelist").find().toArray();

    res.status(200).json({ coffeelist });
}