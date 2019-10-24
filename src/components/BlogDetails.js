import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/BlogStyles";
import { MaterialIcons } from "@expo/vector-icons";

const BlogDetails = ({ title, body }) => {
  return (
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.blogTitle}>{title}</Text>
        <MaterialIcons name="delete" />
      </View>
      <Text style={styles.blogContent}>{body}</Text>
    </View>
  );
};

export default BlogDetails;
