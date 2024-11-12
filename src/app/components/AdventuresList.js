import React from "react";
import ContainerCard from "../components/Card";

export default function AdventuresList({ allAdventures }) {
  return (
    <div >
      <h1 className='text-3xl font-bold m-8 text-black-500'> My Adventures</h1>
      <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
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
