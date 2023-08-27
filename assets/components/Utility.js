import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Utility = (props) => {
  return (
    
    <View style={{
        backgroundColor: '#3fa',
         width: 170, height: 130,
         borderRadius: 10, display: 'flex', flexDirection:'column', padding: 5}}>
    <View style={{backgroundColor: 'yellow', borderRadius: 50/2, width: 50, height: 50, padding: 10 }}>{props.utilityLogo}</View>
    <Text style={{fontSize: 21, fontWeight: 700, marginTop: 10}}>${props.payBill}</Text>
     <Text>{props.utilityName}</Text>
    </View>
      
    
  )
}

export default Utility

const styles = StyleSheet.create({})