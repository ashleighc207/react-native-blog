import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import BlogContext from "../context/BlogContext";
import Blog from "../components/Blog";
import styles from "../styles/HomeStyles";

const HomeScreen = () => {
  const { data, addBlog } = useContext(BlogContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Recent Blogs</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={addBlog}>
          <MaterialIcons name="add" style={styles.newIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={data => data.title}
        renderItem={({ item }) => {
          return <Blog title={item.title} body={item.body} />;
        }}
      ></FlatList>
    </View>
  );
};

export default HomeScreen;
