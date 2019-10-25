import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 15,
    flex: 1
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(79,81,179,0.7)",
    marginBottom: 10,
    flex: 1
  },
  verticalBar: {
    borderWidth: 2,
    borderColor: "rgba(79,81,179,0.7)",
    marginRight: 15
  },
  body: {
    flex: 1,
    fontSize: 18,
    color: "#424242"
  },
  blogContainer: {
    flexDirection: "row"
  },
  editIcon: {
    fontSize: 22,
    color: "rgba(79,81,179,0.7)"
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 20
  }
});

export default styles;
