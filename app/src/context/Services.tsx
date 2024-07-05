import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiUrls, appLanguages } from '../constant/Utility';

// Fetch Data from API
export const fetchData = async (language?: string) => {
    const storedLanguage = await AsyncStorage.getItem('language')
    const lang = language ?? storedLanguage ?? appLanguages.en
    const url = apiUrls.fetchAllProduct + `?lang=${lang}`
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}