
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/splashScreen';
import SignIn from './src/auth/signIn';
import SignUp from './src/auth/signUp';
import SetUpPage from './src/profile/setUpPage';
import AliasPage from './src/profile/alias/aliasPage';
import RealId from './src/profile/realId/realId';
import CareToShare from './src/profile/realId/careToShare';
const Stack = createStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SetUpPage" component={SetUpPage} options={{ headerShown: false }} />
        <Stack.Screen name="AliasPage" component={AliasPage} options={{ headerShown: false }} />
        <Stack.Screen name="RealId" component={RealId} options={{ headerShown: false }} />
        <Stack.Screen name="CareToShare" component={CareToShare} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}



export default App;
