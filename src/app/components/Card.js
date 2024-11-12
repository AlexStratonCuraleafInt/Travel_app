import * as React from "react";

export default function ContainerCard({
  adventureImage,
  adventureName,
  cruiseName,
  nights,
  sailDate,
  price,
  shipName,
  shipImage,
  startPort,
  portNames = [],
  isAdventure,
  icon,
  iconBgColour
}) {
  return (
    <section >
     <div className=" overflow-y-auto m-8 rounded-lg bg-white transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-xl border border-black">
        <img
          src={isAdventure ? adventureImage : shipImage}
          alt={
            isAdventure
              ? `${adventureName} adventure image`
              : `${shipName} cruise ship image`
          }
          loading='lazy'
          className='w-full h-auto object-fit'
        />
{isAdventure ? (
      <h2 className="p-4 font-bold">{adventureName}</h2>
    ) : (
      <>
  {cruiseName && <p className="font-bold text-xl m-2">{nights} Night {cruiseName} Cruise</p>}

  {shipName && <p className="m-2">{shipName}</p>}

  {sailDate && (
    <p className="m-2">
      {new Date(sailDate).toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}
    </p>
  )}

  {startPort && (
    <p className="font-bold m-2">From {startPort}</p>
  )}

  {price && (
    <p className="m-2">Total price: ${price}</p>
  )}

  {portNames.length > 0 && (
    <p className="m-2">Stops: {portNames.join(", ")}</p>
  )}
{iconBgColour && (
    <img
      src={icon}
      alt={`${icon} icon`}
      className="w-8 h-8 object-contain ml-auto m-4"
      style={{ backgroundColor: iconBgColour }}
    />
  )}
</>
)
    }
      </div>
    </section>
  );
}
