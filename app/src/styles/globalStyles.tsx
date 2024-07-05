import { StyleSheet } from 'react-native';
import { Colors } from '../constant/Colors';
import { Theme } from '../constant/Theme';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16,
        backgroundColor: Colors.white
    },
    productCard: {
        flex: 1,
        margin: 10,
        backgroundColor: Colors.white,
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
        ...Theme.shadow
    },
    // Add more global styles here
});