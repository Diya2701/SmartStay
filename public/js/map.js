mapboxgl.accessToken = mapToken;

const normalizeCoordinates = (raw) => {
  if (!Array.isArray(raw) || raw.length < 2) return null;
  const coords = raw.slice(0, 2).map(Number);
  return coords.some((n) => Number.isNaN(n)) ? null : coords;
};

const coords = normalizeCoordinates(listingData?.geometry?.coordinates) || [
  77.209, 28.6139,
];
const listingInfo = listingData || {};

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: coords,
  zoom: 12,
});

new mapboxgl.Marker({ color: "red" })
  .setLngLat(coords)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h5>${listingInfo.location || "Location"}</h5><p>Exact Location will be provided after booking</p>`,
    ),
  )
  .addTo(map);
