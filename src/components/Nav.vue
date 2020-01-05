<template>
  <div class="left-nav">
    <router-link
      v-for="item in navData"
      :key="item.id"
      :to="item.id"
      :id="item.id"
      class="nav-item flex align-vert"
      >
      <span class="square"></span>
      <p>{{ item.title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navData: [
        {
          id: '/',
          title: 'Main Menu',
        },
        {
          id: 'training',
          title: 'Training',
        },
        {
          id: 'deployment',
          title: 'Deployment',
        },
        {
          id: 'implementation',
          title: 'Implementation',
        },
        {
          id: 'knowledge-base',
          title: 'Knowledge Base',
        },
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
