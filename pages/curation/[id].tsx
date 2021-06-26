import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import Header from "../../components/common/Header";
import { colors } from "../../lib/constants/colors";
import { modalRestaurantIdState } from "../../store";
import Spinner from "../../components/common/Spinner";
import { useGetCuration } from "../../hooks/api/curation";
import RestaurantModal from "../../components/common/RestaurantModal";
import CurationContentItem from "../../components/Curation/CurationContentItem";
import Link from "next/link";
import GoToMapButton from "../../components/common/GoToMapButton";
import { useMobile } from "../../hooks/useMobile";

const Styled = {
  Header: styled.div<{ image?: string }>`
    font-weight: bold;
    font-size: 48px;
    height: 400px;
    color: #fff;
    background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 768px) {
      font-size: 32px;
      height: 240px;
    }
  `,

  CurationTitle: styled.div`
    width: 600px;
    margin: 0 32px 24px 32px;
  `,

  CurationContent: styled.div`
    position: relative;
    max-width: calc(600px + 64px);
    padding: 56px 32px;
    margin: 0 auto;

    .description {
      font-size: 18px;
      line-height: 1.6;
      color: ${colors.gray90};

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  `,

  CurationDescription: styled.div`
    margin-bottom: 88px;
  `,

  GoToMapBtnWrapper: styled.div`
    position: fixed;
    bottom: 20px;
    left: calc(50% - 90px);
    z-index: 20;

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

    animation: 0.8s ease fadeIn;
  `,

  BackIcon: styled.img`
    position: absolute;
    top: 20px;
    left: 16px;
    width: 32px;
  `,
};

function Curation() {
  const {
    query: { id: curationId },
  } = useRouter();
  const { data: curation } = useGetCuration(Number(curationId));
  const modalRestaurantId = useRecoilValue(modalRestaurantIdState);

  const isMobile = useMobile();

  if (curation == null) return <Spinner />;

  return (
    <>
      {isMobile ? (
        <>
          <Styled.GoToMapBtnWrapper>
            <GoToMapButton curationId={Number(curationId || 0)} />
          </Styled.GoToMapBtnWrapper>
          <Link href="/">
            <Styled.BackIcon src="/assets/icons/ic_back_white.svg" alt="홈으로" />
          </Link>
        </>
      ) : (
        <Header />
      )}
      <Styled.Header image={`https://file.eat-all.io${curation.imageUrl}`}>
        <Styled.CurationTitle>{curation.title}</Styled.CurationTitle>
      </Styled.Header>
      <Styled.CurationContent>
        <Styled.CurationDescription className="description">{curation.contents}</Styled.CurationDescription>
        {curation.restaurants.map(({ id, name, hashtags, address, thumbnailImageUrl, description }) => (
          <CurationContentItem
            key={id}
            id={id}
            name={name}
            hashTags={hashtags}
            address={address}
            imageUrl={thumbnailImageUrl}
            description={description}
          />
        ))}
      </Styled.CurationContent>
      {modalRestaurantId !== null && <RestaurantModal showMap />}
    </>
  );
}

export default Curation;
