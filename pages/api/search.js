import { connectToDatabase } from "../../util/mongodb";

export default async function handleSearch(req, res) {
 
  const { db } = await connectToDatabase();
  const country = req.query.country;


  const data = await db
    .collection("listingsAndReviews")
    .aggregate([
      {
        $search: {
          search: {
            query: country,
            path: [ "address.country",'address.government_area',"summary"],
          },
        },
      },
      { $limit: 20 },
      {
        $project: {
            name: 1,
            images: 1,
            address: 1,
            price: 1,
            amenities: 1,
            summary: 1,
          
        },
      },
    ])
    .toArray();

  res.json(data);
}
