import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import List from "./screens/product/List";
import Create from "./screens/product/Create";
import Update from "./screens/product/Update";
export default createAppContainer(
    createStackNavigator(
        {
         List:{screen:List},
         Create:{screen:Create},
         Update:{screen:Update}

        },
        {
      initialRouteName:"List"
        }
    )
)