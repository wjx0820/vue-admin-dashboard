<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <div class="request">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode">
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode">
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Request Account</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
          v-model="email"
          required
        >
        <button>Request Account</button>
      </form>
      <router-link
        to="/signin"
        :class="{'light-link': isDarkMode, 'dark-link' : !isDarkMode}"
      >Already have an account? Sign in now.</router-link>
      <ThemeSwitch/>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch";
export default {
  name: "Request",
  components: {
    ThemeSwitch
  },
  data() {
    return {
      email: null
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {
      const email = this.email;
      // Slack API logic
      let slackURL = new URL("https://slack.com/api/chat.postMessage");
      const data = {
        token:
          "xoxp-643878333264-646046910662-632436758995-9f34015ad949b6f6ba64622e5b0d5799",
        channel: "vue-dashboard",
        text: `${email} has requested admin access to HQ. Please go to Netlify to invite them.`
      };
      slackURL.search = new URLSearchParams(data);
      fetch(slackURL)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRequestedAccount: true,
              email: email
            }
          });
        })
        .catch(error => {
          alert("Error: " + error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.request {
  width: 400px;
  text-align: center;
}
</style>




