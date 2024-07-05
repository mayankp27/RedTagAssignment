import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState([]);

    // Load cart data first time from Async and store.
    useEffect(() => {
        const loadCart = async () => {
            const storedCart = await AsyncStorage.getItem('cart');
            if (storedCart) setCart(JSON.parse(storedCart));
        };
        loadCart();
    }, []);

    // Update cart items in Async
    useEffect(() => {
        AsyncStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Call when user add product in card and than store Array in Async as well.
    const addToCart = (product: {}) => {
        setCart([...cart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
