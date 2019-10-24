import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
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
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 30
  },
  iconContainer: {
    backgroundColor: "rgba(79,81,179,1.0)",
    borderRadius: 50,
    padding: 2
  }
});

export default styles;
