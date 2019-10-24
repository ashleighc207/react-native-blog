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

const HomeScreen = ({ navigation }) => {
  const { data, addBlog, deleteBlog } = useContext(BlogContext);
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
        style={{ flex: 1 }}
        keyExtractor={data => {
          return data.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <Blog
                title={item.title}
                body={item.body}
                id={item.id}
                deleteBlog={() => deleteBlog(item.id)}
              />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default HomeScreen;
