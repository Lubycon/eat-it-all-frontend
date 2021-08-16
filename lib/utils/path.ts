export const imageSrc = (fileName: string, format: 'svg' | 'png') =>
  `/assets/images/${fileName}.${format}`;

export const eatAllFileUrl = (url?: string) => (url ? `https://file.eat-all.io${url}` : '');
