import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

const paidItems = [
  { id: 1, utilityName: "Internet", month: "August", amount: 100.0 },
  { id: 2, utilityName: "Water", month: "March", amount: 45.77 },
  { id: 3, utilityName: "Health", month: "May", amount: 76.34 },
  { id: 4, utilityName: "Betting", month: "June", amount: 121.39 },
  { id: 5, utilityName: "Electricity", month: "October", amount: 100.07 },
  { id: 6, utilityName: "Netflix", month: "July", amount: 32.58 },
];
const Payments = ({ navigation, route }) => {
const { ...item } = route.params || {};

  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 10,  }}>
      <ScrollView  scrollEnabled={true} showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        
        flexGrow: 1,
        // justifyContent: "center",
        // backgroundColor: "#fff",
        // alignItems: "center",
      }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Pressable
            style={{ flex: 0.5, padding: 5 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={30} color="black" style={{}} />
          </Pressable>
          <Text style={{ fontSize: 25, fontWeight: 600, margin: 20 }}>
            Payments
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            padding: 30,
            margin: 10,
            marginBottom: 30,
            paddingVertical: 30,
            borderRadius: 20,
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              padding: 10,
              color: "white",
            }}
          >
            All your payments are on time. Thank you!
          </Text>
        </View>
        <View>
        <Text style={{ marginHorizontal: 15, fontSize: 17, fontWeight: 700 }}>
          History of payments
        </Text></View>
        {/* <View style={{ backgroundColor: "red", flex: 1}}> */}
          <View  >
            <FlatList
              data={paidItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("PaymentConfirm", { ...item });
                  }}
                >
                  <View
                    elevation={1}
                    style={{
                      flexDirection: "row",
                      padding: 30,
                      backgroundColor: "#fff",
                      margin: 10,
                      justifyContent: "space-between",
                      borderRadius: 20,
                      shadowColor: "#000000",
                      shadowOpacity: 0.8,
                      shadowRadius: 5,
                      shadowOffset: { height: 1 },
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: 600 }}>
                      {item.month} {item.utilityName.toLowerCase()}{" "}
                    </Text>
                    <Text style={{ fontSize: 15 }}>${item.amount}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View></ScrollView>
        </View>
      {/* </View> */}
      
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({});
