//Utilities are used for common component uses.

export const appLanguages = {
    en: "en",
    ar: "ar"
}

export const calculatePercentageOff = (originalPrice: number, discountedPrice: number) => {
    return ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(0);
};

export const urls = {
    cartIcon: "https://cdn.shopify.com/s/files/1/0604/1151/1030/files/Cart_Icon_f10a0529-6bd2-437d-a8dd-e6066d6702b2.png?v=1699525506",
}

export const apiUrls = {
    fetchAllProduct: "https://shopifyapptst1.bma.ae/react-native-exercise/"
}