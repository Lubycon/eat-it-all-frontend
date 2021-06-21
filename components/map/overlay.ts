const overlay = (markerPosition: any, content: string) => {
  const { kakao } = window;

  return new kakao.maps.CustomOverlay({
    content: content,
    position: markerPosition,
    yAnchor: 2.3,
  });
};

export default overlay;
