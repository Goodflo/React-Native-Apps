import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ExperimentScreen = () => {
  return (
    <ScrollView
    scrollEnabled={true}
      contentContainerStyle={{
        padding: 10,
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    ><View style={{flex: 1,
        justifyContent: "center",
        backgroundColor: "#000000",
        alignItems: "center",}}>
      <View style={styles.centerBorder}>
        <Text>ExperimentScreen</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.box}>
        <Text>Before</Text>
        <View style={styles.afterContent} />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Before</Text>
        <View style={styles.afterContent} />
      </View>
    
    </View>
   
    </View>
    </ScrollView>
  );
}

export default ExperimentScreen

const styles = StyleSheet.create({
  centerBorder: {
    backgroundColor: "green",
    width: 200,
    height: 200,
    borderWidth: 5, // The total width of the border
    borderColor: "red", // Border color
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius:20,
    
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    position: 'relative',
    width: 200,
    height: 100,
    backgroundColor: 'blue',
  },
  afterContent: {
    position: 'absolute',
    content: '',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    backgroundColor: 'red',
  },

});
