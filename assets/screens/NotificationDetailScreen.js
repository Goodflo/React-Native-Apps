import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

const NotificationDetailScreen = ({ navigation, route }) => {
  const {...item } = route.params || {};
  // const {IMPORTANT} = true;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 15,
          marginVertical: 30,
        }}
      >
        <Pressable
          style={{ flex: 0.5, padding: 5 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={25} color="black" style={{}} />
        </Pressable>
        <Text style={{ fontSize: 25, fontWeight: 600 }}>Details</Text>
      </View>

      <View
        style={{
          padding: 10,
          marginHorizontal: 15,
          backgroundColor: "white",
          borderRadius: 15,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 10,
          shadowOffset: { height: 1 },
        }}
      >
        <View>
          <Text style={{ fontSize: 21, fontWeight: 700 }}>{item.title}</Text>
        </View>
        <Text style={{ fontSize: 17, marginTop: 20, marginBottom: 10 }}>
          {item.details}
        </Text>
      </View>
      {/* <View style={{ 
 
  alignItems: 'center',
  
  }}> */}
      <Pressable
        onPress={() => navigation.navigate("Notification")}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <View
          style={{
            padding: 20,
            marginHorizontal: 25,
            marginVertical: 50,
            backgroundColor: "#fff",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Mark as read</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default NotificationDetailScreen;

const styles = StyleSheet.create({});
