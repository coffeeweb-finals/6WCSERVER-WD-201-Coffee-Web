<template>
  <div id="app">
    
    <section>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light" style="background-color: #DEDEDE;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <router-link class="nav-link" to="/"><img src="./assets/logo1.png" width="120px" height="120px"></router-link>
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home
                <span class="visually-hidden">(current)</span>
              </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Location">Location</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/About">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Menu">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Reserve">Reservation</router-link>
          </li>
        </ul>
      </div>
    </nav>
    </section>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
        
  .navbar.custom-nav {
    letter-spacing: 6px;
  }
        
  nav {
    width: 100%;
    height: 80px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
        
  a {
      font-family: 'Enriqueta', arial, serif;
      font-size: 15px;
      font-weight: 550;
      text-transform: uppercase;
      text-decoration: none;
      color: rgb(39, 39, 39);
      transition: 0.5s all ease;
      position: relative;
  }
  
  ul li a::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.175rem;
      bottom: 0;
      left: 0;
      background: goldenrod;
  }
  
  ul li a::after {
      transform: scale(0, 1);
      transition: transform 0.3s ease;
  }
  
  ul li a:hover::after {
      transform: scale(1, 1);
  }
  
  .navbar.custom-nav {
      position: fixed;
      z-index: 9999;
      top: 0;
      transition: all 0.4s ease-in-out;
      background-color: #5e3219;
      letter-spacing: 6px;
  }
  
  ul li {
      float: left;
      padding: 0px 40px;
      list-style: none;
      justify-content: space-around;
      margin: auto;
  }
  
  ul li a:hover {
      color: goldenrod;
      transition: 0.5s;
  }
</style>