import { NativeBaseProvider, Box } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages'

export default function App() {
  return (
   <NativeBaseProvider>
    <Home />
   </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
