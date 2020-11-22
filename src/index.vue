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

const StackNavigator = createStackNavigator(
  {
    Login: login,
    Dashboard: dashboard,
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