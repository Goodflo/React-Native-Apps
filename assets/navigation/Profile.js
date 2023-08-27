
import { Text, View, Image , Pressable} from 'react-native'
import * as React from 'react'
import MenuScreen from '../screens/MenuScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from '../screens/Notifications';
import Payments from '../screens/Payments';
import { MaterialIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

function ProfileScreen() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
    return (
      <Tab.Navigator initialRouteName='Menu'>

        <Tab.Screen name='Menu' component={MenuScreen} options={{
          headerShown: false,
          tabBarIcon: ({focused})=>{
              return <Ionicons name={focused ? "home" : "home-outline"} size={24} color="black" />

            
          }}} />

        <Tab.Screen 
        name='Notification'
        component={Notifications} 
        options={{
          headerShown: false,
          tabBarBadge: 1,
          tabBarIcon: ({focused})=>{
            return <Ionicons name={focused ? "notifications": 'notifications'} size={24} color="black" />
          }}}/>

        <Tab.Screen name='Payment' component={Payments} options={{
          headerShown: false,
         tabBarIcon: ({focused})=>{
            return <MaterialIcons name={focused ? "payments" : "payment"} color={"black"} size={24} />
          }}}/>
      </Tab.Navigator>

    );
  }
export default ProfileScreen;

