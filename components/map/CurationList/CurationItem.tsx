import styled from "@emotion/styled";
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
  `,

  BackgroundImage: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: ${colors.black};
    opacity: 0.5;
    z-index: -1;
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
  title: string;
  description: string;
  imageUrl?: string;
}

function CurationItem({ title, description, imageUrl }: Props): ReactElement {
  return (
    <Styled.Root imageUrl={imageUrl}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.BackgroundImage />
    </Styled.Root>
  );
}

export default CurationItem;
