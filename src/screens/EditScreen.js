import React, { useContext, useState } from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import BlogContext from "../context/BlogContext";
import styles from "../styles/CreateStyles";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { data, editBlog } = useContext(BlogContext);
  const blog = data.find(blog => blog.id === id);
  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.body);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Edit Article</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={styles.textareaInput}
        value={body}
        onChangeText={text => setBody(text)}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          editBlog(id, title, body, () => {
            navigation.navigate("Home");
          })
        }
      >
        <Text style={styles.buttonText}> Edit Article </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen;
