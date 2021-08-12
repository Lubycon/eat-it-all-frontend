const EmojiType = {
  샐러드: '🥗',
  메밀: '🌾',
  쌀국수: '🌾',
  채소: '🥬',
  타코: '🌮',
  포케: '🥙',
  부리또: '🌯',
  생선: '🐟',
  조개: '🐚',
  닭고기: '🍗',
  돼지고기: '🥓',
  소고기: '🥩',
  두부: '🥜',
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

export default Emoji;
