import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import { colors } from "../../../lib/constants/colors";
import { clickable } from "../../../lib/style/mixin";
import { Curation } from "../../../types";

const Styled = {
  Root: styled.div`
    position: absolute;
    top: 66px;
    width: 400px;
    height: 400px;
    background: ${colors.ivory10};
    box-shadow: 0px 3px 15px rgba(79, 62, 43, 0.45);
    border-radius: 6px;
    padding: 16px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 12px;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translate(0, 30px);
      }
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    animation: 0.4s ease fadeIn;
  `,

  MenuItem: styled.div`
    background-color: ${colors.beige30};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    color: ${colors.white};
    text-align: center;
    line-height: 1.4;
    padding: 24px;
    border-radius: 8px;
    transition: 0.2s ease-in-out;
    ${clickable}

    &:hover {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    }
  `,
};

interface Props {
  items: Pick<Curation, "id" | "title" | "imageUrl">[];
  setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropdownMenu({ items, setOpenDropdown }: Props) {
  const router = useRouter();

  const handleDropdownClick = (id: number) => () => {
    const { pathname, query: prevQuery } = router;

    /** "전체"의 경우 */
    if (id === 0) {
      router.push({ pathname });
    } else {
      const query = { ...prevQuery, curationId: id };
      router.push({ pathname, query });
    }

    setOpenDropdown(false);
  };

  return (
    <Styled.Root>
      {items.map((item) => (
        <Styled.MenuItem key={item.id} onClick={handleDropdownClick(item.id)}>
          {item.title}
        </Styled.MenuItem>
      ))}
    </Styled.Root>
  );
}

export default DropdownMenu;
