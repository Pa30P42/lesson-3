import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
  },
  imageContainer: {
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    width: 50,
    height: 50,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
