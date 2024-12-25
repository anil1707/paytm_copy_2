import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { formatDate } from "../utils/formatDate";
import { numberToWords } from "../utils/NumberToWord";
import Feather from '@expo/vector-icons/Feather';

const PaymentReceipt = ({
  userData,
  isPaymentDone,
  setIsPaymentDone,
  amount,
  name,
  upiId
}) => {
  console.log("userData", userData);
  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        onPress={() => {
          setIsPaymentDone(!isPaymentDone);
        }}
        style={{
          position: "absolute",
          top: 40,
          left: 15,
          
        }}
      >
        <Image 
        style={{ width: 30, height: 25, resizeMode: "contain" }}
        source={require("../assets/leftArrow.png")} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          style={{ width: 200, height: 100, resizeMode: "contain" }}
          source={require("../assets/image.png")}
        />
      </View>

      {/* Payment Info */}
      <View style={{ width: "100%", marginBottom: 20 }}>
        <View style={styles.paymentInfoContainer}>
          <Text style={styles.paymentStatus}>Payment Successful</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginVertical: 10,
            }}
          >
            <Text style={styles.amount}>₹{amount}</Text>
            <Image
              style={{ width: 50, height: 50, resizeMode: "contain" }}
              source={require("../assets/success_tick.png")}
            />
          </View>
          <Text style={styles.amountWords}>
            Rupees {numberToWords(20000)} Only
          </Text>
        </View>
        <View style={{ height: 10, backgroundColor: "#32BAF5" }}></View>
        <View
          style={{
            height: 10,
            backgroundColor: "#0C3574",
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        ></View>
      </View>

      {/* Transaction Details */}
      <View style={styles.transactionDetails}>
        <View style={styles.row}>
          <Text style={styles.label}>To:</Text>
          <Text style={styles.value}>
            {name ? name : decodeURIComponent(userData?.data?.split("=")[2])}
          </Text>
        </View>
        <Text style={styles.subValue}>
          UPI ID:{" "}
          {upiId ? upiId : decodeURIComponent(userData?.data?.split("=")[1]?.split("&")[0])}
        </Text>

        <View style={{ height:0, borderTopWidth:2, borderStyle:"dashed", borderColor:"#ACACAC", marginVertical:15 }}></View>

        <View style={styles.row}>
          <Text style={styles.label}>From:</Text>
          <Text style={styles.value}>Anil Kumar Yadav</Text>
        </View>
        <Text style={styles.subValue}>HDFC Bank - 6387</Text>

        <View style={styles.row}>
          <Text style={styles.label}>UPI Ref ID:</Text>
          <Text style={styles.value}>346828076711</Text>
        </View>
        <Text style={styles.subValue}>{formatDate(new Date())}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered By</Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"center" }}>
          <Image
            style={{ width: 80, height: 50, resizeMode: "contain" }}
            source={require("../assets/upi.png")}
          />
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003DB6",
  },
  subHeaderText: {
    fontSize: 14,
    color: "#757575",
    marginTop: 5,
  },
  paymentInfoContainer: {
    width: "100%",
    backgroundColor: "#DEF6FF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    paddingVertical: 30,
  },
  paymentStatus: {
    fontSize: 25,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#212121",
    marginVertical: 10,
  },
  amountWords: {
    fontSize: 18,
  },
  transactionDetails: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    elevation: 2,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 5,
    width: "90%",
  },
  label: {
    fontSize: 14,
    color: "#757575",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#212121",
  },
  subValue: {
    fontSize: 12,
    color: "#757575",
    marginBottom: 10,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ACACAC",
  },
  footerLogos: {
    fontSize: 12,
    color: "#212121",
  },
});

export default PaymentReceipt;
