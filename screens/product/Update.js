import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

const axios = require("axios");

export default class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      detail: ""
    };
  }

  componentWillMount() {
    const data = this.props.navigation.getParam("data");
    this.setState({ id: data.id, name: data.name, detail: data.detail });
  }

  updateProduct() {
    const self = this;
    axios
      .put(
        `http://103.83.190.196/restapi/public/api/products/${this.state.id}`,
        {
          name: self.state.name,
          detail: self.state.detail
        }
      )
      .then(function(response) {
        alert("Successfully Updated!");
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text>Product Update Screen</Text>
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
            style={styles.updateBtn}
            onPress={() => this.updateProduct()}
          >
            <Text style={styles.updateBtnText}>Update</Text>
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
  updateBtn: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    marginTop: 10
  },
  updateBtnText: {
    color: "white"
  }
});
