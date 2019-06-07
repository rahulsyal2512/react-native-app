import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Input extends Component {
    render() {
        return (
            <View style={styles.inputText}>
                <TextInput 
                value={this.props.value}
                placeholder="Awesome text here"
                onChangeText={this.props.changeName} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputText: {
        borderBottomWidth: 2,
        borderBottomColor: "black",
        width: "70%",
    },
})
