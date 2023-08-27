import {Pressable, Text, View } from 'react-native'
import * as React from 'react';
import Welcome from '../screens/Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './Profile';
import NotificationDetailScreen from '../screens/NotificationDetailScreen';
import PaymentConfirm from '../screens/PaymentConfirm';
import UtilityInfo from '../screens/UtilityInfo';
import ExperimentScreen from '../screens/ExperimentScreen';

function HomeScreen({navigation}) {
  const Stack = createNativeStackNavigator();
    return (
      // <View> 
      //   <Welcome navigation={navigation}/>
      // </View>

      <Stack.Navigator>
       
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false }}/>
        <Stack.Screen name='NotificationDetails' component={NotificationDetailScreen} options={{headerShown: false }}/>
        <Stack.Screen name='PaymentConfirm' component={PaymentConfirm} options={{headerShown: false }}/>
        <Stack.Screen name='UtilityInfo' component={UtilityInfo} options={{headerShown: false }}/>
        <Stack.Screen name='ExperimentScreen' component={ExperimentScreen} />
      </Stack.Navigator>
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Screen</Text>
      //   <Pressable style={{padding: 10, backgroundColor: '#fff', color: 'white' }} 
      //   onPress={() => navigation.navigate("Profile")   }><Text>Profile Screen</Text></Pressable>
      // </View>
    );
  }
export default HomeScreen;

