const contentLayout = (name: string, hashTags: string[]) => `
  <div class="overlay-background" onclick="https://apis.map.kakao.com/web/sample/customOverlay1/" >
    <a href="https://map.kakao.com/link/map/11394059" target="_blank">
      <div class="overlay-title">${name}</div>
      <div class="overlay-hashtags">${hashTags.map((hashTag) => hashTag)}</div>
    </a>
  </div>
`;

export default contentLayout;
