import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/BlogStyles";
import { MaterialIcons } from "@expo/vector-icons";

const Blog = ({ title, body, id, deleteBlog }) => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.blogItem}>
        <Text style={styles.blogTitle}>{title}</Text>
        <Text style={{ flexShrink: 1 }}>
          {body.length > 80 ? body.substr(0, 80) + "..." : body}
        </Text>
      </View>
      <TouchableOpacity onPress={deleteBlog} style={styles.deleteIconContainer}>
        <MaterialIcons name="delete" style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Blog;
