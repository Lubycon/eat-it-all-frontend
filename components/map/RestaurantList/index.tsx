import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

import { useGetRestaurants } from '../../../hooks/api/restaurant';
import RestaurantListItem from './RestaurantListItem';

const Styled = {
  Root: styled.div`
    position: absolute;
    top: 0;
    right: 24px;
    bottom: 0;
    z-index: 10;
    padding: 36px 16px;
    overflow-x: scroll;
  `,
};

function RestaurantList() {
  const { data: allRestaurants } = useGetRestaurants();

  const {
    query: { curationId },
  } = useRouter();

  if (allRestaurants == null) return <div>Loading...</div>;

  const restaurants =
    Number(curationId) === 0
      ? allRestaurants
      : allRestaurants.filter(({ curationIds }) => curationIds?.includes(String(curationId)));

  return (
    <Styled.Root>
      {restaurants.map(({ id, name, description }) => (
        <RestaurantListItem key={id} id={id} name={name} description={description} />
      ))}
    </Styled.Root>
  );
}

export default RestaurantList;
