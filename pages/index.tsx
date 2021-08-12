import React from 'react';
import { useSetRecoilState } from 'recoil';

import Header from '../components/common/Header';
import Main from '../components/home/Main';
import MobileCategoryList from '../components/home/MobileCategoryList';
import { useMobile } from '../hooks/useMobile';
import { modalRestaurantIdState } from '../store';

function Home() {
  const isMobile = useMobile();
  const setModalRestaurantId = useSetRecoilState(modalRestaurantIdState);

  React.useEffect(() => {
    setModalRestaurantId(null);
  }, []);

  return (
    <>
      <Header />
      <Main />
      {isMobile && <MobileCategoryList />}
    </>
  );
}

export default Home;
