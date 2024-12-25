import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'

const Camera = ({setOpenCamera, setIsPaymentDone, setUserDetail}) => {
    const [permission, requestPermission] = useCameraPermissions();
    

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleBarCodeSacnned = (data) => {
      if(data){
        setOpenCamera(false);
        setIsPaymentDone(true);
        setUserDetail(data);
      }
  }
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center", width:"100%", height:"100%"}}>
     <CameraView  style={{width:"100%", height:"100%"}} onBarcodeScanned={(data) => handleBarCodeSacnned(data)}>
     </CameraView>
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });