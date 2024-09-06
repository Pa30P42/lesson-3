import React from "react";
import { Text, Pressable, StyleSheet, ViewStyle } from "react-native";

interface Props {
  variant: "default" | "outline";
  title: string;
  buttonStyles?: ViewStyle;
  onPress: (text: string) => void;
}

const CustomButton: React.FC<Props> = ({
  variant,
  title,
  buttonStyles,
  onPress,
}) => {
  const baseStyles = variant === "default" ? styles.default : styles.outlined;

  return (
    <Pressable
      onPress={() => onPress("some text")}
      style={{ ...baseStyles, ...buttonStyles }}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  default: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#5DB075",
    borderRadius: 12,
    color: "#fff",
  },
  outlined: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: "#5DB075",
    borderRadius: 12,
    color: "#5DB075",
  },
});

export default CustomButton;
