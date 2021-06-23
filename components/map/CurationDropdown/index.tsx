import React from "react";
import styled from "@emotion/styled";
import DropdownMenu from "./DropdownMenu";
import { clickable } from "../../../lib/style/mixin";
import { colors } from "../../../lib/constants/colors";
import { useGetCurations } from "../../../hooks/api/curation";
import { Curation } from "../../../types";

const Styled = {
  Root: styled.div`
    position: absolute;
    top: 36px;
    left: calc(50% - 200px);
    z-index: 10;
  `,

  DropdownHeader: styled.div<{ isFocus: boolean }>`
    width: 400px;
    background: ${colors.white};
    box-shadow: 0px 3px 15px rgba(79, 62, 43, 0.45);
    border-radius: 6px;
    padding: 12px 12px;
    font-weight: bold;
    font-size: 18px;
    color: ${colors.gray90};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid ${({ isFocus }) => (isFocus ? colors.green40 : colors.white)};
    transition: 0.2s ease-in-out;
    ${clickable}

    &:hover {
      border: 2px solid ${colors.green40};
    }
  `,

  CurationLeft: styled.div`
    display: flex;
    align-items: center;

    & > img {
      margin-right: 4px;
    }
  `,

  ArrowIcon: styled.img<{ isRotate: boolean }>`
    transition: 0.2s ease-in-out;
    transform: rotate(${({ isRotate }) => (isRotate ? "0.5turn" : "0turn")});
  `,
};

function CurationDropdown() {
  const { data: curations } = useGetCurations();
  const [openDropdown, setOpenDropdown] = React.useState(false);

  if (curations == null) return <div>Loading...</div>;

  const all: Pick<Curation, "id" | "title" | "imageUrl"> = {
    id: 0,
    title: "전체",
    imageUrl: "",
  };

  const dropdownItems = [all, ...curations];

  return (
    <Styled.Root>
      <Styled.DropdownHeader isFocus={openDropdown} onClick={() => setOpenDropdown((prevState) => !prevState)}>
        <Styled.CurationLeft>
          <img src="/assets/icons/ic_curation_star.svg" />
          <div>{dropdownItems[1].title}</div>
        </Styled.CurationLeft>
        <Styled.ArrowIcon src="/assets/icons/ic_dropdown.svg" isRotate={openDropdown} />
      </Styled.DropdownHeader>
      {openDropdown && <DropdownMenu items={dropdownItems} setOpenDropdown={setOpenDropdown} />}
    </Styled.Root>
  );
}

export default CurationDropdown;
