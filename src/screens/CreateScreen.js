import React, { useContext } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import BlogContext from "../context/BlogContext";
import styles from "../styles/ShowStyles";
import { MaterialIcons } from "@expo/vector-icons";

const CreateScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { data } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text> create</Text>
    </View>
  );
};

export default CreateScreen;
