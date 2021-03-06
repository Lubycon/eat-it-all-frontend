const marker = (lat: number, lng: number) => {
  const { kakao } = window;

  const imageSrc = '/assets/images/marker.svg';
  const imageSize = new kakao.maps.Size(30, 40);
  const imageOption = { offset: new kakao.maps.Point(15, 40) };

  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
  const markerPosition = new kakao.maps.LatLng(lat, lng);

  return new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });
};

export default marker;
