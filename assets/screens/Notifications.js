import { StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable, SafeAreaView} from 'react-native'
import React from 'react'
import {MaterialIcons, Ionicons, AntDesign} from '@expo/vector-icons';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const NotifyPreview = [
  {
    id: 1,
    details: "this is a message for you to subscribe to my youtube channel, Now!!",
    title: "Reminder for the bell icon Activation the bell icon, go ahead and click it Now!!!"
  },
  {
    id: 2,
    title: "Reminder for the bell icon Activation ",
    details: "if you haven't click on the bell icon, go ahead and click it Now!!!"
  },
  {
    id: 3,
    details: "this is a message for you to subscribe to my youtube channel, Now!!",
    title: "Reminder for the bell icon Activation the bell icon, go ahead and click it Now!!!"
  },
  {
    id: 4,
    title: "Reminder for the bell icon Activation ",
    details: "if you haven't click on the bell icon, go ahead and click it Now!!!\  making it over 2000 years old. Richard McClintock,a Latin professor at Hampden-Sydney College in Virginia, \ looked up one of the more obscure Latin words, consectetur"
  },
  {
    id: 5,
    title: "Where does it come from?",
    details: "Contrary to popular belief,Lorem Ipsum is not simply random text.\It has roots in a piece of classical Latin literature from 45 BC,"
    
  },
  {
    id: 6,
    title: "Reminder for the bell icon Activation ",
    details: "if you haven't click on the bell icon, go ahead and click it Now!!!\
    if you haven't click on the bell icon, go ahead and click it\
    if you haven't click on the bell icon, go ahead and click it Now!!!,\
     if you haven't click on the bell icon, go ahead and click it Now!!!"

    
    
  }

]

const Notifications = ({ navigation, route }) => {
   const {...item} = route.params || {};  
  // console.log(item);
  const IMPORTANT = false;
  
  return (
   
    <View style={{ padding: 10,}}>
    <SafeAreaView>
    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
    <Pressable style={{flex: 0.5, padding: 5,}} onPress={()=>{navigation.navigate("Menu")}}>
    <AntDesign name="left" size={25} color="black" style={{ fontWeight: 900}}/>
    </Pressable>
    <Text style={{ fontSize: 25, fontWeight: 600}}>Notifications</Text>
     </View> 

    </SafeAreaView>
      <FlatList 
        data={NotifyPreview}
        // numColumns={2}
        key={item => item.id}
        
        renderItem={({item}) =><View  style={{alignItems: 'center' }}>
          <Pressable 
          elevation={3}
           style={{
               
              shadowColor: "#000000",
              shadowOpacity: 0.9,
              shadowRadius: 1,
              shadowOffset: {
                height: 1},
              
              padding: 25,
              backgroundColor: 'white',
              marginBottom: 10, 
              flexDirection: 'row',
              borderRadius: 10,
              justifyContent: 'space-between',
              alignItems: 'center'
              }} 
            onPress={()=>{navigation.navigate("NotificationDetails", {...item, IMPORTANT})}} >
             <Ionicons name={IMPORTANT ?'notifications-outline' : 'notifications' }  size={25} color="black" />

            <Text style={{paddingHorizontal: 10, flex: 1}}>{item.title}</Text>
            <AntDesign name="right" size={24} color="black" />
          </Pressable>
      
       </View>
         
        }
      />





    </View>
  );
}

export default Notifications

const styles = StyleSheet.create({})