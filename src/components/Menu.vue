<template>
    <div class="menu">
      <div class="menu-content">
        <div class="flex scale-in delay-3">
          <router-link
            :to="item.id"
            v-for="item in even"
            :key="item.id"
            :id="item.id"
            class="menu-item"
          >
            <h1 style="text-align: center;">{{ item.title }}</h1>
          </router-link>
        </div>

        <div :class="`test-line test-line${hovered ? '-active' : ''}`"></div>

        <div :class="`test-line-horizontal test-line-horizontal${hovered ? '-active' : ''}`">
          <p class="flex" style="align-items: center;" v-if="hovered">
            <span class="blinker">&#9679; &nbsp;</span> 
            <span>empathy solutions is an engineering entity. offering full-stack web development, mobile development, and system administration</span>

            </p>
        </div>

        <div class="circle">
          <div @mouseenter="() => ( hovered = true )" @mouseleave="() => ( hovered = false )" class="inner-circle breathe scale-in delay-8"></div>
        </div>

        <div class="flex scale-in delay-3">
          <router-link
            :to="item.id"
            v-for="item in odd"
            :key="item.id"
            :id="item.id"
            class="menu-item"
          >
            <h1 style="text-align: center;">{{ item.title }}</h1>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      hovered: false,
      menuItems: [
        {
          title: "training",
          id: "training"
        },
        {
          title: "deployment",
          id: "deployment"
        },
        {
          title: "implementation",
          id: "implementation"
        },
        {
          title: "knowledge base",
          id: "skills"
        }
      ]
    };
  },
  computed: {
    even () {
      return this.menuItems.filter((item, idx) => Number.isInteger(idx / 2));
    },
    odd() {
      return this.menuItems.filter((item, idx) => !Number.isInteger(idx / 2));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  /* transform: translateX(-40px); */
}

.menu-item {
  text-decoration: none;
  /* box-shadow: -2px 5px 4px rgba(0, 0, 0, 0.2); */
}

.menu-item h1 {
  margin-top: 50px;
  color: white;
}

.test-line {
  height: 0;
  width: 1px;
  background: #9e9e9e;
  position: absolute;
  left: 50%;
  top: -5%;
  transition: height 200ms ease;
}

.test-line-horizontal {
  width: 0;
  height: 1px;
  background: #9e9e9e;
  position: absolute;
  right: 50%;
  top: -5%;
  transition: width 200ms ease;
}

.test-line-horizontal p {
  position: absolute;
  left: -330px;
  top: -40px;
  text-align: left;
  width: 320px;
  font-size: 14px;
  /* background: rgba(255, 255, 255, 0.8);
  border: 1px solid #2e2e2e; */
  padding: 5px;
}

.test-line-horizontal .blinker {
  padding: 10px;
}

.test-line-active {
  height: 200px;
}

.test-line-horizontal-active {
  width: 300px;
}

@keyframes breath {
  0% {
    opacity: 1.0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1.0;
  }
}

.breathe {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: breath;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

</style>
