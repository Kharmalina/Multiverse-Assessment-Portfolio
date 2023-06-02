export default async function adressToLatLong(address, city) {
  const API_KEY = import.meta.env.VITE_MAPBOX_API;
  const response = await fetch(
    // GET LAT LONG BASED ON YOUR ADRESS
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}, ${city}.json?limit=1&access_token=${API_KEY}`
  );
  const data = await response.json();
  const coordonates = data.features[0].geometry.coordinates;
  return [coordonates[1], coordonates[0]];
}
