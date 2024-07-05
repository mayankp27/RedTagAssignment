import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './context/CartContext';
import ProductListScreen from './screens/ProductListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    // Use contex for State management.
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
