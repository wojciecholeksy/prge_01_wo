// import React, { useEffect, useState } from "react";
// import {
//   LayersControl,
//   MapContainer,
//   TileLayer,
//   WMSTileLayer,
// } from "react-leaflet";
// import "./Map.css";
// import "leaflet/dist/leaflet.css";
// import axios from "axios";
// import { GeoJSON } from "react-leaflet";
// import { wojewodztwa_json } from "./dane";

// function Map() {
//   const [wojewodztwa, setwojewodztwa] = useState(null);

//   const makePopup = (feature, layer) => {
//     if (feature.properties && feature.properties.jpt_nazwa_) {
//       console.log(feature.properties);
//       layer.bindPopup(`
//         <div>
//           <h1>Dane wojewodztwa</h1>
//           <strong>Nazwa: </strong> ${feature.properties.jpt_nazwa_}</br>
//           <strong>Powierzchnia: </strong> ${feature.properties.jpt_nazwa_}</br>
//           <img src="${feature.properties.img_source}" alt="Lamp" width="32" height="32"/>
//         </div>
//       `);
//     }
//   };

//   console.log(wojewodztwa_json);

//   useEffect(() => {
//     const getData = () => {
//       axios
//         .get(
//           "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db_4326&maxFeatures=50&outputFormat=application%2Fjson"
//         )
//         .then((dane) => {
//           console.log(dane);
//           setwojewodztwa(dane.data);
//         });
//     };
//     getData();
//   }, []);

//   return (
//     <div className="map">
//       <MapContainer center={[52.2322222, 21.0]} zoom={10}>
//         <LayersControl>
//           <LayersControl.BaseLayer checked name="OSM">
//             <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="Google">
//             <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="Google Satelite">
//             <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="Granice województw DB">
//             <WMSTileLayer
//               layers="granice_wojewodztw"
//               url="http://127.0.0.1:8080/geoserver/prge/wms"
//             />
//           </LayersControl.BaseLayer>
//           <LayersControl.Overlay checked name="Granice województw DB WFS">
//             {wojewodztwa ? (
//               <GeoJSON data={wojewodztwa} onEachFeature={makePopup} />
//             ) : (
//               ""
//             )}
//           </LayersControl.Overlay>
//         </LayersControl>
//       </MapContainer>
//     </div>
//   );
// }

// export default Map;

import React, { useEffect, useState } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { GeoJSON } from "react-leaflet";
import { wojewodztwa_json } from "./dane";

function Map() {
  const [wojewodztwa, setwojewodztwa] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      // console.log(feature.properties);
      layer.bindPopup(`
        <hi>Dane wojewodztwa</h1>
        <strong>Nazwa: </strong> ${feature.properties.jpt_nazwa_}</br>
        <strong>Powierzchnia: </strong> ${feature.properties.jpt_powier}
        <img src=${feature.properties.img_source} alt="Lamp" width="32" height="32"`);
    }
  };

  console.log(wojewodztwa_json);

  useEffect(() => {
    // console.log("aa");
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db_4326&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setwojewodztwa(dane.data);
        });
    };
    getData();
  }, []);

  return (
    <div className="map">
      <MapContainer center={[52.2322222, 21.0]} zoom={10}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Granice województw DB">
            <WMSTileLayer
              layers="granice_wojewodztw"
              url="http://127.0.0.1:8080/geoserver/prge/wms"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Granice województw DB WFS">
            {wojewodztwa ? (
              <GeoJSON data={wojewodztwa} onEachFeature={makePopup} />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;

//   return (
//     <div>
//       <MapContainer center={[52.232222, 21.0]} zoom={6}>
//         <LayersControl>
//           <LayersControl.Overlay name="granice_wojewodztwa_db_wfs">
//             {wojewodztwa ? <GeoJSON data={wojewodztwa} /> : ""}
//           </LayersControl.Overlay>
//           <LayersControl.BaseLayer checked name="OSM">
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="GoogleSatelite">
//             <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="OpenTopoMap">
//             <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="granice wojewodztw db">
//             <WMSTileLayer
//               layers="granice_wojewodztw_db"
//               url="http://127.0.0.1:8080/geoserver/prge/wms"
//             />
//           </LayersControl.BaseLayer>
//         </LayersControl>
//       </MapContainer>
//     </div>
//   );
// }

//   return (
//     <div>
//       <MapContainer center={[52.232222, 21.0]} zoom={6}>
//         <LayersControl>
//           <LayersControl.BaseLayer checked name="OSM">
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="GoogleSatelite">
//             <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="OpenTopoMap">
//             <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
//           </LayersControl.BaseLayer>
//           <LayersControl.Overlay checked name="granice_wojewodztwa_db_wfs">
//             {wojewodztwa ? <GeoJSON data={wojewodztwa} /> : ""}
//           </LayersControl.Overlay>
//           <LayersControl.Overlay checked name="granice wojewodztw db">
//             <WMSTileLayer
//               layers="granice_wojewodztw_db"
//               url="http://127.0.0.1:8080/geoserver/prge/wms"
//             />
//           </LayersControl.Overlay>
//         </LayersControl>
//       </MapContainer>
//     </div>
//   );
// }
