<template>
<body>
    <div class="row" v-if="sideMenu">
        <div class="col-4 content">
            <router-link to="/">
            <div class="mt-5 mb-5 mx-5">
                <img src="./img/X.png" alt="" class="img-fluid">
            </div>
            </router-link>
            <div>
                <ul class="list mt-5 me-2">
                    <router-link to="/" style="text-decoration: none;">
                    <li class="d-flex mb-3">
                        <img src="./img/dashboard.png" alt="" class="me-2 img-fluid" >
                        <h6>Dashboard</h6>
                    </li>
                    </router-link>
                    <li class="d-flex mb-3">
                        <img src="./img/User.png" alt="" class="me-2 img-fluid">
                        <h6>My Profile</h6>
                    </li>
                    <li class="d-flex mb-3">
                        <img src="./img/Wishlist.png" alt="" class="me-2 img-fluid">
                        <h6>Wishlist</h6>
                    </li>
                    <router-link to="/enrolled" style="text-decoration: none;">
                    <li class="d-flex mb-3">
                        <img src="./img/Books.png" alt="" class="me-2 img-fluid">
                        <h6>Enrolled Courses</h6>
                    </li>
                    </router-link>
                    <li class="d-flex mb-3">
                        <img src="./img/active.png" alt="" class="me-2 img-fluid">
                        <h6>Active Courses</h6>
                    </li>
                    <li class="d-flex mb-3">
                        <img src="./img/Confirmed.png" alt="" class="me-2 img-fluid">
                        <h6>Completed Courses</h6>
                    </li>

                    
                </ul>
            </div>
        </div>
    </div>
    <app v-else></app>

</body>
    
</template>

<style scoped>

    body {
        background-color: rgba(33, 51, 79, 0.77);
        height: 680px;
    }
    .content {
        background-color: #232B37;
        height: 680px;
        max-height: 100%;
}

    ul {
        list-style: none;
    }

    li {
        color: #FFFFFF;
    }

    li:hover {
        background: #C01C03;
        border-radius: 7px;
        width: 200px;
        height: 30px;
        
    }
</style>

<script>

export default {
    
    data() {
      return {
        sideMenu: true
        
      }
    },

       methods: {
         makeVisible(mode){
           this.sideMenu = false
         }
       }
}
</script>