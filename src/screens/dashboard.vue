<template>
  <view class="container">
      <text>Dashboard</text>
      <button title="move to chat" @press='goToChat'></button>
      <button title='sign out' @press='logoutUser'></button>  
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
      logoutUser() {
        this.navigation.goBack()
      },
      goToChat() {
        this.navigation.navigate('Chat')
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
</style>