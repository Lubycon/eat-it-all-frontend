import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { useSetRecoilState } from "recoil";
import { colors } from "../../../lib/constants/colors";
import { truncateText } from "../../../lib/style/mixin";
import { modalRestaurantIdState } from "../../../store";

const Styled = {
  Root: styled.div<{ imageUrl?: string }>`
    position: relative;
    width: 224px;
    height: 96px;
    margin-bottom: 16px;
    padding: 20px 16px 28px 16px;
    cursor: pointer;
    background-color: ${colors.ivory10};
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  `,

  Title: styled.div`
    color: ${colors.green50};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 12px;
    ${truncateText}
  `,

  Description: styled.div`
    color: ${colors.green50};
    font-weight: 500;
    font-size: 16px;
    ${truncateText}
  `,
};

interface Props {
  id: number;
  name: string;
  description: string;
}

function RestaurantListItem({ id, name, description }: Props): ReactElement {
  const setModalRestaurantId = useSetRecoilState(modalRestaurantIdState);

  const handleClick = (id: number) => () => {
    setModalRestaurantId(id);
  };

  return (
    <Styled.Root onClick={handleClick(id)}>
      <Styled.Title>{name}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Root>
  );
}

export default RestaurantListItem;
