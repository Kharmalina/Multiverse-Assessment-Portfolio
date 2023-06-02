import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

function MyComponent({ setMarker, marker }) {
  useEffect(() => {
    const newMarker = L.marker(marker, { icon }).addTo(map);
    setMarker([marker[0], marker[1], newMarker]);
  }, []);

  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;

      // Remove any existing marker on the map
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Add a new marker to the map
      const newMarker = L.marker([lat, lng], { icon }).addTo(map);
      setMarker([lat, lng, newMarker]);
    },
  });

  return null;
}

function UpdateHangout() {
  const [hangout, setHangout] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marker, setMarker] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // if user is null, redirect to login page
  if (!user) {
    window.location.href = "/login";
  }

  useEffect(() => {
    const getHangout = async () => {
      const response = await fetch(
        `https://high-paw-production.up.railway.app/hangout/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      const data = await response.json();
      setHangout(data.hangout);
      setTitle(data.hangout.title);
      setDescription(data.hangout.description);
      setMarker(data.hangout.latLong);

      console.log(data);
    };
    getHangout();
  }, []);

  // const saveMarker = (newMarkerCoords) => {
  //   setMarker(newMarkerCoords);
  // };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedHangout = {
      title,
      description,
      latLong: marker.slice(0, 2),
      userId: user.user._id,
      joining: hangout.joining,
    };
    const response = await fetch(
      `https://high-paw-production.up.railway.app/hangout/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(updatedHangout),
      }
    );
    const data = await response.json();
    console.log(data);
    navigate(`/hangout/${id}`);
  };

  return (
    <div className="parent_div w-screen   md:flex-1  m-auto mt-14">
      <h1 className="my-8 text-2xl text-center">Update Hangout</h1>
      <form
        className="form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-4/5"
        onSubmit={handleUpdate}
      >
        <div className="title-div mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="title"
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="add your title here..."
          />
        </div>

        <div className="description-div mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name=""
            id="description"
            cols="30"
            rows="auto"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="add your description here..."
          ></textarea>
        </div>
        <div className="div-map">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Select location
          </p>
          <div className="mapContainer w-auto" style={{ marginBottom: "2em" }}>
            {marker && (
              <MapContainer
                center={marker}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: "50vh", width: "100%" }}
              >
                <TileLayer
                  onClick={() => console.log("test")}
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MyComponent setMarker={setMarker} marker={marker} />
              </MapContainer>
            )}
          </div>
        </div>
        <button className="btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
          Update hangout
        </button>
      </form>
    </div>
  );
}

export default UpdateHangout;
