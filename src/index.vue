<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import React from "react";
import login from "./screens/login";
import dashboard from "./screens/dashboard";
import chat from "./screens/chat";

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: login,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Hitchdesk'
        }
      }
    },
    Dashboard: {
      screen: dashboard,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Dashboard'
        }
      }
    },
    Chat: {
      screen: chat,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Chat'
        }
      }
    }
  },
  {
    initialRouteName: 'Login',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>