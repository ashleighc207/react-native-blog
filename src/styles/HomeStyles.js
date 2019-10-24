import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "bold",
    color: "rgba(79,81,179,1.0)"
  },
  newIcon: {
    fontSize: 30,
    color: "#ffffff"
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  iconContainer: {
    backgroundColor: "rgba(79,81,179,1.0)",
    borderRadius: 50
  }
});

export default styles;
