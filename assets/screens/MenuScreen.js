import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Warning from "../components/Warning";
import Utility from "../components/Utility";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

const utilities = [
  {
    id: 1,
    logo: <MaterialIcons name="medical-services" size={24} color="black" />,
    price: 307.91,
    name: "Betting",
  },

  {
    id: 2,
    logo: <MaterialIcons name="medical-services" size={24} color="black" />,
    price: 254.22,
    name: "Airtime/data",
  },
  {
    id: 3,
    logo: <MaterialIcons name="medical-services" size={24} color="black" />,
    price: 189.34,
    name: "Electricity",
  },
  {
    id: 4,
    logo: <MaterialIcons name="medical-services" size={24} color="black" />,
    price: 261.34,
    name: "Health",
  },
];

const MenuScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        marginHorizontal: 10,
        alignItems: "center",
      }}
    >
      <Warning
        bgColor="black"
        payNowBg="Pay Now"
        dueIn="15 Days"
        AmountRemain="390.75"
        utilityMonth="October"
        navigateUrl="ExperimentScreen"
      />

      <View
        style={{
          marginTop: 15,
          width: "100%",
        }}
      >
        <FlatList
          data={utilities}
          numColumns={2}
          key={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("UtilityInfo", { ...item });
              }}
            >
              <Utility
                utilityLogo={item.logo}
                payBill={item.price}
                utilityName={item.name}
              />
            </TouchableOpacity>
          )}
          columnWrapperStyle={{ justifyContent: "space-between", margin: 10 }}
        />

        {/* <Utility
        utilityLogo=<MaterialIcons name="medical-services" size={24} color="black" />
        payBill=''
        utilityName='Electricity'
         /> */}
      </View>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 15,
          marginVertical: 15,
          borderRadius: 10,
          backgroundColor: "white",
        }}
        onPress={() => {
          navigation.navigate("Notification");
        }}
      >
        <Text style={{ fontWeight: 600 }}>Notifications</Text>
        <Text>See all</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Notification");
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          padding: 20,
          alignItems: "center",
          margin: 10,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: "white",
          borderColor: "rgba(158, 150, 150, .5)",
        }}
      >
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={{ fontWeight: 600 }}>
          Notification Preview when it's avaliable
        </Text>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
