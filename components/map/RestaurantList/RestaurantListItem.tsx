import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";
import { colors } from "../../../lib/constants/colors";

const Styled = {
  Root: styled.div<{ imageUrl?: string }>`
    position: relative;
    width: 225px;
    height: 96px;
    margin-bottom: 16px;
    padding: 16px 16px 20px 16px;
    background: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : 'url("/assets/images/curation_background.png")')};
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.2));
    cursor: pointer;
  `,

  BackgroundImage: styled.div<{ selected: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: ${({ selected }) => (selected ? `${colors.green50}` : `${colors.black}`)};
    opacity: ${({ selected }) => (selected ? 0.8 : 0.5)};
    z-index: -1;
    transition: 0.1s;
  `,

  Title: styled.div`
    color: ${colors.white};
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 8px;
  `,

  Description: styled.div`
    color: ${colors.white};
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
};

interface Props {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

function RestaurantListItem({ id, title, description, imageUrl }: Props): ReactElement {
  const router = useRouter();
  const { curationId } = router.query;

  const handleClick = (id: number) => () => {
    const { pathname, query: prevQuery } = router;
    const query = { ...prevQuery, curationId: id };
    router.push({ pathname, query });
  };

  return (
    <Styled.Root imageUrl={imageUrl} onClick={handleClick(id)}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.BackgroundImage selected={Number(curationId) === id} />
    </Styled.Root>
  );
}

export default RestaurantListItem;
