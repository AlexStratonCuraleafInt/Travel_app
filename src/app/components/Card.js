'use client'
import * as React from "react";
import { shortenList } from "../utils/shortenedList";
import { useState } from 'react'

function DisplayPorts ( { portsNames }) {

  // 2 lists
      // shortened - ( 0 - 2 )
      // ( 3 - last item )
  const [ ports , setPorts ] = useState( portsNames );
  const [ dropdownState, setDropdownState ] = useState( false );
  const [ shortenedPorts , setShortenedPorts ] = useState([]);

  React.useEffect( ( ) => {
      let portsShortenedVal = shortenList( ports );
      setShortenedPorts( portsShortenedVal );
  }, [ ] );

  console.log( ports )

  return (
    <div className="relative">

        <div>
            {shortenedPorts.map( ( port , index ) =>
                <span key={ index }> {port} { index < shortenedPorts.length - 1 && ',' } </span>
            )}
        </div>




        { dropdownState &&
          <>

                <div className="">
                      { ports.map( ( port , index ) =>
                          <p key={ index }> {port} { index < ports.length - 1 && ',' } </p>
                      )}
                </div>
          </>

        }

        <button className="bg-blue-400 hover:bg-blue-700 text-white
  px-4 py-2 rounded-lg transition-colors
  duration-200" onClick={ () => setDropdownState( prev => !prev )}>
     { !dropdownState  ? '... view all' : 'hide'  }
  </button>

    </div>
  )
}

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
     <div className="overflow-y-auto m-8 rounded-lg bg-white transition-all
     duration-300 hover:scale-[1.02] shadow-xl hover:shadow-xl
     border border-black"
     >
        <img
          src={isAdventure ? adventureImage : shipImage}
          alt={
            isAdventure
              ? `${adventureName} adventure image`
              : `${shipName} cruise ship image`
          }
          loading='lazy'
          className='w-full h-[150px] object-fit'
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
    <span className="m-2">
      Stops: <DisplayPorts portsNames={ portNames }/>
    </span>
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
