import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
const axios=require("axios");

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      products:[]
    }
  }
  componentDidMount(){
    this.getAllProducts();
  }
  getAllProducts(){
    const self=this;
    axios
    .get("http://103.83.190.196/restapi/public/api/products")
    .then(function(response){
      self.setState({products:response.data.data});
      console.log("State products",self.state.products);
      
    })
    .catch(function(error){
      console.log(error);
      
    });
  
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>React Native Backend Api Calling</Text>
        {
          this.state.products.length>0 ?(
            <ScrollView>
              {this.state.products.map((data,index)=>{
                return(
                  <View key={data.id} style={{borderBottomWidth:1}}>
              <Text style={{marginTop:4}}>{data.id}</Text>
                <Text  style={{marginTop:4}}>{data.name}</Text>
              <Text  style={{marginTop:4}}>{data.created_at}</Text>
                <Text  style={{marginTop:4}}>{data.updated_at}</Text>
              <Text  style={{marginTop:4}}>{data.detail}</Text>
                  </View>
                )
              })}
            </ScrollView>
          ):(
            <Text>There is no any Producr</Text>
          )
        }
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
