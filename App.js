import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  BackHandler,
} from "react-native";

const App = () => {
  const [exitApp, setExitApp] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const Exit = () => {
    BackHandler.exitApp();
  };

  useEffect(() => {
    const back = BackHandler.addEventListener("HardwareBackPress", (e) => {
      // setTimeout(() => {
      //   setExitApp(0);
      // }, 1000);

      Alert.alert(
        "Exit App",
        "Exiting the application?",
        [
          {
            text: "Exit",
            onPress: () => {
              BackHandler.exitApp();
            },
            style: "cancel",
          },
          {
            text: "No",
            onPress: () => {
              console.log("No Pressed");
            },
          },
        ],
        {
          cancelable: false,
        }
      );
      return true;
    });
  });

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHead}>Logout From App</Text>
            <Text style={styles.modalText}>
              Do you want to logout from App?
            </Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={Exit}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Logout Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 100,
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F875AA",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalHead: {
    // flex:1,
    width: 250,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 16,
    // backgroundColor: "#FFFBF5",
    flexDirection: "row",
    fontWeight: "bold",
    borderRadius: 15,
  },
});

export default App;
