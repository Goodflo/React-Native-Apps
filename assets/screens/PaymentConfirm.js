import { StyleSheet, Text, View, Pressable ,SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome5,AntDesign} from '@expo/vector-icons';

const PaymentConfirm = ({navigation, route}) => {
    const {...item} = route.params || {};
  return (
    <SafeAreaView style={{flex: 1, }}>
    {/* header icon */}
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30,}}>
      
    
    <Pressable style={{ padding: 5,}} onPress={()=>{navigation.goBack()}}>
    <AntDesign name="left" size={30} color="black" />
    </Pressable>
     </View>
     {/* header icon closed */}
<View style={{ flex: 1,}}>
<View style={{alignItems: 'center', padding: 10, marginHorizontal:10, marginVertical: 30, fontSize: 21, }}>
<Text style={{ fontSize: 24, fontWeight: 'bold'}}>Payment for { item.utilityName} </Text>
<Text  style={{ fontSize: 24, fontWeight: '500'}}> {item.month} 2023</Text></View>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
     <View style={{width: 200, height: 200, 
        borderRadius: 200/2 , borderWidth: 2,
     backgroundColor: '#964B00',    
     alignItems: 'center',
     margin: 10,
     borderColor: 'yellow',
     justifyContent: "center"}}>
     <FontAwesome5 name="donate" size={50} color="black" />
     <View style={{flexDirection: 'row', margin: 10}}>
     <Text style={{fontSize: 20}}>$</Text>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>{item.amount}</Text></View>
     </View></View>
{/* <View style={{ 
 
  alignItems: 'center',
  
  }}> */}
  <Pressable onPress={()=>navigation.navigate("Notification", {IMPORTANT} )} 
   style={{justifyContent: 'flex-end',}}>
  <View 
  style={{ padding: 20, marginHorizontal: 25, marginVertical: 50,  
  backgroundColor: '#fff',
   alignItems: 'center', 
   borderRadius: 12}}><Text style={{ fontSize: 20, fontWeight: 'bold', color: '#946B00'}}>Pay now</Text>
   </View>
   </Pressable>
   </View>
  </SafeAreaView>
    
  )
}

export default PaymentConfirm

const styles = StyleSheet.create({})