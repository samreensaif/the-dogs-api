"use client";

import React, { useState, useEffect } from "react";
import { getApi } from "@/services/getApi";
import Link from "next/link";
import Image from "next/image";

function Frontscreen() {
  
  
  
  interface Dog {
    id: number;
    name: string;
    imageUrl: string;
  }



  const [dogsData, setDogsData] = useState<Dog[]>([]); 

  useEffect(() => {
    async function fetchData() {
      
     const data = await getApi();
      const dogs = data.slice(0, 6); 

      
      const dogsWithImages = await Promise.all(
        dogs.map(async (dog: { id: number; reference_image_id: string; name: string }) => {
          const imageResponse = await fetch(
            `https://api.thedogapi.com/v1/images/${dog.reference_image_id}`
          );
          const imageData = await imageResponse.json();

          return {
            id: dog.id,
            name: dog.name,
            imageUrl: imageData.url, 
          };
        })
      );

      setDogsData(dogsWithImages); 
    }

    fetchData(); 
  }, []);

  const titleCase = (text: string) =>
    text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className=" bg-blue-300 h-full w-screen">

      <h1 className="
      text-2xl sm:font-3xl 
      font-bold 
      p-20 
      text-center">Dog Breeds</h1>

      <div className=" 
     ml-20
      grid 
      grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-4 
      pb-10  
      ">

        {dogsData.map((dog) => (

          <div key={dog.id} style={{ marginBottom: "20px" }} >


           
            
            <Link href={`/frontscreen/${dog.id}`}>
              
                <h3 className="sm:text-xl font-semibold mb-5 text-[15px]">{titleCase(dog.name)}</h3>
                {dog.imageUrl && (
                  <Image
                    src={dog.imageUrl}
                    alt={dog.name}
                    width={300}
                    height={300}
                    style={{
                      borderRadius: "8px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                    }}
                    className="hover:scale-105 transition-transform duration-700 ease-in-out w-3/4 h-3/4 object-cover"
                  />
                )}
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frontscreen;
