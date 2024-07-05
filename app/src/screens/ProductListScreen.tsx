import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Pressable, Button, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../styles/globalStyles';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import ProductTypeList from '../components/ProductTypeList';
import { fetchData } from '../context/Services';
import i18n from '../locales/i18n';
import Loader from '../components/Loader';
import { appLanguages } from '../constant/Utility';

const ProductListScreen = () => {
    const [products, setProducts] = useState([]);
    const [language, setLanguage] = useState(appLanguages.en);
    const [loader, setLoader] = useState(false)

    // Get the prefred language from the device Async default is "en"
    useEffect(() => {
        const loadLanguage = async () => {
            const storedLanguage = await AsyncStorage.getItem('language');
            if (storedLanguage) setLanguage(storedLanguage);
        };
        loadLanguage();
    }, []);

    // while switch language api call and fetch the data based on selected language.
    useEffect(() => {
        setLoader(true)
        i18n.locale = language
        try {
            fetchData(language)
                .then(res => {
                    setProducts(res.data.products)
                    setLoader(false)
                })
                .catch(e => {
                    setLoader(false)
                }
                )
        } catch (e) {
            setLoader(false)
        }
    }, [language]);

    // Switch language on click switch button, store language in Async.
    const switchLanguage = async () => {
        setLoader(true)
        const newLanguage = language === appLanguages.en ? appLanguages.ar : appLanguages.en;
        setLanguage(newLanguage);
        await AsyncStorage.setItem('language', newLanguage);
    };

    return (
        <View style={globalStyles.container}>
            <Header
                onPressSwitch={switchLanguage}
                language={language}
            />
            <ProductTypeList />
            {loader ?
                <Loader />
                :
                <FlatList
                    data={products}
                    numColumns={2}
                    initialNumToRender={8}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <ProductCard product={item} language={language as 'en' | 'ar'} />}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        // Load more products here
                    }}
                />
            }
        </View>
    );
};

export default ProductListScreen;
