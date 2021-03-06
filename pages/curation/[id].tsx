import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';

import GoToMapButton from '../../components/common/GoToMapButton';
import Header from '../../components/common/Header';
import IconButton from '../../components/common/IconButton';
import RestaurantModal from '../../components/common/RestaurantModal';
import CurationContentItem from '../../components/Curation/CurationContentItem';
import { useGetCuration } from '../../hooks/api/curation';
import { useMobile } from '../../hooks/useMobile';
import http from '../../lib/api';
import { colors } from '../../lib/constants/colors';
import { eatAllFileUrl } from '../../lib/utils/path';
import { modalRestaurantIdState } from '../../store';
import { Curation } from '../../types';

const Styled = {
  Header: styled.div<{ image?: string }>`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
      ${({ image }) => `url(${image})`};
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
    color: #fff;
    font-size: 48px;
    font-weight: bold;

    @media (max-width: 768px) {
      height: 240px;
      font-size: 32px;
    }
  `,

  CurationTitle: styled.div`
    margin: 0 32px 24px 32px;
    width: 600px;
  `,

  CurationContent: styled.div`
    position: relative;
    margin: 0 auto;
    padding: 56px 32px;
    max-width: calc(600px + 64px);

    .description {
      line-height: 1.6;
      color: ${colors.gray90};
      font-size: 18px;

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
        transform: translate(0, 30px);
        opacity: 0;
      }
      to {
        transform: translate(0, 0);
        opacity: 1;
      }
    }

    animation: 0.8s ease fadeIn;
  `,

  BackButton: styled(IconButton)`
    position: absolute;
    top: 20px;
    left: 16px;
    width: 32px;
  `,
};

interface Props {
  curation: Curation;
}

function CurationPage({ curation: prefetchedCuration }: Props) {
  const {
    query: { id: curationId },
  } = useRouter();

  const { data } = useGetCuration(Number(curationId), {
    // initialData: prefetchedCuration,
    suspense: true,
  });
  const curation = data as Curation;

  const modalRestaurantId = useRecoilValue(modalRestaurantIdState);

  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <>
          <Styled.GoToMapBtnWrapper>
            <GoToMapButton curationId={Number(curationId || 0)} />
          </Styled.GoToMapBtnWrapper>
          <Styled.BackButton name="arrow_left_shadow" to="/" color={colors.white} />
        </>
      ) : (
        <Header />
      )}
      <Styled.Header image={eatAllFileUrl(curation.imageUrl)}>
        <Styled.CurationTitle>{curation.title}</Styled.CurationTitle>
      </Styled.Header>
      <Styled.CurationContent>
        <Styled.CurationDescription className="description">
          {curation.contents}
        </Styled.CurationDescription>
        {curation.restaurants.map(
          ({ id, name, hashtags, address, thumbnailImageUrl, description }) => (
            <CurationContentItem
              key={id}
              id={id}
              name={name}
              hashTags={hashtags}
              address={address}
              imageUrl={thumbnailImageUrl}
              description={description}
            />
          ),
        )}
      </Styled.CurationContent>
      {modalRestaurantId !== null && <RestaurantModal showMap />}
    </>
  );
}

// FIX: Amplify SSR ?????? ????????? ?????? ?????? ??????

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const curationId = context.params?.id;

//   if (curationId == undefined || Array.isArray(curationId)) {
//     return { notFound: true };
//   }

//   try {
//     const curation = await http.get<Curation>(`/curation/${curationId}`);

//     return { props: { curation } };
//   } catch {
//     return { notFound: true };
//   }
// };

export default CurationPage;
