<template>
  <view class="container">
    <text class="text-color-primary">Log In - Hitchdesk</text>
    <button title='login' @press='loginUser'></button>
  </view>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    loginUser() {
      this.navigation.navigate('Dashboard')
    }
  }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
