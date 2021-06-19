const marker = (lat: number, lng: number, map: any) => {
  const { kakao } = window;

  const imageSrc = "/assets/icons/marker.svg";
  const imageSize = new kakao.maps.Size(30, 40);
  const imageOption = { offset: new kakao.maps.Point(15, 40) };

  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
  const markerPosition = new kakao.maps.LatLng(lat, lng);

  return new kakao.maps.Marker({
    map: map,
    position: markerPosition,
    image: markerImage,
  });
};

export default marker;
