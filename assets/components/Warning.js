import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons, AntDesign, Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Warning = (props) => {
  const navigation = useNavigation();
  const navigateUrl = props.navigateUrl
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: '#AF4E22',
        marginVertical: 10,
        height: "auto",
        padding: 10,
        borderRadius: 12,
      }}
    >
      <View
        style={{          
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 7,
        }}
      >
        <View>
          <Text style={{ color: "white" }}>{props.utilityMonth}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="clockcircleo" size={15} color="black" />
          <Text style={{}}> Due in {props.dueIn}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: 700 }}>
          ${props.AmountRemain}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          onPress={() => {
            navigation.navigate(navigateUrl);
          }}
          style={{
            width: "100%",
            marginTop: 25,
            backgroundColor: "#fff",
            borderRadius: 6,
            borderColor: "black",
            borderWidth: 1,
            padding: 7,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 700 }}>
            {props.payNowBg}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Warning

const styles = StyleSheet.create({})