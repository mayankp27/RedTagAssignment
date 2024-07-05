import { View, Text, Switch, Image, StyleSheet, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../constant/Colors'
import { CartContext } from '../context/CartContext'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import * as Font from 'expo-font';

const Header = ({
    onPressSwitch = () => null,
    language = "en" || "es"
}: {
    onPressSwitch: () => void
    language: string
}) => {
    const { cart } = useContext(CartContext);
    const [cartLength, setCartLength] = useState(cart.length);

    const cartLengthValue = useSharedValue(cart.length);

    useEffect(() => {
        if (cart.length > 0) {
            cartLengthValue.value = withSpring(cart.length);
            setCartLength(cart.length);
        }
    }, [cart.length]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: withTiming(cartLengthValue.value > cartLength ? 1.5 : 1, { duration: 300 }) }
            ]
        };
    });

    return (
        <View style={style.cnt}>
            <Switch
                onChange={onPressSwitch}
                value={language === "en" ? true : false}
                style={{
                    marginLeft: Platform.OS === "ios" ? 0 : -10,
                }}
                trackColor={{ true: Colors.lightGrey, false: Colors.lightGrey }}
                thumbColor={language === "en" ? Colors.redBorderColor : Colors.themeGreyColor}
            />
            <Text style={style.title}>Womens Collection Sale</Text>
            <View style={[{
                justifyContent: 'flex-end'
            }]}>
                <Image
                    source={{
                        uri: "https://cdn.shopify.com/s/files/1/0604/1151/1030/files/Cart_Icon_f10a0529-6bd2-437d-a8dd-e6066d6702b2.png?v=1699525506"
                    }}
                    style={style.cartIcon}
                />
                <Animated.View style={[style.cardItemCnt, animatedStyle]}>
                    <Text style={style.cardItemCount}>{cart.length > 9 ? "9+" : JSON.stringify(cart.length)}</Text>
                </Animated.View>
            </View>
        </View>
    )
}

export default Header

const style = StyleSheet.create({
    cnt: {
        backgroundColor: Colors.white,
        padding: 10,
        marginTop: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Platform.OS === "ios" ? '3%' : '0%'
    },
    title: {
        width: '75%',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
    cartIcon: {
        height: 30,
        width: 30,
    },
    cardItemCnt: {
        position: 'absolute',
        backgroundColor: 'red',
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1000,
        alignSelf: 'flex-end',
        bottom: -5
    },
    cardItemCount: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: 'semibold'
    }
})