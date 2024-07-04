// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './context/CartContext';
import ProductListScreen from './screens/ProductListScreen';

const Stack = createStackNavigator();

const App = () => {
  const shouldBeRTL = true;

  return (
    <CartProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false
            }}
            name="Products"
            component={ProductListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
