import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useGetCurations } from "../../../hooks/api/curation";
import { useGetRestaurant } from "../../../hooks/api/restaurant";
import RestaurantListItem from "./RestaurantListItem";

const Styled = {
  Root: styled.div`
    position: absolute;
    top: 72px;
    bottom: 72px;
    overflow-x: scroll;
    right: 40px;
    z-index: 999;
  `,
};

function RestaurantList() {
  const { data: allRestaurants } = useGetRestaurant();

  const {
    query: { curationId },
  } = useRouter();

  if (allRestaurants == null) return <div>Loading...</div>;

  const restaurants = curationId
    ? allRestaurants.filter(({ curationIds }) => curationIds.includes(String(curationId)))
    : allRestaurants;

  return (
    <Styled.Root>
      {restaurants.map((restaurant) => (
        <RestaurantListItem
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.title}
          description="설명설명설명설명설명설명설명설명설명"
        />
      ))}
    </Styled.Root>
  );
}

export default RestaurantList;
