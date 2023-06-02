import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

function MyComponent({ saveMarker }) {
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
      saveMarker([lat, lng, newMarker]);
    },
  });

  return null;
}

function CreateHangout() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  // useEffect(() => {
  // if user is null, redirect to login page
  if (!user) {
    window.location.href = "/mainpage";
  }
  // }, [user]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marker, setMarker] = useState(null);
  const [err, setErr] = useState({});

  const validate = () => {
    const err = {};
    let noErr = true;
    if (!title) {
      err.title = "Title is required";
      noErr = false;
    }
    if (!description) {
      err.description = "Description is required";
      noErr = false;
    }
    if (!marker) {
      err.marker = "Location is required";
      noErr = false;
    }
    setErr(err); // set error object
    return noErr;
  };

  const saveMarker = (newMarkerCoords) => {
    setMarker(newMarkerCoords);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate hangout
    if (!validate()) return;
    const newHangout = {
      title,
      description,
      latLong: marker.slice(0, 2),
      userId: user.user._id,
      joining: [],
    };
    const response = await fetch(
      "https://high-paw-production.up.railway.app/hangout/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(newHangout),
      }
    );
    const data = await response.json();
    console.log(data);
    navigate("/");
  };

  return (
    <div className="parent_div  w-screen   md:flex-1  m-auto mt-14 ">
      <form
        className="form bg-white shadow-md rounded px-6 pt-6 pb-6 mb-2 md:w-4/5 lg:w-3/5 xl:w-2/5 m-auto w-screen"
        onSubmit={handleSubmit}
      >
        <div className="title-div mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-md font-semibold mb-2"
          >
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="title"
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline text"
            placeholder="add your title here..."
          />
          {err.title && (
            <p className="text-red-500 text-xs italic">{err.title}</p>
          )}
        </div>

        <div className="description-div mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700  font-semibold mb-2 text-md"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            placeholder="add your description here..."
          ></textarea>
          {err.description && (
            <p className="text-red-500 text-xs italic">{err.description}</p>
          )}
        </div>
        <div className="div-map">
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Select location
          </p>
          <div className="mapContainer w-auto" style={{ marginBottom: "2em" }}>
            <MapContainer
              center={user.user.latLong}
              zoom={14}
              scrollWheelZoom={false}
              style={{ height: "40vh", width: "100%" }}
            >
              <TileLayer
                onClick={() => console.log("test")}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MyComponent saveMarker={saveMarker} />
            </MapContainer>
            {err.marker && (
              <p className="text-red-500 text-xs italic">{err.marker}</p>
            )}
          </div>
        </div>
        <button className="btn bg-green-700 hover:bg-green-900 text-white font-medium py-2 px-4 rounded w-full">
          Create hangout
        </button>
      </form>
    </div>
  );
}

export default CreateHangout;
