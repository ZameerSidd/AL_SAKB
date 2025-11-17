
// const getAssetPath = (path: string) => {
//   const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/AL_SAKB/';
//   // const baseUrl = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env.BASE_URL || '/' : '/';
//   return `${baseUrl}${path}`;
// };

const getAssetPath = (path: string) => {
  let baseUrl = 'https://www.alsakb.in';
  if (window.location.hostname === 'localhost') {
    baseUrl = 'http://localhost:3000';
  }

  return `${baseUrl}${path}`;
};

//

// Carousel Hero Images
export const allImages = {
  MetalsAndMinerals: getAssetPath("/assets/images/Metals_And_Minerals.jpeg"),
  AgricultureAndFoodProducts: getAssetPath("/assets/images/Agriculture_And_Food_Products.jpeg"),
  MachineryEquipment: getAssetPath("/assets/images/Machinery_Equipment.jpeg"),
  TextilesAndApparel: getAssetPath("/assets/images/Textiles_And_Apparel.jpeg"),
  ConsumerGoodsAndElectronics: getAssetPath("/assets/images/Consumer_Goods_And_Electronics.jpeg"),
  AutomotiveAndSpareParts: getAssetPath("/assets/images/Automotive_And_Spare_Parts.jpeg"),
  ConstructionMaterials: getAssetPath("/assets/images/Construction_Materials.jpeg"),

  internationalTrade: getAssetPath("/assets/images/international_trade.jpeg"),
  exportShipping: getAssetPath("/assets/images/export_shipping.jpeg"),
  organicSpices: getAssetPath("/assets/images/organic_spices.jpeg"),
  traditionalExcellence: getAssetPath("/assets/images/traditional_excellence.jpeg"),
  spicesMarket: getAssetPath("/assets/images/spices_market.jpeg"),
  colorfulSpices: getAssetPath("/assets/images/colorful_spices.jpeg"),
  logo: getAssetPath("/assets/images/logo.png"),
  turmeric: getAssetPath("/assets/images/turmeric.jpeg"),
  coriander: getAssetPath("/assets/images/coriander_seeds.jpeg"),
  RedChiliPowder: getAssetPath("/assets/images/RedChiliPowder.jpeg"),
  cardamom: getAssetPath("/assets/images/cardamom.jpeg"),
  blackPepper: getAssetPath("/assets/images/black_pepper.jpeg"),
  aromatic: getAssetPath("/assets/images/aromatic_cumin_seeds.jpeg"),
  CinnamonSticks: getAssetPath("/assets/images/CinnamonSticks.jpeg"),
  WholeCloves: getAssetPath("/assets/images/WholeCloves.jpeg"),
};