import React from "react";
import ContainerCard from "../components/Card";

export default function CruisesList({ allCruises }) {
  return (
    <div>
      <h1 className='text-3xl font-bold m-8 text-black-500 flex flex-row'>Popular Cruises</h1>
      <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        {allCruises.map((cruise, index) => (
            <ContainerCard key={index}
              cruiseName={cruise.name}
              nights={cruise.nights}
              sailDate={cruise.sailDate}
              price={cruise.price}
              shipName={cruise.shipName}
              startPort={cruise.startPort}
              shipImage={cruise.shipImage}
              portNames={cruise.portNames}
              isAdventure={false}
              icon={cruise.iconOverlay}
              iconBgColour={cruise.iconBackgroundColor}
            />

        ))}
      </div>
    </div>
  );
}
