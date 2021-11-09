<template>
  <div id="sidebar" :class="{ active: IsActive }">
    <div class="hamburger toggle-btn mt-4" @click="tootle">
      <div class="_layer -top"></div>
      <div class="_layer -mid"></div>
      <div class="_layer -bottom"></div>
    </div>

    <ul>
      <li>
        <img src="../../assets/logo.jpeg" alt="Logo Fazt" class="logo" />
      </li>
      <li><h3>Categorías</h3></li>
      <li>Nueva</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IsActive: true,
    };
  },
  methods: {
    tootle() {
      this.IsActive = !this.IsActive;
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0px;
  padding: 0px;
}

#sidebar {
  position: fixed;
  width: 200px;
  height: 100%;
  background: #151719;
  left: -200px;
  transition: all 500ms linear;
  z-index: 2000;
}

#sidebar.active {
  left: 0px;
}

#sidebar ul li {
  color: rgba(230, 230, 230, 0.9);
  list-style: none;
  padding: 15px 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  /* text-align: center; */
  margin-left: 10px;
}

.logo {
  width: 70%;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

#sidebar .toggle-btn {
  position: absolute;
  left: 230px;
  top: 20px;
  cursor: pointer;
}

#sidebar .toggle-btn span {
  display: block;
  width: 40px;
  text-align: center;
  font-size: 30px;
  border: 3px solid #000;
}

.hamburger {
  position: fixed;
  background-color: transparent;
  left: 0;
  top: 0;
  height: 30px;
  width: 30px;
  padding: 20px 20px;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform 0.25s
    cubic-bezier(0.05, 1.04, 0.72, 0.98);
  transition: transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
  z-index: 1002;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamburger.is-active {
  background-color: none;
}
._layer {
  background: #333333;
  margin-bottom: 4px;
  border-radius: 2px;
  width: 28px;
  height: 4px;
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
  transition: all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
}
.hamburger:hover .-top {
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}
.hamburger:hover .-bottom {
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
}
.hamburger.is-active .-top {
  -webkit-transform: translateY(200%) rotate(45deg) !important;
  -ms-transform: translateY(200%) rotate(45deg) !important;
  transform: translateY(200%) rotate(45deg) !important;
}
.hamburger.is-active .-mid {
  opacity: 0;
}
.hamburger.is-active .-bottom {
  -webkit-transform: translateY(-200%) rotate(135deg) !important;
  -ms-transform: translateY(-200%) rotate(135deg) !important;
  transform: translateY(-200%) rotate(135deg) !important;
}
</style>
