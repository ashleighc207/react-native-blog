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
          return (
            <View style={styles.innerContainer}>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Text style={styles.blogContent}>
                {item.body.length > 240
                  ? item.body.substr(0, 240) + "..."
                  : item.body}
              </Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "bold",
    color: "rgba(79,81,179,1.0)"
  },
  innerContainer: {
    marginHorizontal: 40,
    marginVertical: 20,
    lineHeight: 1.5,
    letterSpacing: 1.1
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(79,81,179,0.7)",
    marginBottom: 10
  },
  newIcon: {
    fontSize: 30,
    color: "#ffffff"
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  iconContainer: {
    backgroundColor: "rgba(79,81,179,1.0)",
    borderRadius: 50
  }
});

export default HomeScreen;
