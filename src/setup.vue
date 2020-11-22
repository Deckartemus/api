<template>
    <view class="container">
      <app />
    </view>
</template>


<script>
import Vue from "vue-native-core";
import App from "./index";

export default {
  components: { App }
};
</script>

<style>
.container {
  flex: 1;
}
</style>