import { connectToDatabase } from "../../util/mongodb";
import Image from "next/image";
import Link from "next/link";
export default function Listing({ property }) {
  return (
    <div className="container mx-auto mt-6  ">
      {property && (
        <div className=" flex flex-col border w-1/2 mx-auto ">
          <Image
            src={property.images.picture_url}
            height="300px"
            width="350px"
          ></Image>
          <div className="p-4">
            <p className="font-bold my-2">{property.name}</p>
            {property.address.price}
            <div className="flex font-semibold text-sm mb-2">
              <p>{property.address.country},</p>
              <p className="ml-2">{property.address.country_code}</p>
            </div>
            <div className="text-sm">
              <p>{property.summary}</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            {property.amenities.map((amenity) => (
              <p className="rounded-lg text-xs text-gray-600 p-1 mx-1 my-1 bg-gray-100">
                {amenity}
              </p>
            ))}
          </div>
          <Link href="/">
            <button className=" w-40 mx-auto justify-end my-3 bg-blue-500 p-1 rounded-md px-4 text-white">
              Back
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();

  const data = await db.collection("listingsAndReviews").findOne(
    {
      _id: params.id,
    },
    {
      projection: {
        name: 1,
        images: 1,
        address: 1,
        price: 1,
        amenities: 1,
        summary: 1,
      },
    }
  );
  return {
    props: {
      property: JSON.parse(JSON.stringify(data)),
      revalidate: 1,
    },
  };
}
