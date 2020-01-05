<template>
  <div class="implementation">
    <div class="row back-row" :class="{'back-row-moved': movedBack}">
      <div class="col-xs-12 col-md-6">
        <div class="implement-card">
          <div class="img-wrap">
            <img :src="path" alt="" />
          </div>
          <h2><span class="blinker">&#9679; &nbsp;</span>lexical analysis suite</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>  
      </div>
      <div class="col-xs-12 col-md-3">
        <div class="implement-card">
          <div class="img-wrap">
            <img :src="path" alt="" />
          </div>
          <h2><span class="blinker">&#9679; &nbsp;</span>lexical analysis suite</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>  
      </div>
      <div class="col-xs-12 col-md-3">
        <div class="implement-card">
          <div class="img-wrap">
            <img :src="path" alt="" />
          </div>
          <h2><span class="blinker">&#9679; &nbsp;</span>lexical analysis suite</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>  
      </div>
    </div>

    <div class="row front-row" :class="[{'front-row-moved': movedBack}, {'delayed': delayed}]">
      <div class="col-xs-12 col-md-3">
        <div class="implement-card">
          <div class="img-wrap">
            <img :src="path" alt="" />
          </div>
          <h2><span class="blinker">&#9679; &nbsp;</span>lexical analysis suite</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div class="col-xs-12 col-md-3">
        <div class="implement-card">
          <div class="img-wrap">
            <img :src="path" alt="" />
          </div>
          <h2><span class="blinker">&#9679; &nbsp;</span>lexical analysis suite</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>  
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="implement-card">
          <div class="img-wrap">
            <img :src="path" alt="" />
          </div>
          <h2><span class="blinker">&#9679; &nbsp;</span>lexical analysis suite</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Implementation',
  mounted() {
    window.addEventListener('scroll', () => this.anim())
  },
  unmounted() {
    window.removeEventListener('scroll', () => this.anim())
  },
  data() {
    return {
      scrollVal: 0,
      delayed: false,
      path: './static/example.png',
      movedBack: false,
    }
  },
  methods: {
    anim() {
      if (!this.scrollLogged) {
          console.log(pageYOffset);
        // if (pageYOffset > this.scrollVal) this.movedBack = true;
        
        this.movedBack = pageYOffset > this.scrollVal;
        this.scrollVal = pageYOffset;

        // this.movedBack = !this.movedBack
        this.scrollLogged = true;

        if (this.movedBack) {
          setTimeout(() => {
            this.delayed = true;
          }, 200)
        } else {
          this.delayed = false;
        }

        setTimeout(() => {
          this.scrollLogged = false;
        }, 500);
      }
    }
  }
}
</script>

<style>
.back-row {
  transform: scale(0.6);
  transition: transform 500ms ease;
  /* opacity: 0.6;
  filter: blur(1px); */
}

.back-row-moved {
  transform: scale(1);
  /* opacity: 1; */
  /* filter: none; */
}

.front-row {
  transform: translate3d(0, -175px, 0);
  transition: all 500ms ease;
}

.front-row-moved {
  opacity: 0;
  transform: scale(2);
}

.delayed {
  display: none;
}

.implementation {
  width: 100%;
  /* margin: 0 50px; */
  max-width: 1600px;
  margin: 0 auto;
  min-height: 700px;
}

.implement-card {
  width: 100%;
  height: 350px;
  margin: 5px;
  background: #2e2e2e;
  overflow: hidden;
  color: white;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2); 
  /* display: flex; */
  cursor: pointer;
  /* border-top: 5px solid indianred; */
}

.implement-card img {
  /* width: 100%; */
  /* height: 100%; */
}

.implement-card h2 {
  width: auto;
  display: inline-flex;
  padding: 0 20px;
  background: white;
  color: black;
  margin: 0 auto;
  transform: translateY(-17px);
}

.img-wrap {
  overflow: hidden;
  height: 300px;
  border-bottom: 1px solid white;
  transition: height 200ms ease;
  opacity: 0.4;
}

.img-wrap:hover {
  /* height: 200px; */
}
</style>