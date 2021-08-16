import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { useGetCurations } from '../../../hooks/api/curation';
import { useMobile } from '../../../hooks/useMobile';
import { colors } from '../../../lib/constants/colors';
import { clickable } from '../../../lib/style/mixin';
import { Curation } from '../../../types';
import Icon from '../../common/Icon';
import IconButton from '../../common/IconButton';
import DropdownMenu from './DropdownMenu';

const Styled = {
  Root: styled.div<{ isMobile?: boolean }>`
    position: absolute;
    top: 36px;
    z-index: 10;

    ${({ isMobile }) =>
      isMobile
        ? css`
            top: 16px;
            padding: 0 16px;
            width: 100%;
          `
        : css`
            top: 36px;
            left: calc(50% - 200px);
          `}
  `,

  DropdownHeader: styled.div<{ isFocus?: boolean; isMobile?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.2s ease-in-out;
    border: 2px solid ${({ isFocus }) => (isFocus ? colors.green40 : colors.white)};
    border-radius: 6px;
    box-shadow: 0px 3px 15px rgba(79, 62, 43, 0.45);
    background: ${colors.white};
    padding: 12px 12px;
    height: 60px;
    color: ${colors.gray90};
    font-size: 18px;
    font-weight: bold;
    ${clickable}

    &:hover {
      border: 2px solid ${colors.green40};
    }

    @media (max-width: 768px) {
      line-height: 1.2;
      font-size: 16px;
    }

    ${({ isMobile }) =>
      isMobile
        ? css`
            width: 100%;
          `
        : css`
            width: 400px;
          `}
  `,

  CurationLeft: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > img {
      margin-right: 4px;
    }
  `,

  ArrowIcon: styled(Icon)<{ isRotate: boolean }>`
    transform: rotate(${({ isRotate }) => (isRotate ? '0.5turn' : '0turn')});
    transition: 0.2s ease-in-out;
    width: 32px;
    height: 32px;
  `,

  BackToHomeButton: styled(IconButton)`
    transform: rotate(0.5turn);
    margin-right: 4px;
    width: 32px;
    height: 32px;
  `,
};

type DropdownItem = Pick<Curation, 'id' | 'title' | 'imageUrl'>;

function CurationDropdown() {
  const { data: curations } = useGetCurations();
  const {
    query: { curationId },
  } = useRouter();
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const isMobile = useMobile();

  if (curations == null)
    return (
      <Styled.Root>
        <Styled.DropdownHeader>Loading...</Styled.DropdownHeader>
      </Styled.Root>
    );

  const all: DropdownItem = {
    id: 0,
    title: '전체',
    imageUrl: '',
  };

  const dropdownItems = [all, ...curations];
  const selectedDropdownItem = dropdownItems.find(
    (item) => item.id === Number(curationId),
  ) as DropdownItem;

  return (
    <Styled.Root isMobile={isMobile}>
      <Styled.DropdownHeader
        isFocus={openDropdown}
        isMobile={isMobile}
        onClick={() => setOpenDropdown((prevState) => !prevState)}
      >
        <Styled.CurationLeft>
          {isMobile ? (
            <Styled.BackToHomeButton name="arrow_right" to="/" color={colors.beige40} />
          ) : (
            <Icon name="star" />
          )}
          <div>{selectedDropdownItem?.title}</div>
        </Styled.CurationLeft>
        <Styled.ArrowIcon name="dropdown" isRotate={openDropdown} />
      </Styled.DropdownHeader>
      {openDropdown && <DropdownMenu items={dropdownItems} setOpenDropdown={setOpenDropdown} />}
    </Styled.Root>
  );
}

export default CurationDropdown;
