import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

import { colors } from '../../lib/constants/colors';
import { clickable } from '../../lib/style/mixin';
import Icon from './Icon';

const Styled = {
  Root: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    border-radius: 50px;
    background-color: ${colors.green50};
    padding: 13px 24px;
    ${clickable};

    &:hover {
      box-shadow: 0px 4px 8px rgba(155, 110, 69, 0.25);
      background-color: ${colors.green40};
    }

    & > div {
      margin-right: 4px;
      color: ${colors.ivory10};
      font-size: 16px;
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    & > img {
      width: 28px;
      height: 28px;
      @media (max-width: 768px) {
        width: 22px;
        height: 22px;
      }
    }

    @media (max-width: 768px) {
      padding: 8px 12px;
    }
  `,
};

interface Props {
  curationId?: number;
}

function GoToMapButton({ curationId = 0 }: Props) {
  return (
    <Link href={`/map?curationId=${curationId}`} passHref>
      <Styled.Root>
        <div>더 많은 식당 보러가기</div>
        <Icon name="map" color={colors.ivory10} width={29} height={29} />
      </Styled.Root>
    </Link>
  );
}

export default GoToMapButton;
