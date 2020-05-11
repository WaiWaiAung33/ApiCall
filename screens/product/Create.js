import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

const axios = require("axios");

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      detail: ""
    };
  }
  createProduct() {
    const self = this;
    axios
      .post("http://103.83.190.196/restapi/public/api/products", {
        name: self.state.name,
        detail: self.state.detail
      })
      .then(function(response) {
        alert("Successfully Created!");
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text>Product Create Screen</Text>
          <TextInput
            style={styles.textInput}
            value={this.state.name}
            onChangeText={value => this.setState({ name: value })}
          />
          <TextInput
            style={styles.textInput}
            value={this.state.detail}
            onChangeText={value => this.setState({ detail: value })}
          />
          <TouchableOpacity
            style={styles.createBtn}
            onPress={() => this.createProduct()}
          >
            <Text style={styles.createBtnText}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  formContainer: {
    width: 200
  },
  textInput: {
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderStyle: "solid"
  },
  createBtn: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    marginTop: 10
  },
  createBtnText:{
    color: 'white'
  }
});
