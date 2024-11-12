import React from "react"
import ContainerCard from "../components/Card"

export default function CruisesList({ allCruises }) {
  return (
    <div>
      <h1 className='text-3xl font-bold m-8 text-black-500 flex flex-row'>Popular Cruises</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full items-stretch p-4">
        {allCruises.map((cruise, index) => (
          <div className="">
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
          </div>
        ))}
      </div>
    </div>
  );
}
