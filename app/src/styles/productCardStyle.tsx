import { StyleSheet } from "react-native";
import { Colors } from "../constant/Colors";
import { Theme } from "../constant/Theme";

export const productCardStyles = StyleSheet.create({
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