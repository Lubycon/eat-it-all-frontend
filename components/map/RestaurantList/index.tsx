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
  const { data: curations } = useGetCurations();
  const {
    query: { curationId },
  } = useRouter();

  if (!curationId) {
    const { data } = useGetRestaurant();
  }

  if (curations == null) return <div>Loading...</div>;

  return (
    <Styled.Root>
      {curations.map((curation) => (
        <RestaurantListItem
          key={curation.id}
          id={curation.id}
          title={curation.title}
          description="설명설명설명설명설명설명설명설명설명"
        />
      ))}
    </Styled.Root>
  );
}

export default RestaurantList;
