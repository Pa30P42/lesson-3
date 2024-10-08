import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
  Linking,
  Platform,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
// Modal, Alert,Linking, Platform,
// Dimensions, ImageBackground, Image
const { width: screenWidth } = Dimensions.get("screen");
const supportUrl = "https://pixso.net/";
const errorUrl = "asladj.ad";

const blurhash = "LlKBzOWAx]fk_Nj[Rjj[-;WVRPae";

const HomePage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleOpenUrl = async () => {
    try {
      const supported = await Linking.canOpenURL(errorUrl);
      console.log("supported :>> ", supported);
      if (supported) {
        return await Linking.openURL(errorUrl);
      }

      Alert.alert("Error", "Incorrect url");
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const createAlert = () => {
    Alert.alert("Title of Alert", "Description of Alert", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      {
        text: "Done",
        onPress: () => console.log("Done Pressed"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {Platform.OS === "android" ? (
        <View
          style={{
            width: screenWidth - 40,
            backgroundColor: "green",
          }}
        >
          <Text>Only On Android</Text>
        </View>
      ) : (
        <Text>Only On iOS</Text>
      )}
      <Pressable onPress={toggleModal}>
        <Text>Open Modal</Text>
      </Pressable>
      <Pressable onPress={createAlert}>
        <Text>Open Alert</Text>
      </Pressable>
      <Pressable onPress={handleOpenUrl}>
        <Text>Open Url</Text>
      </Pressable>

      <Image
        transition={300}
        placeholder={{ blurhash }}
        contentFit="fill"
        style={styles.image}
        source="https://picsum.photos/seed/picsum/300/200"
      />

      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalInnerContainer}>
            <Text>Hello From Modal!</Text>
          </View>
          <Pressable onPress={toggleModal}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  firstContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  secondContainer: {
    flex: 1,
    backgroundColor: "green",
  },
  modalInnerContainer: {
    padding: 24,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 24,

    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    backgroundColor: "white",
    height: 200,
  },
});

export default HomePage;
