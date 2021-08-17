export interface PlaceProps {
  id: number;
  lat: number;
  lng: number;
  content?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Place({ id, lat, lng, content }: PlaceProps) {
  return null;
}

export default Place;
