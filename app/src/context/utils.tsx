export const calculatePercentageOff = (originalPrice: number, discountedPrice: number) => {
    return ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(0);
};