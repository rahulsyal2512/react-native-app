import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  inputText: {
    borderBottomWidth: 2,
    borderBottomColor: "silver",
    width: "70%"
  }
});

const Input = () => {
  return (
    <View style={styles.inputText}>
      <TextInput
        value={this.props.value}
        placeholder="Enter Anything here"
        onChangeText={this.props.changeName}
      />
    </View>
  );
};
export default Input;
