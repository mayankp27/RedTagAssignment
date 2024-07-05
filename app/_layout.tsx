
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import App from './src/App';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Register app HOC here. */}
      <App />
    </GestureHandlerRootView>
  );
};

export default Layout;