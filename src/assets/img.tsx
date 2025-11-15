
const getAssetPath = (path: string) => {
  const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/AL_SAKB/';
  // const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/';
  return `${baseUrl}${path}`;
};
// Carousel Hero Images
export const allImages = {
  internationalTrade: getAssetPath("/assets/images/international_trade.jpeg"),
  exportShipping: getAssetPath("/assets/images/export_shipping.jpeg"),
  organicSpices: getAssetPath("/assets/images/organic_spices.jpeg"),
  traditionalExcellence: getAssetPath("/assets/images/traditional_excellence.jpeg"),
  spicesMarket: getAssetPath("/assets/images/spices_market.jpeg"),
  colorfulSpices: getAssetPath("/assets/images/colorful_spices.jpeg"),
  logo: getAssetPath("/assets/images/logo.png"),
  turmeric: getAssetPath("/assets/images/turmeric.jpeg"),
  coriander: getAssetPath("/assets/images/coriander_seeds.jpeg"),
  cardamom: getAssetPath("/assets/images/cardamom.jpeg"),
  blackPepper: getAssetPath("/assets/images/black_pepper.jpeg"),
  aromatic: getAssetPath("/assets/images/aromatic_cumin_seeds.jpeg"),
};