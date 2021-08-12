import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';

import { colors } from '../../../lib/constants/colors';
import { truncateText } from '../../../lib/style/mixin';
import { modalRestaurantIdState } from '../../../store';

const Styled = {
  Root: styled.div<{ imageUrl?: string }>`
    position: relative;
    margin-bottom: 16px;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    background-color: ${colors.ivory10};
    cursor: pointer;
    padding: 20px 16px 28px 16px;
    width: 224px;
    height: 96px;
  `,

  Title: styled.div`
    margin-bottom: 12px;
    color: ${colors.green50};
    font-size: 18px;
    font-weight: bold;
    ${truncateText}
  `,

  Description: styled.div`
    color: ${colors.green50};
    font-size: 16px;
    font-weight: 500;
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
