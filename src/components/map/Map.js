import React from "react";
import { LayersControl, MapContainer } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "leaflet";

function Map() {
  return (
    <div>
      <MapContainer center={[52.232222, 21.0]} zoom={15}>
        <LayersControl>
          <LayersControl.BaseLayer name="OSM">
            <TileLayer url="https://{s}tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="GoogleSatelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="OpenTopoMap">
            <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map;
