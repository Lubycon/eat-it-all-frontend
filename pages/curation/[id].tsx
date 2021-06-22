import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useGetCuration } from "../../hooks/api/curation";
import { colors } from "../../lib/constants/colors";
import CurationContentItem from "../../components/Curation/CurationContentItem";

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
};

function Curation() {
  const {
    query: { id: curationId },
  } = useRouter();

  const { data: curation } = useGetCuration(Number(curationId));
  console.log(`curation`, curation);

  if (curation == null) return <div>Loading...</div>;

  return (
    <div>
      <Styled.Header image={`https://file.eat-all.io${curation.imageUrl}`}>
        <Styled.CurationTitle>{curation.title}</Styled.CurationTitle>
      </Styled.Header>
      <Styled.CurationContent>
        <Styled.CurationDescription className="description">
          모밀은 메밀로 만들어져 저칼로리 음식의 대표주자 입니다. 쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라
          쏼라쏼라 모밀은 메밀로 만들어져 저칼로리 음식의 대표주자 입니다. 쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라
          쏼라쏼라 쏼라쏼라 모밀은 메밀로 만들어져 저칼로리 음식의 대표주자 입니다. 쏼라쏼라 쏼라쏼라 쏼라쏼라 쏼라쏼라
          쏼라쏼라 쏼라쏼라 쏼라쏼라 모밀은 메밀로 만들어져 저칼로리 음식의 대표주자 입니다.
        </Styled.CurationDescription>
        {curation.restaurants.map(({ id, name, hashtags, address, thumbnailImageUrl, description }) => (
          <CurationContentItem
            key={id}
            name={name}
            hashTags={hashtags}
            address={address}
            imageUrl={thumbnailImageUrl}
            description={description}
          />
        ))}
      </Styled.CurationContent>
    </div>
  );
}

export default Curation;
