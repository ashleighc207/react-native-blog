import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import BlogContext from "../context/BlogContext";
import styles from "../styles/ShowStyles";
import { MaterialIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { data } = useContext(BlogContext);
  const blog = data.find(blog => blog.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{blog.title}</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="edit"
            style={styles.editIcon}
            onPress={() => navigation.navigate("Edit", { id: id })}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.blogContainer}>
        <View style={styles.verticalBar}>
          <Text></Text>
        </View>
        <Text style={styles.body}>{blog.body}</Text>
      </View>
    </View>
  );
};

export default ShowScreen;
