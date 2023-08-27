import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import Warning from '../components/Warning';
import {MaterialIcons, Ionicons, AntDesign} from '@expo/vector-icons';

const BillInfo = [
  {
    id: 1,
    infoName: 'Cost',
    percentageInMonth: '20%' 
  }, 
  {
    id: 2,
    infoName: 'Consumption',
    percentageInMonth: '60%' 
  }, 
  {
    id: 3,
    infoName: 'Savings',
    percentageInMonth: '72%' 
  }, 
  
]
const UtilityInfo = ({navigation, route}) => {
  const {...item } = route.params;
  
  return (
    <SafeAreaView style={{flex: 1,marginHorizontal: 10, }}>
    <View style={{flexDirection: 'row', alignItems: 'center', top:15 ,marginVertical: 20}}>
    <Pressable style={{flex: 0.5, padding: 5,}} onPress={()=>{navigation.navigate("Menu")}}>
    <AntDesign name="left" size={25} color="black" style={{ fontWeight: 900}}/>
    </Pressable>
    <Text style={{ fontSize: 25, fontWeight: 600}}>{item.name}</Text>
     </View> 
       <View style={{  }}>
        <Warning 
      bgColor="black"
      payNowBg="Pay Now"
      dueIn="15 Days"
      AmountRemain={item.price}
      utilityMonth="October"
      navigateUrl= "Payment"
      /></View>
      <View>
        <Text style={{fontSize: 20, marginVertical: 5, fontWeight: 'bold'}}>
          Your Billing info
        </Text>
      </View>
      <View style={{backgroundColor: '#56ac00', borderRadius: 12, marginVertical: 20 }}>
        <FlatList
         data={BillInfo}
         key={item => item.id}
         renderItem={({item})=><View style={{
          // backgroundColor: 'grey', 
          flexDirection: 'row',
           justifyContent: 'space-between', 
           alignItems: 'center',
           margin: 10,
           padding: 5,
           
           
           }}> 
         <Text style={{flex: 0.3}}>{item.infoName}</Text>
         <View style={{height: 7, backgroundColor: 'black', flex: 0.5,}}></View>
         <Text> {item.percentageInMonth} </Text>
         
         </View>}

         
         /></View>
         <TouchableOpacity 
      style={{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        marginVertical: 15,
        borderRadius: 10,
        backgroundColor: 'white'
           
           }} onPress={()=> {navigation.navigate("Notification")}}>
           
        <Text style={{fontWeight: 600}}>Notifications</Text>
        <Text>See all</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {navigation.navigate("Notification")}} style={{
         
         flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        marginVertical: 15,
        borderRadius: 10,
        backgroundColor: 'white'
        
        }}>
      <Ionicons name='notifications' size={24} color="black" />
      <Text style={{fontWeight: 600, marginHorizontal: 10}}>Notification Preview when it's avaliable</Text>
      <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default UtilityInfo

const styles = StyleSheet.create({})