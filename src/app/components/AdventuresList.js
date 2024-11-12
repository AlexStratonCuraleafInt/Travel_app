import React from "react";
import ContainerCard from "../components/Card";

export default function AdventuresList({ allAdventures }) {
  return (
    <div >
      <h1 className='text-3xl font-bold m-8 text-black-500'> My Adventures</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7  w-full p-4">
        {allAdventures.map((adventure, index) => (
          <div key={index} >
              <ContainerCard
                adventureImage={adventure.image}
                adventureName={adventure.name}
                isAdventure={true}
              />
            </div>
        ))}
      </div>
    </div>
  );
}
