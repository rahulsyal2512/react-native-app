import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selected, text, itemDeleted } = this.props;
    return (
      <FlatList
        data={text}
        renderItem={info => (
          <TouchableOpacity onPress={() => selected(info.item.key)}>
            <View style={styles.listitems}>
              <Image
                resizeMode="contain"
                source={info.item.image}
                style={styles.image}
              />
              <Text>{info.item.value}</Text>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => itemDeleted(info.item.key)}>
                  <Icon name="delete" size={30} color="#900" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      );
    }
  }
  const styles = StyleSheet.create({
    listitems: {
    width: "100%",
    flex: 1,
    marginTop: 5,
    backgroundColor: "lightgrey",
    padding: 10,
    alignItems: "center",
    flexDirection: "row"
  },
  image: {
    marginRight: 8,
    height: 30,
    alignItems: "center",
    width: 40
  },
  button: {
    width: "20%",
    alignSelf: "center",
    position: "absolute",
    right: 0
  }
});


//Tyler mcginnis
// <View>
// {/* {this.props.text.map((placeOutput, i) => {
// {alert(this.prop)}
// return (
//     <TouchableOpacity key={i} onPress={()=>this.props.delete(i)}>
//         <Text key={i} style={styles.listitems}>{placeOutput}</Text>
//         {/* // <ListItems placeName={placeOutput} /> */}
//     // </TouchableOpacity>
// );
// })} */}
// </View>