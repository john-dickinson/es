<template>
  <div class="work-details">
    <div class="work flex align-center">
      <div
        v-for="(item, idx) in workData"
        :key="item.id"
        class="card-wrap slide-up"
        :id="item.id"
      >

      <div class="work-line" :class="{'work-line-active': hovered === item.title}"></div>
      <div class="work-line-horizontal" :class="{'work-line-horizontal-active': hovered === item.title}"><p v-if="hovered === item.title"><span class="blinker">&#9679; &nbsp;</span>Click for details</p></div>

      <div class="card" 
        @click="setActiveSection(item)"
        @mouseenter="() => ( hovered = item.title )"
        @mouseleave="() => ( hovered = '' )"
        :class="`delay-${idx} ${activeSection.id === item.id ? 'card-animated' : ''}`"
      >
        <h1>{{ item.title }}</h1>
        <h2>{{ item.tenure }}</h2>
          <!-- <p v-for="description in item.desc">{{ description }}</p> -->
          <div class="tech-used">
            <span
              v-for="subItem in item.tech"
              :key="subItem"
            >
              {{ subItem }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {
    activeSection: {},
    activatedView: false,
    hovered: '',
     workData: [
       {
        title: 'IBM',
        id: 'work-ibm',
        tenure: 'march 2018 - present',
        desc: [
          `Building and maintaining internal libraries and applications with ES6
          Javascript, Typescript, Vue.js + Vuex, SCSS. Building
          and maintaining select backend services with Node.js, Express.
          CDN development, metrics collection.`,

          `Automating workflow processes in the Unix environment with Bash scripting.
          Providing fellow developers with shell scripts
          to modify their code based on updates made to the library my team provides.`,
        ],
        tech: [
          'es6',
          'vue',
          'react',
          'node',
        ]
      },
      {
        title: 'American Express',
        id: 'work-amex',
        tenure: 'march 2018 - present',
        desc: [
          `Building and maintaining internal libraries and applications with ES6
          Javascript, Typescript, Vue.js + Vuex, SCSS. Building
          and maintaining select backend services with Node.js, Express.
          CDN development, metrics collection.`,

          `Automating workflow processes in the Unix environment with Bash scripting.
          Providing fellow developers with shell scripts
          to modify their code based on updates made to the library my team provides.`,
        ],
        tech: [
          'es6',
          'vue',
          'react',
          'node',
        ]
      },
      {
        title: 'AOL',
        id: 'work-aol',
        tenure: 'march 2018 - present',
        desc: [
          `Building and maintaining internal libraries and applications with ES6
          Javascript, Typescript, Vue.js + Vuex, SCSS. Building
          and maintaining select backend services with Node.js, Express.
          CDN development, metrics collection.`,

          `Automating workflow processes in the Unix environment with Bash scripting.
          Providing fellow developers with shell scripts
          to modify their code based on updates made to the library my team provides.`,
        ],
        tech: [
          'es6',
          'vue',
          'react',
          'node',
        ]
      },
      {
        title: 'Universiy of Michigan',
        id: 'work-um',
        tenure: 'march 2018 - present',
        desc: [
          `Building and maintaining internal libraries and applications with ES6
          Javascript, Typescript, Vue.js + Vuex, SCSS. Building
          and maintaining select backend services with Node.js, Express.
          CDN development, metrics collection.`,

          `Automating workflow processes in the Unix environment with Bash scripting.
          Providing fellow developers with shell scripts
          to modify their code based on updates made to the library my team provides.`,
        ],
        tech: [
          'es6',
          'vue',
          'react',
          'node',
        ]
      },
    ],
    };
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
      this.animateActiveSection();
    },
    animateActiveSection() {
      this.activatedView = true;

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.work-details {
  /* position: absolute;
  width: 100%;
  bottom: 100px;
  right: 0; */
  margin: 50px auto;
  /* overflow-x: scroll; */
  /* overflow-y: visible; */
  position: relative;
  height: 100vh;
}

.work {
  height: 100%;
}

.card-wrap {
  perspective: 700px;
  margin-top: 30px;
}

.card {
  /* border: 1px solid; */
  border-left: 10px solid indianred;
  background: #2e2e2e;
  color: white;
  margin: 0 50px;
  padding: 60px 50px;
  min-width: 350px;
  transition: all 300ms ease;
  transform: rotateY(6deg);
  box-shadow:  0px 5px 10px 0 rgba(0,0,0,0.3);
}

.card-animated {
  /* transform: translate3d(50%, 50%, 0); */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-30%, -100%, 0);
  width: 900px;
  height: 600px;
  z-index: 999;
}

.card:hover {
  /* transform: none; */
}

.work-line {
  height: 0;
  width: 1px;
  background: #9e9e9e;
  position: absolute;
  left: 50%;
  top: -5%;
  transition: height 300ms ease;
  z-index: -1;
}

.work-line-horizontal {
  width: 0;
  height: 1px;
  background: #9e9e9e;
  position: absolute;
  right: 50%;
  top: -5%;
  transition: width 300ms ease;
}

.work-line-horizontal p {
  position: absolute;
  left: -140px;
  top: -10px;
}


.work-line-active {
  height: 200px;
}

.work-line-horizontal-active {
  width: 100px;
}


</style>
