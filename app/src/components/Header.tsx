import { View, Text, Switch, Image, StyleSheet, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../constant/Colors'
import { CartContext } from '../context/CartContext'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import { appLanguages, urls } from '../constant/Utility'
import { HeaderStyle as style } from '../styles/headerStyle'

const Header = ({
    onPressSwitch = () => null,
    language = appLanguages.en || appLanguages.ar
}: {
    onPressSwitch: () => void
    language: string
}) => {
    const { cart } = useContext(CartContext);
    const [cartLength, setCartLength] = useState(cart.length);


    const cartLengthValue = useSharedValue(cart.length);

    // When we add product in cart this function will animated cart count.
    useEffect(() => {
        if (cart.length) {
            cartLengthValue.value = withSequence(
                withTiming(1.5, { duration: 300 }),
                withDelay(300, withTiming(1, { duration: 300 }))
            );
            setCartLength(cart.length);
        }
    }, [cart.length]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: cartLengthValue.value }]
        };
    });

    return (
        <View style={style.cnt}>
            <Switch
                onChange={onPressSwitch}
                value={language === appLanguages.en ? true : false}
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
                        uri: urls.cartIcon
                    }}
                    style={style.cartIcon}
                />
                {cart.length > 0 &&
                    <Animated.View style={[style.cardItemCnt, animatedStyle]}>
                        <Text style={style.cardItemCount}>{cart.length > 9 ? "9+" : JSON.stringify(cart.length)}</Text>
                    </Animated.View>
                }
            </View>
        </View>
    )
}

export default Header