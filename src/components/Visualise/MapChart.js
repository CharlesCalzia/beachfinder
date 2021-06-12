import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [

 
  { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] },
  { markerOffset: -15, name: "Mumbai", coordinates: [ 72.8777,19.0760] }

];

const MapChart = () => {
  return (
    <ComposableMap
    //   projection="geoAzimuthalEqualArea"
      projectionConfig={{
        // rotate: [58, 20, 0],
        scale: 150
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
