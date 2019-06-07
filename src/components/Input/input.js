import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  inputText: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: "70%"
  }
});

const Input = () => {
  return (
    <View style={styles.inputText}>
      <TextInput
        value={this.props.value}
        placeholder="Awesome text here"
        onChangeText={this.props.changeName}
      />
    </View>
  );
};
export default Input;
