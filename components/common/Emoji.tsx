import React from 'react';

export const EmojiType = {
  ์๋ฌ๋: '๐ฅ',
  ๋ฉ๋ฐ: '๐พ',
  ์๊ตญ์: '๐พ',
  ์ฑ์: '๐ฅฌ',
  ํ์ฝ: '๐ฎ',
  ํฌ์ผ: '๐ฅ',
  ๋ถ๋ฆฌ๋: '๐ฏ',
  ์์ : '๐',
  ์กฐ๊ฐ: '๐',
  ๋ญ๊ณ ๊ธฐ: '๐',
  ๋ผ์ง๊ณ ๊ธฐ: '๐ฅ',
  ์๊ณ ๊ธฐ: '๐ฅฉ',
  ๋๋ถ: '๐ฅ',
};

interface Props {
  name: keyof typeof EmojiType;
}

function Emoji({ name }: Props) {
  return (
    <span role="img" aria-label={name}>
      {EmojiType[name]}
    </span>
  );
}

export default React.memo(Emoji);
