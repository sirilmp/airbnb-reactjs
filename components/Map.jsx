import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { LocationMarkerIcon } from "@heroicons/react/outline";

function Map({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const centers = getCenter(coordinates);

  // console.log(centers);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: centers.latitude,
    longitude: centers.longitude,
    zoom: 10,
  });

  const token = process.env.ACCESS_TOKEN;
  //   console.log(typeof(a));

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sirilmp/ckszbuhjx23ax18p4pxar83ev"
      mapboxApiAccessToken={token}
      {...viewport}
      onViewportChange={(nextViewport) => {
        setViewport(nextViewport);
      }}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationMarkerIcon
              role="img"
              aria-label="push-popup"
              onClick={() => setSelectedLocation(result)}
              className="main-text-color h-7 cursor-pointer animate-bounce hover:h-8"
            />
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
