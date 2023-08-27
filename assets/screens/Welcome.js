
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';


const Welcome = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
        <View><Image 

            source={
                require("../../assets/Welcomes.png")
            }
            style={{  resizeMode: 'contain', width: 'auto'}}

        />
        </View>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: '700', marginBottom: 20, paddingHorizontal: 20}}>
                Utility Tracker
            </Text>
            <Text style={{ fontSize: 15, color: 'gray',  fontWeight: '500', paddingHorizontal: 5, marginBottom: 40}}
            >Have efficient home</Text>
        
        <TouchableOpacity 
        style={{ backgroundColor: 'yellow', paddingVertical: 15, 
        alignItems: 'center', borderRadius: 20, width: "90%", alignItems: 'center' }}>
           <Text style={{ fontSize: 20, fontWeight: 500 }}
           onPress={() => navigation.push("Profile")}
           > Let's start</Text>
        </TouchableOpacity></View>
    </View>
  )
}

export default Welcome;

const styles = StyleSheet.create({})