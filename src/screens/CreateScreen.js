import React, { useContext, useState } from "react";
import { Text, TextInput, Button, View, TouchableOpacity } from "react-native";
import BlogContext from "../context/BlogContext";
import styles from "../styles/CreateStyles";

const CreateScreen = ({ navigation }) => {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Add a New Article</Text>
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
          addBlog(title, body, () => {
            navigation.navigate("Home");
          })
        }
      >
        <Text style={styles.buttonText}> Add Article </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateScreen;
