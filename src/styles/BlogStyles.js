import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  innerContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    lineHeight: 1.5,
    letterSpacing: 1.1,
    flexDirection: "row",
    alignContent: "space-between",
    flex: 1
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(79,81,179,0.7)",
    marginBottom: 10,
    flex: 2
  },
  deleteIcon: {
    fontSize: 30,
    color: "rgba(79,81,179,0.7)",
    flex: 1
  }
});

export default styles;
