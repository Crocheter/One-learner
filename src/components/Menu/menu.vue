<template>
<body>
    <div class="row" v-if="sideMenu">
        <div class="col-4 content " style="height: 1000px;">
            <router-link to="/">
            <div class="mt-5 mb-5 mx-5">
                <img src="./img/X.png" alt="" class="img-fluid">
            </div>
            </router-link>
            <div>
                <ul class="list mt-5 me-2" >
                    <router-link to="/" style="text-decoration: none;">
                    <li class="d-flex p-1" style="margin-bottom: 30px;">
                        <div class="">
                        <img src="./img/dashboard.png" alt="" class="me-2 img-fluid" >
                        </div>
                        <h6>Dashboard</h6>
                    </li>
                    </router-link>
                    <li class="d-flex p-1" style="margin-bottom: 30px;">
                        <div class="">
                        <img src="./img/User.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>My Profile</h6>
                    </li>
                    <li class="d-flex p-1" style="margin-bottom: 30px;">
                        <div class="">
                        <img src="./img/Wishlist.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Wishlist</h6>
                    </li>
                    <router-link to="/enrolled" style="text-decoration: none;">
                    <li class="d-flex p-1" style="margin-bottom: 30px;">
                        <div class="">
                        <img src="./img/Books.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Enrolled Courses</h6>
                    </li>
                    </router-link>
                    <router-link to="./main" style="text-decoration: none;">
                    <li class="d-flex p-1" style="margin-bottom: 30px;">
                        <div>
                        <img src="./img/active.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Active Courses</h6>
                    </li>
                    </router-link>
                    <li class="d-flex p-1" style="margin-bottom: 30px;">
                        <div>
                        <img src="./img/Confirmed.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Completed Courses</h6>
                    </li>

                    
                </ul>
            </div>
        </div>

        <div class="col-8" style="height: 1400px">
            <h1><nav></nav></h1>
        </div>
    </div>
    <app v-else></app>

</body>
    
</template>

<style scoped>

    body {
        background-color: rgba(33, 51, 79, 0.77);
        height: 1400px;
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
        background-color: #C01C03;
        width: 250px;
        height: 50px;
        padding-top: 30px;
        border-radius: 10px;
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