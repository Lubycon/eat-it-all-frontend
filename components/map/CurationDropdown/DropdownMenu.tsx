import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

import { useMobile } from '../../../hooks/useMobile';
import { colors } from '../../../lib/constants/colors';
import { clickable } from '../../../lib/style/mixin';
import { Curation } from '../../../types';

const Styled = {
  Root: styled.div<{ isMobile?: boolean }>`
    display: grid;
    position: absolute;
    top: 66px;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 12px;
    border-radius: 6px;
    box-shadow: 0px 3px 15px rgba(79, 62, 43, 0.45);
    background: ${colors.ivory10};
    padding: 16px;
    width: ${({ isMobile }) => (isMobile ? 'calc(100% - 32px)' : '400px')};

    animation: 0.4s ease fadeIn;

    @keyframes fadeIn {
      from {
        transform: translate(0, 30px);
        opacity: 0;
      }
      to {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  `,

  MenuItem: styled.div<{ imageUrl?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      ${({ imageUrl }) => imageUrl !== '' && `url("https://file.eat-all.io${imageUrl}")`};
    background-color: ${colors.beige50};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 24px;
    text-align: center;
    line-height: 1.4;
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
    ${clickable}

    &:hover {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    }
  `,
};

interface Props {
  items: Pick<Curation, 'id' | 'title' | 'imageUrl'>[];
  setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropdownMenu({ items, setOpenDropdown }: Props) {
  const router = useRouter();
  const isMobile = useMobile();

  const handleDropdownClick = (id: number) => () => {
    const { pathname, query: prevQuery } = router;
    const query = { ...prevQuery, curationId: id };

    router.replace({ pathname, query });

    setOpenDropdown(false);
  };

  return (
    <Styled.Root isMobile={isMobile}>
      {items.map((item) => (
        <Styled.MenuItem
          key={item.id}
          onClick={handleDropdownClick(item.id)}
          imageUrl={item.imageUrl}
        >
          {item.title}
        </Styled.MenuItem>
      ))}
    </Styled.Root>
  );
}

export default DropdownMenu;
