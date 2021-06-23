import styled from "@emotion/styled";
import React from "react";
import { useGetCurations } from "../../../hooks/api/curation";
import { colors } from "../../../lib/constants/colors";
import { clickable } from "../../../lib/style/mixin";

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

  DropdownMenu: styled.div`
    position: absolute;
    top: 66px;
    width: 400px;
    height: 400px;
    background: ${colors.white};
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

  const dropdownItem = ["전체", ...curations.map((curation) => curation.title)];

  return (
    <Styled.Root>
      <Styled.DropdownHeader isFocus={openDropdown} onClick={() => setOpenDropdown((prevState) => !prevState)}>
        <Styled.CurationLeft>
          <img src="/assets/icons/ic_curation_star.svg" />
          <div>{dropdownItem[1]}</div>
        </Styled.CurationLeft>
        <Styled.ArrowIcon src="/assets/icons/ic_dropdown.svg" isRotate={openDropdown} />
      </Styled.DropdownHeader>
      {openDropdown && <Styled.DropdownMenu></Styled.DropdownMenu>}
    </Styled.Root>
  );
}

export default CurationDropdown;
