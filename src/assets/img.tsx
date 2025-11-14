
const getAssetPath = (path: string) => {
  const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/AL_SAKB/';
  return `${baseUrl}${path}`;
};
// Carousel Hero Images
export const allImages = {
  logo: getAssetPath("/assets/images/logo.png")
};