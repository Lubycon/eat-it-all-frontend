import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { colors } from "../../lib/constants/colors";
import { openModalState } from "../../store/mapStore";

const Styled = {
  Dimmer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(23, 23, 23, 0.15);

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Modal: styled.div`
    width: 600px;
    height: 730px;
    background-color: ${colors.ivory10};
    box-shadow: 0px 4px 32px rgba(79, 62, 43, 0.35);
    border-radius: 16px;
  `,
};

function RestaurantModal() {
  const [openModal, setOpenModal] = useRecoilState(openModalState);

  return (
    <Styled.Dimmer onClick={() => setOpenModal(false)}>
      <Styled.Modal></Styled.Modal>
    </Styled.Dimmer>
  );
}

export default RestaurantModal;
