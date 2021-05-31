const contentLayout = (name: string, hashTags: string[], isSelected: boolean) => `
  <div class=${isSelected ? "selected-overlay-wrapper" : "overlay-wrapper"}>
    <a href="https://map.kakao.com/link/map/11394059" target="_blank">
      <div class=${isSelected ? "selected-overlay-title" : "overlay-title"}>${name}</div>
      <div class="overlay-hashTag-wrapper">${hashTags
        .map((hashTag) => `<div class="overlay-hashTag">${hashTag}</div>`)
        .join("")}</div>
    </a>
  </div>
`;

export default contentLayout;
