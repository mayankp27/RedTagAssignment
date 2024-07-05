import React, { useContext, useEffect } from 'react';
import { View, Text, Image, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from '../constant/Colors';
import { Theme } from '../constant/Theme';
import { Feather } from '@expo/vector-icons';
import { Images } from '../assets/images';
import { Ionicons } from '@expo/vector-icons';
import { calculatePercentageOff } from '../context/utils';
import i18n from '../locales/i18n';
import { CartContext } from '../context/CartContext';


type Language = 'en' | 'ar';

const ProductCard = ({ product, language }: {
    product: {
        title: string,
        price_min: number,
        compare_at_price_min: number,
        images: {
            "1": ""
        },
        currency: string,
        "offer-message": string
    },
    language: Language
}) => {
    const isArabic = language === "ar"
    const { addToCart } = useContext(CartContext);
    useEffect(() => {
        i18n.locale = language
    }, [language])

    const renderPercentage = () => {
        // const percentageOffMessage = `${calculatePercentageOff(product.compare_at_price_min, product.price_min)}% OFF`;
        const percentage = calculatePercentageOff(product.compare_at_price_min, product.price_min);
        const percentageOffMessage = i18n.t('priceOff', { percentage });
        return <View
            style={styles.percentageOffStyleCnt}
        >
            <Text style={styles.percentageOffTxt}>{percentageOffMessage}</Text>
        </View>
    }

    const addButtonPress = () => {
        addToCart(product);
        animateButtonPress();
    }

    const buttonScale = useSharedValue(1);
    const animateButtonPress = () => {
        buttonScale.value = withTiming(2, { duration: 200 });
        setTimeout(() => {
            buttonScale.value = withTiming(1, { duration: 200 });
        }, 200);
    }

    return (
        <Animated.View style={[globalStyles.productCard]}>
            <ImageBackground
                source={{
                    uri: product.images[1]
                }}
                style={styles.productImage}
            >
                <Feather
                    name='heart'
                    style={[styles.heartIcon
                        , isArabic && { alignSelf: 'flex-start', marginLeft: 10 }
                    ]}
                    size={17}
                />
                <View style={[styles.bestSellerTagCnt, isArabic && {
                    alignSelf: 'flex-start',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5
                }]}>
                    <Text style={styles.bestSellerTxt}>{i18n.t('bestSeller')}</Text>
                </View>
            </ImageBackground>
            <Animated.View
                style={[styles.addToCartCnt, isArabic && {
                    alignSelf: 'flex-start'
                },
                {
                    transform: [{ scale: buttonScale }]
                }
                ]}
            >
                <TouchableOpacity onPress={addButtonPress}>
                    <Image
                        source={Images.add_to_card}
                        style={styles.addToCartIcon}
                    />
                </TouchableOpacity>
            </Animated.View>
            <Text style={styles.cardTitle}>{product.title}</Text>
            <View style={{
                justifyContent: 'space-between',
                flex: 1,
                width: '95%'
            }}>

                <View style={styles.priceCnt}>
                    {isArabic && renderPercentage()}
                    <View style={{
                        flexDirection: isArabic ? "row-reverse" : 'row',
                    }}>
                        <Text style={[styles.currencyStyle]}>{!isArabic && product.currency}{" "}
                            <Text style={{
                                fontSize: 12,
                            }}>{product.price_min.toFixed(2)}
                            </Text>
                            {isArabic && " " + product.currency}
                        </Text>
                        <Text style={styles.priceMinStyle}>{product.compare_at_price_min.toFixed(2)}</Text>
                    </View>
                    {!isArabic && renderPercentage()}
                </View>
                <View style={[styles.tagCnt, isArabic && { flexDirection: 'row-reverse', alignSelf: 'flex-end' }]}>
                    <Ionicons name="pricetag" size={10} color="black" style={{
                        marginHorizontal: 3
                    }} />
                    <Text style={styles.tagTxtStyle}>{product["offer-message"]}</Text>
                </View>
            </View>
        </Animated.View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    productImage: {
        height: 250,
        width: '100%',
        backgroundColor: Colors.themeGreyColor,
        justifyContent: 'space-between'
    },
    heartIcon: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 10
    },
    bestSellerTagCnt: {
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        padding: 5,
        marginBottom: "15%",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    bestSellerTxt: {
        fontSize: 12,
        fontWeight: '600',
        color: 'red',
    },
    addToCartCnt: {
        backgroundColor: Colors.white,
        borderRadius: 1000,
        marginTop: '-10%',
        alignSelf: 'flex-end',
        margin: 4,
        ...Theme.shadow
    },
    addToCartIcon: {
        height: 35,
        width: 35,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: '500',
        width: '95%'
    },
    priceCnt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    currencyStyle: {
        fontSize: 8,
        color: 'red',
        fontWeight: '600'
    },
    priceMinStyle: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
        marginLeft: 3
    },
    percentageOffStyleCnt: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        paddingVertical: 3
    },
    percentageOffTxt: {
        fontSize: 10,
        fontWeight: '700',
        color: 'red'
    },
    tagCnt: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 3,
        flexDirection: 'row',
        borderStyle: 'dashed',
        marginTop: 10,
        marginBottom: 15,
        borderColor: 'red',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginHorizontal: 5,
    },
    tagTxtStyle: {
        fontSize: 10,
        marginLeft: 4,
        fontWeight: '600',
        color: 'black'
    }
})
