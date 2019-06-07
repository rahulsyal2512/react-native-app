import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, View, Button } from "react-native";

import ListItems from "./src/components/ListItems/ListItems";
import Input from "./src/components/Input/input";
import ModalBox from "./src/components/Modal/modalBox";

export default class App extends Component {
  state = {
    placeName: "",
    text: [],
    selectedPlace: null
  };

  changeName = value => {
    this.setState({
      placeName: value
    });
  };

  selected = index => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.text.find(place => {
          return place.key === index;
        })
      };
    });
  };

  itemDeletes = index => {
    this.setState(prevState => {
      return {
        text: prevState.text.filter(place => {
          return place.key !== index;
        })
      };
    });
  };

  itemDelete = () => {
    this.setState(prevState => {
      return {
        text: prevState.text.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  close = () => {
    this.setState({
      selectedPlace: null
    });
  };

  addText = () => {
    if (this.state.placeName.trim() === "") {
      return;
    } else {
      this.setState(prevState => {
        return {
          text: prevState.text.concat({
            key: Math.random().toString(),
            value: this.state.placeName,
            image: {
              uri:
                "https://compass-ssl.xbox.com/assets/dc/48/dc486960-701e-421b-b145-70d04f3b85be.jpg?n=Game-Hub_Content-Placement-0_New-Releases-No-Copy_740x417_02.jpg"
            }
          })
        };
      });
    }
    this.setState({
      placeName: ""
    });
  };

  render() {
    const { selectedPlace, placeName } = this.state;
    return (
      <View style={styles.container}>
        <ModalBox
          selectedPlace={selectedPlace}
          itemDelete={this.itemDelete}
          close={this.close}
        />
        <View style={styles.inputContainer}>
          <Input changeName={this.changeName} value={placeName} />
          <Button
            title="Send"
            style={styles.inputButton}
            onPress={this.addText}
          />
        </View>
        <ScrollView style={styles.listContainer}>
          <ListItems
            text={this.state.text}
            selected={this.selected}
            itemDeleted={this.itemDeletes}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputButton: {
    width: "40%"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  listContainer: {
    width: "100%"
  }
});
