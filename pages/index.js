import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/header";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ properties }) {
  return (
    <>
    <Header/>
    <div className="container mx-auto pt-24">
     

      <main>
        <div className="flex flex-row flex-wrap">
          {properties.map((property) => (
            <div key={property._id} className="flex flex-col  flex-auto  w-1/4 rounded overflow-hidden m-1 border  ">
              <Image src={property.image} height="300px" width="350px"></Image>
              <h3 className="text-center text-md text-bold  text-bold m-2">
                {property.name}
              </h3>
              <p className="text-center">{property.price}</p>
              <div className="flex flex-row justify-start ">
                <p className="text-sm p-4 ">{property.address.country}</p>
                <p className="text-sm p-4">{property.address.country_code}</p>
              </div>
              <p className="text-sm px-6">{property.summary}</p>
              <Link href={`/listing/${encodeURIComponent(property._id)}`} >
                <button className=" w-40 mx-auto justify-end my-3 bg-blue-500 p-1 rounded-md px-4 text-white">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const {  db } = await connectToDatabase();



  const data = await db
    .collection("listingsAndReviews")
    .find()
    .limit(12)

    .toArray();

  const properties = data.map((property) => {
    const price = JSON.parse(JSON.stringify(property.price));
    console.log(property.acommodates);
    return {
      _id: property._id,
      name: property.name,
      image: property.images.picture_url,
      address: property.address,
      guests: property.accommodates,
      summary: property.summary,
      price: price.$numberDecimal,
    };
  });

  return {
    props: { properties },
  };
}
