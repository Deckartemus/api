<template>
  <nb-container>        
    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input placeholder="Email" v-model="form.email"/>
        </nb-item>
        <nb-item>
          <nb-input placeholder="Password" secure-text-entry v-model="form.password"/>
        </nb-item>
      </nb-form>
      <view class="loginBtn">
        <nb-button block :on-press="submit">
          <nb-text>Login</nb-text>
        </nb-button>
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
import {mapActions} from "vuex";
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    submit() {
      this.signIn(this.form)
    }
  }
}
</script>

<style>
.loginBtn {
  margin-top: 25;
}
.text-color-primary {
  color: blue;
}
</style>