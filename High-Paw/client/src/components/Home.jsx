import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
// import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

import { useEffect, useContext, useState } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const icon = L.icon({
  // home icon
  iconSize: [71, 41],

  iconAnchor: [10, 41],
  // popupAnchor: [2, -40],
  //HOME ICON
  iconUrl:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1nio6F_1gDPgs8F1dDJEaAHaER%26pid%3DApi&f=1&ipt=50e0067ffb106784e4031bd8f5f9cbabca036596922acece27d0d8f90990934b&ipo=images",
  // shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

function Home() {
  const [hangouts, setHangouts] = useState([]);
  // importing env variables(need no installation of dotenv package for this to work, just need to add .env file in root directory, because of VITE_ prefix)
  // const API_KEY = import.meta.env.VITE_MAPBOX_API;
  // console.log(import.meta.env.VITE_MAPBOX_API);

  const { user } = useContext(UserContext);

  // if user is null, redirect to login page
  if (!user) {
    window.location.href = "/mainpage";
  }

  useEffect(() => {
    const getHangouts = async () => {
      const response = await fetch(
        "https://high-paw-production.up.railway.app/hangout/all",
        {
          // allows you to be authorized to see the hangouts
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      const data = await response.json();
      setHangouts(data.hangouts);
      // console.log(data);
    };
    getHangouts();
  }, []);

  return (
    <div className="containerMap w-screen md:flex-1 z-0  m-auto mt-14   md:pt-0">
      {/* if user exists show map, otherwise no map*/}
      {user.user && (
        <MapContainer
          center={user.user.latLong}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: "80vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={user.user.latLong} icon={icon}></Marker>
          {/* map over all hangouts and pin marker position for each hangout */}
          {hangouts.map((hangout) => (
            <div key={hangout._id} className="bg-slate-500">
              <Marker position={hangout.latLong}>
                <Popup>
                  <h2 className="title">{hangout.title}</h2>
                  <p className="description">
                    {hangout.description.slice(0, 100)}...
                  </p>
                  {/* send you to the specific hangout of a certain user */}
                  <Link to={`/hangout/${hangout._id}`}>See more details</Link>
                </Popup>
              </Marker>
            </div>
          ))}
        </MapContainer>
      )}
    </div>
  );
}

export default Home;
