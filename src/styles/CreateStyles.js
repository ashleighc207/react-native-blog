import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    marginVertical: 40,
    fontSize: 20,
    color: "rgba(79,81,179,0.7)"
  },
  textInput: {
    height: 40,
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(79,81,179,1.0)",
    fontSize: 18,
    marginBottom: 20
  },
  textareaInput: {
    height: 100,
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(79,81,179,1.0)",
    fontSize: 18
  },
  button: {
    backgroundColor: "rgba(79,81,179,1.0)",
    height: 52,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 29,
    marginTop: 50
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20
  }
});

export default styles;
