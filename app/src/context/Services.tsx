import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchData = async (language?: string) => {
    const storedLanguage = await AsyncStorage.getItem('language')
    const lang = language ?? storedLanguage ?? "en"
    return fetch(`https://shopifyapptst1.bma.ae/react-native-exercise/?lang=${lang}`)
        .then(response => response.json())
        .then(data => data);
}