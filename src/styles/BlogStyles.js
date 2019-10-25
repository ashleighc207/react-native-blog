import { StyleSheet, Dimensions } from "react-native";
let fullWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 15
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(79,81,179,0.7)",
    marginBottom: 10
  },
  blogItem: {
    flex: 1
  },
  blogContent: {
    alignSelf: "flex-start",
    flex: 2
  },
  deleteIcon: {
    fontSize: 24,
    color: "rgba(79,81,179,0.7)",
    flexShrink: 1,
    marginLeft: 30
  }
});

export default styles;
