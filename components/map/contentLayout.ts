const contentLayout = (name: string, hashTags: string[]) => `
  <div class="overlay-wrapper">
    <a href="https://map.kakao.com/link/map/11394059" target="_blank">
      <div class="overlay-title">${name}</div>
      <div class="overlay-hashTag-wrapper">${hashTags.map(
        (hashTag) => `<div class="overlay-hashTag">${hashTag}</div>`
      )}</div>
    </a>
  </div>
`;

export default contentLayout;
