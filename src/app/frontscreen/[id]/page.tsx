import React from 'react';
import Image from 'next/image';

async function DogDetails({ params }: { params: Promise<{ id: string }> }) {
  // Fetch detailed information about the dog using the ID from the params

  const {id} = await params;
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
  const dog = await response.json();

  return (
    <div className="flex justify-center items-center bg-blue-400 h-screen">

      <Image src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={dog.name} width={400} height={400} className='mt-10' ></Image>

      <div className="flex flex-col items-start">
      <h1 className='text-3xl m-3 font-bold'>{dog.name}</h1>
      <ul className='text-lg m-3 '>
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
