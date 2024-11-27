import { StaticMapProps } from "../types";

export default function StaticMap(data: StaticMapProps) {
  const apiKey = import.meta.env.VITE_API_URL;
  const origin = data.data.origin;
  const destination = data.data.destination;
  const polyline = data.data.polyline;

  const encodedPath = encodeURIComponent(polyline);
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=color:red|label:A|${origin.latitude},${origin.longitude}&markers=color:blue|label:B|${destination.latitude},${destination.longitude}&path=enc:${encodedPath}&key=${apiKey}`;

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      <img
        src={mapUrl}
        alt="Route Map"
        style={{ width: "80%", height: "auto" }}
      />
    </div>
  );
}
