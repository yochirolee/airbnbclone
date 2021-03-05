import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header/header";
import HeaderLinkItemButton from "../components/Header/headerLinkItemButton";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ properties }) {
  return (
    <>
      <Header isHome={true} />
      <div className="container mx-auto pt-56">
        <main>
          <div className="flex flex-row flex-wrap">
            {properties.map((property) => (
              <div
                key={property._id}
                className="flex flex-col  flex-auto  w-1/4 rounded overflow-hidden m-1 border  "
              >
                <Image
                  src={property.image}
                  height="300px"
                  width="350px"
                ></Image>
                <div className="flex flex-row align-middle mx-auto mt-4 font-bold">
                  <h3 className="text-center text-md text-bold  text-bold ">
                    {property.name}
                  </h3>
                  <p className="text-center ml-4">$ {property.price}</p>
                </div>

                <div className="flex flex-row font-bold  mx-auto my-4 ">
                  <p className="text-sm pl-4 ">{property.address.country},</p>
                  <p className="text-sm ml-2">
                    {property.address.country_code}
                  </p>
                </div>
                <p className="text-sm px-6 ">{property.summary}</p>
                <HeaderLinkItemButton id={property._id} />
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
  const { db } = await connectToDatabase();
  let loading = true;
  const data = await db
    .collection("listingsAndReviews")
    .find()
    .limit(12)

    .toArray();

  const properties = data.map((property) => {
    const price = JSON.parse(JSON.stringify(property.price));
    loading = false;
    return {
      loading: loading,
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
