import React from 'react';
import Image from 'next/image';

async function DogDetails({ params }: { params: Promise<{ id: string }> }) {
  // Fetch detailed information about the dog using the ID from the params

  const {id} = await params;
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
  const dog = await response.json();

  const titleCase = (text: string) =>
    text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="flex flex-col justify-center items-center bg-blue-400 md:flex-row h-screen ">

      <Image src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={dog.name} width={300} height={300} className='m-10 md:w-[350px] md:h-[350px] rounded-3xl' ></Image>

      <div className="flex flex-col md:items-start items-center mt-8">

      <h1 className='text-2xl m-3 font-bold md:text-3xl '>{titleCase(dog.name)}</h1>

      <ul className='text-[16px] m-5 pb-10 text-center md:text-left '>

        <li><strong>Weight:</strong> {dog.weight.imperial} lbs ({dog.weight.metric} kg)</li>
        <li><strong>Height:</strong> {dog.height.imperial} inches ({dog.height.metric} cm)</li>
        <li><strong>Bred For:</strong> {dog.bred_for}</li>
        <li><strong>Life Span:</strong> {dog.life_span}</li>
        <li><strong>Temperament:</strong> {dog.temperament}</li>
      </ul>
      </div>
    </div>
  );
}

export default DogDetails;
