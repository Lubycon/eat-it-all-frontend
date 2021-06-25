import useWindowSize from "./useWindowSize";

export const useMobile = () => {
  const size = useWindowSize();
  const isMobile = size && size.width < 768;

  return isMobile;
};
