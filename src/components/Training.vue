<template>
  <div class="training">
    <!-- <div class="menu-line menu-line-active"></div>
    <div class="menu-line-horizontal menu-line-horizontal-active"></div>
    <div class="menu-line-right menu-line-right-active"></div> -->
    <div class="train-shadow fade-in delay-3"></div>
    <div class="train-card scale-in">
      <div class="flex" style="align-items: center;">

        <div>
          <h1 style="font-size: 48px;">Training</h1>
          <h2 class="uni-wrap"><span class="blinker work-blink">&#9679;</span>University of Michigan</h2>
          <div class="uni" :class="{'uni-grow': didMount}"></div>
          <h2>2012 - 2016</h2>
          <h2>Bachelor of Science (BS) Informatics</h2>
          <h2>3.70</h2>
        </div>

        <div class="right-wrap">
        <div class="training-right scale-in delay-4">
          <h3>University of Michigan Hackathon 2014 + 2015,
            employed as web developer for Computer Aided Engineering,
            and The Michigan Daily. Employed as a data scientist in a text-mining project under
            professor Eytan Edara. Volunteer pen-pal at student organization KGrams (2012-13)</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Training',
  data() {
    return {
      didMount: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.didMount = true;
    }, 500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.train-card {
  width: 880px;
  height: 350px;
  background: white;
  z-index: 99;
  border: 1px solid #9e9e9e;
  position: relative;
  text-align: left;
  padding: 20px 0px 0px 60px;
  box-shadow: -2px 5px 4px rgba(0, 0, 0, 0.2);
}

.train-shadow {
  width: 880px;
  height: 350px;
  transform: translate3d(-45px, -45px, 0);
  background: #2e2e2e;
  position: absolute;
  /* border-left: 10px solid indianred; */
}

.training {
  margin: 50px auto;
  /* transform: translateX(-100px); */
}

.training-right {
  width: 300px;
  padding: 20px;
  background: #2e2e2e;
  color: white;
}

.right-wrap {
  transform: translate3d(40px, -20px, 0);
  margin-left: auto;
}


.menu-line {
  height: 0;
  width: 1px;
  background: #9e9e9e;
  position: absolute;
  left: -15%;
  top: -5%;
  transition: height 300ms ease;
  z-index: -1;
}

.menu-line-horizontal {
  width: 0;
  height: 1px;
  background: #9e9e9e;
  position: absolute;
  left: -26%;
  top: -5%;
  transition: width 300ms ease;
}

.menu-line-right {
  width: 0;
  height: 1px;
  background: #9e9e9e;
  position: absolute;
  left: -15%;
  top: 50%;
  transition: width 300ms ease;
}

.menu-line-right-active {
  width: 100px;
}

.menu-line-active {
  height: 200px;
}

.menu-line-horizontal-active {
  width: 100px;
}

.uni {
  border-bottom: 1px solid black;
  width: 0%;
  transition: width 500ms ease;
  /* margin-right: auto; */
}

.uni-grow {
  width: 200%;
}

.uni-wrap {
  margin-bottom: 15px;
}

.work-blink {
  margin-right: 15px;
}
</style>
