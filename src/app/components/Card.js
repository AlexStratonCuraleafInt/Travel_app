'use client'
import * as React from "react";
import { shortenList } from "../utils/shortenedList";
import { useState, useEffect } from 'react'

function DisplayPorts ( { portsNames }) {

  const [ ports , setPorts ] = useState( portsNames );
  const [ dropdownState, setDropdownState ] = useState( false );
  const [ shortenedPorts , setShortenedPorts ] = useState([]);

  useEffect( ( ) => {
      let portsShortenedVal = shortenList( ports );
      setShortenedPorts( portsShortenedVal );
  }, [ ] );

  return (
    <div className="relative flex flex-col">
        <div className="flex flex-wrap">
            {shortenedPorts.map( ( port , index ) =>
                <span key={ index }> {port} { index < shortenedPorts.length - 1 && ', ' } </span>
            )}

        { dropdownState &&
                <div className="m-2">
                      { ports.map( ( port , index ) =>
                          <p key={ index }> {port} { index < ports.length - 1 && ', ' } </p>
                      )}
                </div>
        }
  </div>

        <button className="cursor-pointer m-4 hover:bg-blue-200 text-black
  px-4 py-2 rounded-lg transition-colors
  duration-200" onClick={ () => setDropdownState( prev => !prev )}>
     { !dropdownState  ? '<view all>' : '<hide>'  }
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
     <div className={`${!isAdventure ? 'min-h-[550px]' : ''}  m-8 rounded-lg bg-white transition-all
     duration-300 hover:scale-[1.02] shadow-xl hover:shadow-xl border border-black`}
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
      <h2 className="p-4 font-bold text-blue-900">{adventureName}</h2>
    ) : (
      <>
  {cruiseName && <p className="font-bold text-xl m-2 text-blue-900">{nights} Night {cruiseName} Cruise</p>}

  {shipName && <p className="m-2 text-yellow-800 font-bold">{shipName}</p>}

  {sailDate && (
    <p className="m-2 text-green-700 font-bold">
      {new Date(sailDate).toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}
    </p>
  )}

  {startPort && (
    <p className="font-bold m-2 text-pink-800">From {startPort}</p>
  )}

  {price && (
    <p className="m-2 ">Total price: <span className="font-bold text-indigo-800">${price}</span></p>
  )}

  {portNames.length > 0 && (
    <div className="m-2 flex flex-wrap text-indigo-800">
    <span className="mr-2">
      Stops: </span>
      <DisplayPorts portsNames={ portNames }/>
    </div>
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
