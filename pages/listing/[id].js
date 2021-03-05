import { connectToDatabase } from "../../util/mongodb";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/header";

export default function Listing({ property }) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header isHome={false} />
      <div className="container mx-auto pt-28  ">
        {property && (
          <div className=" flex flex-col border w-1/2 mx-auto rounded-lg ">
            <Image
              src={property.images.picture_url}
              height="300px"
              width="350px"
              className="rounded-t-lg"
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
              {property.amenities.map((amenity, index) => (
                <p
                  key={index}
                  className="rounded-lg text-xs font-extralight p-1 mx-1 my-1 bg-gray-100 "
                >
                  {amenity}
                </p>
              ))}
            </div>
            <Link href="/">
              <button  onClick={() => setLoading(true)} className="w-40 h-10 mx-auto justify-end relative my-3 border border-red-300 p-1 focus:outline-none rounded-full px-4 font-light text-red-400 hover:bg-red-400 hover:text-white">
                {loading ? (
                  <svg
                    class="animate-spin absolute -ml-1 mr-3 h-5 w-5 text-red"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  ""
                )}
                Back
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
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
