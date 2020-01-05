<template>
  <div>
    <div class="status">
      <p>
        <span>&#9679;</span> All modules and substations operational.</p>
    </div>
    <nav>
      <!-- header -->
      <h1 class="header">es
        <span class="blink">_</span>
      </h1>
      <div class="lines">
        <div class="first">
          <div class="a"></div>
          <div class="b"></div>
          <div class="c"></div>
        </div>
        <div style="width: 60%; overflow: hidden; margin-top: 10px;">
          <marquee direction="left">all visitors are to be advised that unsactioned attempts to reify the metaphysical may result in the corruption of one's
            sense of self and/or the unmitigated collapse of the ego unto itself</marquee>
        </div>

        <div class="second">
          <div class="a"></div>
          <div class="b"></div>
          <div class="c"></div>
        </div>
      </div>

      <div v-if="!isHome" class="sub-nav flex">
        <div :style="`width: ${activeWidth}px; left: ${activeTranslation + 41}px;`" class="sub-nav-anim"></div>
        <div
          v-for="(item, idx) in navData"
          :key="item.id"
          :id="item.id"
          @click="(evt) => navigate(item, idx, evt)"
          class="sub-nav-item"
          :class="{'active-sub-nav-item': activeNavItem === item.title}"
          >
          {{ item.title }}
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  updated() {
    this.navigateProgrammatic();
  },
  mounted() {
    if (!this.isHome) this.navigateProgrammatic();
  },
  data() {
    return {
      activeNavItem: 'Main Menu',
      activeWidth: 0,
      activeTranslation: 0,
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
  methods: {
    navigate(item, idx, e) {
      this.activeNavItem = item.title;
      this.activeWidth = e.target.offsetWidth;
      this.activeTranslation = this.calculateTransition(idx);
      this.$router.push(item.id);
    },
    calculateTransition(idx) {
      const items = [].slice.call(document.querySelectorAll('.sub-nav-item'));
      const passedValues = items.filter((width, index) => index < idx);
      return passedValues.reduce((total, current) => (total + current.offsetWidth), 0);
    },
    navigateProgrammatic () {
      const path = this.$route.path;
      const [ active ] = this.navData.filter(item => `/${item.id}` === path);
      const idx = this.navData.indexOf(active);

      this.activeNavItem = active.title;
      this.activeWidth = document.querySelector(`#${active.id}`).offsetWidth;
      this.activeTranslation = this.calculateTransition(idx);
    }
  },
  computed: {
    isHome () {
      return this.$route.name === 'Menu'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  text-transform: lowercase;
  text-align: left;
  padding: 0 20px;
}

.header {
  font-size: 38px;
}

.sub-nav {
  /* background: #2e2e2e;
  color: white; */
  border-bottom: 1px solid #9e9e9e;
  border-right: 1px solid #9e9e9e;
  width: 643px;
  white-space: nowrap;
}

.sub-nav-item {
  padding: 10px 20px;
}

.active-sub-nav-item {
  /* background: #2e2e2e; */
  color: white;
}

.sub-nav-anim {
  height: 41px;
  position: absolute;
  background: #2e2e2e;
  transition: all 200ms ease;
  z-index: -1;
}

</style>
