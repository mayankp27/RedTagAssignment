import { Platform, StyleSheet } from "react-native";
import { Colors } from "../constant/Colors";

export const HeaderStyle = StyleSheet.create({
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