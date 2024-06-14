import React, { useState } from "react";
import { Circle, Marker, Popup, useMapEvent } from "react-leaflet";
// import { BankIcon } from "./Icon";
import { bankIcon } from "./Icon";

function MarkerPlacement() {
  const [Position, setPosition] = useState([52.23, 21.0]);
  const [Mass, setMass] = useState(10000);

  const map = useMapEvent({
    click: (e) => {
      console.log(e.latlng);
      setPosition(e.latlng);
    },
  });

  const promien1 = (Mass) => {
    console.log(Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89);
  };
  const promien2 = (Mass) => {
    console.log(Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(Mass, 1 / 3) / Math.pow(30 / 980, 1 / 1.89);
  };
  const promien3 = (Mass) => {
    console.log(Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(Mass, 1 / 3) / Math.pow(15 / 980, 1 / 1.89);
  };

  return (
    <div>
      <Marker icon={bankIcon} position={Position}>
        <Popup>
          Podaj masę ładunku wybuchowego w kg
          <input
            type="range"
            min="0"
            max="750000000"
            defaultValue="0"
            onChange={(e) => {
              setMass(e.target.value);
            }}
          ></input>
          {Mass}
        </Popup>
      </Marker>
      <Circle
        center={Position}
        radius={promien3(Mass)}
        pathOptions={{ color: "yellow" }}
      ></Circle>
      <Circle
        center={Position}
        radius={promien2(Mass)}
        pathOptions={{ color: "orange" }}
      ></Circle>
      <Circle
        center={Position}
        radius={promien1(Mass)}
        pathOptions={{ color: "red" }}
      ></Circle>
    </div>
  );
}

export default MarkerPlacement;

// import React, { useState } from "react";
// import { Circle, Marker, Popup, useMapEvent } from "react-leaflet";
// import { BankIcon } from "./Icon";

// function MarkerPlacement() {
//   const [Position, setPosition] = useState([52.2322222, 21.0]);
//   const [Mass, setMass] = useState(10000);

//   const map = useMapEvent({
//     click: (e) => {
//       console.log(e.latlng);
//       setPosition(e.latlng);
//     },
//   });

//   const promien_1 = (Mass) => {
//     console.log(Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
//     return Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89);
//   };
//   const promien_2 = (Mass) => {
//     console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
//     return Math.pow(mass, 1 / 3) / Math.pow(30 / 980, 1 / 1.89);
//   };
//   const promien_3 = (mass) => {
//     console.log(Math.pow(mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
//     return Math.pow(mass, 1 / 3) / Math.pow(0.14 / 980, 1 / 1.89);
//   };

//   return (
//     <div>
//       <Marker icon={BankIcon} position={Position}>
//         <Popup>
//           Podaj masę ładunku wybuchowego w kg
//           <input
//             type="range"
//             min="0"
//             max="1000"
//             defaultValue="0"
//             onChange={(e) => {
//               setMass(e.target.value);
//             }}
//           ></input>
//           {mass}
//         </Popup>
//       </Marker>
//       <Circle
//         center={Position}
//         radius={promien_3(mass)}
//         pathOptions={{ color: "yellow" }}
//       ></Circle>
//       <Circle
//         center={Position}
//         radius={promien_2(mass)}
//         pathOptions={{ color: "orange" }}
//       ></Circle>
//       <Circle
//         center={Position}
//         radius={promien_1(mass)}
//         pathOptions={{ color: "red" }}
//       ></Circle>
//     </div>
//   );
// }

// export default MarkerPlacement;
