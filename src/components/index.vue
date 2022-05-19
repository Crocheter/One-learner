<template>
<div id="main">
  <div>
  <header>
        <nav class="navbar">
            <div class="container">
                <ul class="nav px-5">
                  <router-link to="/menu">
                    <li class="nav-item me-5 mt-3">
                        <img src="./assets/img/Hamburger.png" alt="Menu bar" class="img-fluid" />
                    </li>
                    </router-link>
                    <li class="nav-item me-5">
                        <div>
                            <img src="./assets/img/parrot.png" alt="parrot" class="img-fluid rounded-circle">
                        </div>
                    </li>
                    <h5 class="mt-4">Hello, <span>Abisola Odutayo</span></h5>
                </ul>
                <div class="pe-5">
                    <img src="./assets/img/Notification.png" alt="Notification" class="img-fluid">
                </div>
            </div>
        </nav>
    </header>
    <app-First></app-First>
    <app-Second></app-Second>

</div>


</div>


  
</template>

<style scoped>



.navbar {
    background-color: #FFFFFF;
    color: #232B37;
}

h5 {
    font-size: 20px;
    font-weight: 400;
}

h5 span, h3 {
    font-weight: 600;
}
</style>

<script>
// import menu from './components/files/menu.vue'

export default {
  // components: {
  //   menu
  // },

  

    data() {
      return {
        sideMenu: false
        
      }
    },

       methods: {
         makeVisible(mode){
           this.sideMenu = true
         }
       }
    // }
    // methods: {
    //   sideMenu(){
    //     document.getElementById('ham').style.display='block'
    //     document.getElementById('main').style.display='none'
    //   }
      // nonSide() {
      //   document.getElementById('ham').style.display='none'
      // }
    
}
</script>