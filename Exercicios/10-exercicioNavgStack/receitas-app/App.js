import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './Screens/HomeScreen';
import ReceitaScreen from './Screens/ReceitaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Receitas Deliciosas' }}
          />
          <Stack.Screen
            name="Receita"
            component={ReceitaScreen}
            options={{ title: 'Detalhes da Receita' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
