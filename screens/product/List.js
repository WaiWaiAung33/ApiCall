import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";

//import Axios to call api
const axios = require("axios");

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    const self = this;
    axios
      .get("http://103.83.190.196/restapi/public/api/products")
      .then(function(response) {
        //When api call success, then function will work
        self.setState({ products: response.data.data });
        console.log("State products ", self.state.products);
      })
      .catch(function(error) {
        //When api call is fail, catch function will work
        console.log(error);
      });
  }

  navigate(routeName, params) {
    this.props.navigation.navigate(routeName, { data: params });
  }

  deleteProduct(id) {
    axios
      .delete(`http://103.83.190.196/restapi/public/api/products/${id}`)
      .then(function(response) {
        //When api call success, then function will work
        alert("Successfully Deleted!");
      })
      .catch(function(error) {
        //When api call is fail, catch function will work
        console.log(error);
        alert("Fail to Delete!");
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 25 }}>React Native Backend Api Calling</Text>
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => this.navigate("Create", null)}
        >
          <Text style={styles.btnText}>Create Product</Text>
        </TouchableOpacity>
        {this.state.products.length > 0 ? (
          <ScrollView>
            {this.state.products.map((data, index) => {
              return (
                <View key={data.id} style={styles.card}>
                  <Text>{data.id}</Text>
                  <Text>{data.name}</Text>
                  <Text>{data.created_at}</Text>
                  <Text>{data.updated_at}</Text>
                  <Text>{data.detail}</Text>
                  <View style={styles.btnContainer}>
                    <TouchableOpacity
                      style={styles.deleteBtn}
                      onPress={() => this.deleteProduct(data.id)}
                    >
                      <Text style={styles.btnText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.updateBtn}
                      onPress={() => this.navigate("Update", data)}
                    >
                      <Text style={styles.btnText}>Update</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <Text>There is no any Products</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    margin: 10,
    padding: 10,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10
    // elevation: 1
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10
  },
  deleteBtn: {
    padding: 10,
    backgroundColor: "red"
  },
  updateBtn: {
    padding: 10,
    backgroundColor: "green",
    marginLeft: 10
  },
  createBtn: {
    padding: 10,
    backgroundColor: "green",
    marginTop: 10
  },
  btnText: {
    color: "white"
  }
});
