import L, { tooltip } from "leaflet";
import bank from "./bank.jpg";

const LeafIcon = L.Icon.extend({
  option: {
    iconSize: [100, 100],
    iconAnchor: [50, 0],
    tooltipAnchor: [0, 0],
  },
});

export const bankIcon = new LeafIcon({ iconUrl: bank });
