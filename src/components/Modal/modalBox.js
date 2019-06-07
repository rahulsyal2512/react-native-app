import React from 'react';
import { View, Text, Modal, Image, Button, StyleSheet } from 'react-native';

const ModalBox = props => {
    let ModalContent = null;
    if (props.selectedPlace) {
        ModalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.image} ></Image>
                <Text style= {styles.text}>{props.selectedPlace.value}</Text>
            </View>
        )
    }
    return (
        <Modal onRequestClose={props.close} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.ModalContainer}>
                {ModalContent} 
                <Button title="Delete" color="red" onPress={props.itemDelete} style={styles.button}></Button>
                <Button title="Close" onPress={props.close} style={styles.button}></Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    ModalContainer: {
        margin: 20
    },
    image: {
        height:200,
        width: "100%"
    },
    text:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 28
    },
    button:{
        width: "30%"
    }
})

export default ModalBox;
