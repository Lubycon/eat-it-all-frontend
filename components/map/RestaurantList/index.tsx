import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import RestaurantListItem from "./RestaurantListItem";
import { useGetRestaurant } from "../../../hooks/api/restaurant";

const Styled = {
  Root: styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 24px;
    padding: 72px 16px;
    overflow-x: scroll;
    z-index: 10;
  `,
};

function RestaurantList() {
  const { data: allRestaurants } = useGetRestaurant();

  const {
    query: { curationId },
  } = useRouter();

  if (allRestaurants == null) return <div>Loading...</div>;

  const restaurants = curationId
    ? allRestaurants.filter(({ curationIds }) => curationIds?.includes(String(curationId)))
    : allRestaurants;

  return (
    <Styled.Root>
      {restaurants.map(({ id, name, description }) => (
        <RestaurantListItem
          key={id}
          id={id}
          name={name}
          description={description || "설명설명설명설명설명설명설명설명설명"}
        />
      ))}
    </Styled.Root>
  );
}

export default RestaurantList;
