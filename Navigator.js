import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ProductList from "./screens/product/List";
import ProductCreate from "./screens/product/Create";
import ProductUpdate from "./screens/product/Update";

export default createAppContainer(
  createStackNavigator(
    {
      ProductList: {
        screen: ProductList,
        navigationOptions: () => ({
          header: null
        })
      },
      ProductCreate: {
        screen: ProductCreate,
        navigationOptions: () => ({
          title: "Product Create"
        })
      },
      ProductUpdate: {
        screen: ProductUpdate,
        navigationOptions: () => ({
          title: "Product Update"
        })
      }
    },
    {
      initialRouteName: "ProductList"
    }
  )
);
