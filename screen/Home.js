import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Camera from "./Camera";
import PaymentReceipt from "./PaymentRecietp";

const Home = () => {
  const [selectOption, setSelectOption] = useState(null);
  const [openCamera, setOpenCamera] = useState(false);
  const [isPaymentDone, setIsPaymentDone] = React.useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [amount, setAmount] = useState(null);
  const [name, setName] = useState(null);
  const [upi, setUpi] = useState(null);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {selectOption == null && (
        <View style={{ gap: 10, width: "100%", alignItems: "center" }}>
          <Image
            source={require("../assets/image.png")}
            style={{ width: 300, height: 200 }}
          />
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: "#2CB7F8",
              alignItems: "center",
              width: "90%",
            }}
            onPress={() => {
              setSelectOption("qr");
            }}
          >
            <Text>Scan QR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: "#2CB7F8",
              alignItems: "center",
              width: "90%",
            }}
            onPress={() => {
              setSelectOption("manual");
            }}
          >
            <Text>Enter Details manually</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectOption == "qr" && (
        <View
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!openCamera && !isPaymentDone && (
            <View
              style={{
                width: "100%",
                // height: "100%",
                gap: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextInput
                value={amount}
                onChangeText={setAmount}
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 10,
                  width: "90%",
                }}
                placeholder="Enter amount"
              />
              <TouchableOpacity
                onPress={() => {
                  if (!amount) {
                    Alert.alert("Please enter amount first!");
                    return;
                  }
                  setOpenCamera(!openCamera);
                }}
                style={{
                  backgroundColor: "#2CB7F8",
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 10,
                  width: "90%",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Scan</Text>
              </TouchableOpacity>
            </View>
          )}
          {openCamera && !isPaymentDone && (
            <Camera
              setOpenCamera={setOpenCamera}
              setIsPaymentDone={setIsPaymentDone}
              setUserDetail={setUserDetail}
            />
          )}

          {!openCamera && isPaymentDone && (
            <PaymentReceipt
              userData={userDetail}
              isPaymentDone={isPaymentDone}
              setIsPaymentDone={setIsPaymentDone}
              amount={amount}
            />
          )}
        </View>
      )}

      {selectOption == "manual" && (
        <View
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!openCamera && !isPaymentDone && (
            <View
              style={{
                width: "100%",
                // height: "100%",
                gap: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextInput
                value={amount}
                onChangeText={setAmount}
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 10,
                  width: "90%",
                }}
                placeholder="Enter amount"
              />
              <TextInput
                value={name}
                onChangeText={setName}
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 10,
                  width: "90%",
                }}
                placeholder="Enter Name"
              />
              <TextInput
                value={upi}
                onChangeText={setUpi}
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 10,
                  width: "90%",
                }}
                placeholder="Enter UPI ID"
              />
              <TouchableOpacity
                onPress={() => {
                  if (!amount || !name || !upi) {
                    Alert.alert("Please fill all the details");
                    return;
                  }
                  setIsPaymentDone(true);
                }}
                style={{
                  backgroundColor: "#2CB7F8",
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  borderRadius: 10,
                  width: "90%",
                  alignItems: "center",
                }}
              >
                <Text>Pay</Text>
              </TouchableOpacity>
            </View>
          )}
          {openCamera && !isPaymentDone && (
            <Camera
              setOpenCamera={setOpenCamera}
              setIsPaymentDone={setIsPaymentDone}
              setUserDetail={setUserDetail}
            />
          )}

          {!openCamera && isPaymentDone && (
            <PaymentReceipt
              userData={userDetail}
              isPaymentDone={isPaymentDone}
              setIsPaymentDone={setIsPaymentDone}
              amount={amount}
              name={name}
              upiId={upi}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default Home;
