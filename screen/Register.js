import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const Register = ({navigation}) => {
  return (
    // <ScrollView>
      <SafeAreaView
        style={{
          backgroundColor: "#6D5ACF",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "100%", alignItems: "center", marginTop: 100 }}>
          <Image
            source={require("../assets/welcome.png")}
            style={{ width: 200, height: 200, marginBottom: 20 }}
          />
          <View style={styles.FormContainer}>
            <View style={{ width: "100%" }}>
              <Text>Full Name</Text>
              <TextInput
                style={{
                  backgroundColor: "#ebeded",
                  padding: 5,
                  width: "90%",
                  marginTop: 5,
                  borderRadius: 10,
                }}
                placeholder="John Deo"
              />
            </View>
            <View style={{ width: "100%" }}>
              <Text>Email</Text>
              <TextInput
                style={{
                  backgroundColor: "#ebeded",
                  padding: 5,
                  width: "90%",
                  marginTop: 5,
                  borderRadius: 10,
                }}
                placeholder="abc@gmail.com"
              />
            </View>
            <View style={{ marginTop: 10, width: "100%" }}>
              <Text>Password</Text>
              <TextInput
                style={{
                  backgroundColor: "#ebeded",
                  padding: 5,
                  width: "90%",
                  marginTop: 5,
                  borderRadius: 10,
                }}
                placeholder="abc12345@"
                secureTextEntrysfs
              />
            </View>
            <View style={{ width: "100%" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "orange",
                  padding: 5,
                  borderRadius: 7,
                  alignItems: "center",
                  marginTop: 50,
                  marginBottom: 10,
                  width: "90%",
                }}
              >
                <Text>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>Or</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 50 }}
            >
              <Image
                source={require("../assets/google.png")}
                style={{ width: 60, height: 60 }}
              />
              <Image
                source={require("../assets/facebook.png")}
                style={{ width: 50, height: 50 }}
              />
              <Image
                source={require("../assets/github.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={{ flexDirection: "row", gap: 2, marginTop: 20 }}>
              <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text
                  style={{
                    fontWeight: "semibold",
                    fontSize: 15,
                    color: "orange",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  FormContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    paddingLeft: 20,
    gap: 5,
    alignItems: "center",
  },
});

export default Register;
