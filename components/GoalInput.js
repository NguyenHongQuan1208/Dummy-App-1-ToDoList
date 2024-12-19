import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnterGoalState] = useState("");
  function goalInputHandler(enteredText) {
    setEnterGoalState(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enterGoalText);
    setEnterGoalState("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!!"
          placeholderTextColor="#ffffff"
          onChangeText={goalInputHandler}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="#f31282"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="And Goal"
              onPress={addGoalHandler}
              color="#5e0acc"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b8b",
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    width: "100%",
    borderRadius: 6,
    padding: 8,
    color: "#ffffff",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
