import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { ThemedText } from "../ThemedText";

// Flatlist, Scrollview,
// SectionList
// Image
// Modal
// ImageBackground
// KeyboardAvoidingView

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <View>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Header</Text>
          <Text>8m ago</Text>
        </View>
        <Text style={{ flexWrap: "wrap" }}>
          He'll want to use your yacht, and I don't want this thing smelling
          like fish.
        </Text>
      </View>
    </View>
  );
};

export default Card;
