import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Welecome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:80, width:"100%", height:"100%", alignItems:"center"}}>
        <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 40 }}>
          Let's Get Started
        </Text>
        <View>
          <Image
            source={require("../assets/welcome.png")}
            style={{ width: 350, height: 400}}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              padding: 5,
              borderRadius: 7,
              alignItems: "center",
              marginTop: 50,
              marginBottom:10
            }}
            onPress={()=>navigation.navigate("Register")}
          >
            <Text style={{ fontSize: 20, fontWeight: "semibold" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize:20, alignSelf:"center"}}>Or</Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text style={{ fontSize: 15 }}>Already have an accoutn? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Text style={{ fontSize: 15, color: "orange" }}>Sing in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#6D5ACF",
    alignItems: "center",
  },
});

export default Welecome;
