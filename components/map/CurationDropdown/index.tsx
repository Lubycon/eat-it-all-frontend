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
    width: 400px;
    background: ${colors.white};
    box-shadow: 0px 3px 15px rgba(79, 62, 43, 0.45);
    border-radius: 5px;
    padding: 12px 12px;
    font-weight: bold;
    font-size: 18px;
    color: ${colors.gray90};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid ${colors.white};
    transition: 0.2s;
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
};

function CurationDropdown() {
  const { data: curations } = useGetCurations();

  if (curations == null) return <div>Loading...</div>;

  const dropdownItem = ["전체", ...curations.map((curation) => curation.title)];

  return (
    <Styled.Root>
      <Styled.CurationLeft>
        <img src="/assets/icons/ic_curation_star.svg" />
        <div>{dropdownItem[1]}</div>
      </Styled.CurationLeft>
      <img src="/assets/icons/ic_dropdown.svg" />
    </Styled.Root>
  );
}

export default CurationDropdown;
