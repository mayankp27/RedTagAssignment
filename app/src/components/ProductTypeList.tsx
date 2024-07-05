import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constant/Colors'
import { headerFashionsArray } from '../assets/LocalJson'
import i18n from '../locales/i18n'
import { Theme } from '../constant/Theme'
import { appLanguages } from '../constant/Utility'

const ProductTypeList = () => {
    const isArabic = i18n._locale === appLanguages.ar ? true : false
    const [selectedOptionIndex, setSelectedIndex] = useState(0)
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={headerFashionsArray}
            style={style.cnt}
            inverted={isArabic}
            renderItem={({ item, index }) => {
                return <TouchableOpacity
                    style={[
                        style.cardCnt,
                        isArabic && { flexDirection: 'row-reverse', paddingRight: 0, paddingLeft: 5 },
                        selectedOptionIndex === index && { borderWidth: 1, borderColor: Colors.redBorderColor, backgroundColor: Colors.redlightColor }
                    ]}
                    activeOpacity={.8}
                    onPress={() => setSelectedIndex(index)}
                >
                    <Image
                        source={{
                            uri: item.image
                        }}
                        style={[style.imgStyle, isArabic && {
                            marginRight: 0,
                            marginLeft: 10,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5
                        }]}
                    />
                    <Text style={style.cardTitleStyle}>
                        {isArabic ? item?.arabicTitle : item?.title}
                    </Text>
                </TouchableOpacity>
            }}
        />
    )
}

export default ProductTypeList

const style = StyleSheet.create({
    cnt: {
        marginBottom: 5,
        height: 50,
    },
    cardCnt: {
        backgroundColor: Colors.themeGreyColor,
        flexDirection: 'row',
        marginHorizontal: 6,
        alignItems: 'center',
        paddingRight: 5,
        borderRadius: 5,
        height: 40,
        ...Theme.shadow
    },
    imgStyle: {
        height: '100%',
        width: 25,
        marginRight: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    cardTitleStyle: {
        fontSize: 12,
        fontWeight: '500'
    }
})