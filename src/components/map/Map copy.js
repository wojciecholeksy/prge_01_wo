import React, { useEffect, useState } from "react";
import "./map.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function Map() {
  const [wojewodztwa, setwojewodztwa] = useState(null);

  useEffect(() => {
    console.log("aaa");
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw&maxFeatures=50&outputFormat=application%2Fjson"
          //"https://jsonplaceholder.typicode.com/posts/1"
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
          <LayersControl.BaseLayer checked name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Granice województw DB">
            <WMSTileLayer
              layers="granice_wojewodztw"
              url="http://127.0.0.1:8080/geoserver/prge/wms"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Granice województw DB WFS">
            {wojewodztwa ? <GeoJSON data={wojewodztwa} /> : ""}
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
