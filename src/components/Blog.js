import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/BlogStyles";
import { MaterialIcons } from "@expo/vector-icons";

const Blog = ({ title, body }) => {
  return (
    <View style={styles.innerContainer}>
      <View>
        <Text style={styles.blogTitle}>{title}</Text>
        <Text style={styles.blogContent}>
          {body.length > 240 ? body.substr(0, 240) + "..." : body}
        </Text>
      </View>
    </View>
  );
};

export default Blog;
