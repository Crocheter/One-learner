<template>
<div>
    
        <div class="row" style="height: 1800px">
            <div class="col-4" style="background-color: #232B37; color: #FFFFFF; height: 1600px;">
            <div class="mt-5 mb-5 mx-5">
                <h3>:<span style="color: #C01C03;">One-</span>learner</h3>
            </div>
            <div>
                <ul class="list mt-5 me-2">
                    <router-link to="./" style="text-decoration: none;">
                    <li class="d-flex mb-4 p-1">
                        <div>
                        <img src="./img/dashboard.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Dashboard</h6>
                    </li>
                    </router-link>
                    <li class="d-flex mb-4">
                        <div>
                        <img src="./img/User.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>My Profile</h6>
                    </li>
                    <li class="d-flex mb-4">
                        <div>
                        <img src="./img/Wishlist.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Wishlist</h6>
                    </li>
                    <router-link to="./enrolled" style="text-decoration:none">
                    <li class="d-flex mb-4">
                        <div>
                        <img src="./img/Books.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Enrolled Courses</h6>
                    </li>
                    </router-link>
                    <router-link to="./assignment" style="text-decoration:none">
                    <li class="d-flex mb-4">
                        <div>
                        <img src="./img/active.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Active Courses</h6>
                    </li>
                    </router-link>
                    <li class="d-flex mb-4">
                        <div>
                        <img src="./img/Confirmed.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Completed Courses</h6>
                    </li>
                    <router-link to="./upload" style="text-decoration:none">
                    <li class="d-flex mb-4">
                        <div>
                        <img src="./img/Projects.png" alt="" class="me-2 img-fluid">
                        </div>
                        <h6>Project Page</h6>
                    </li>
                    </router-link>
                    <router-link to="./community" style="text-decoration:none">
                    <li class="d-flex mb-4">
                        <div><img src="./img/unity.png" alt="" class="me-2 img-fluid"></div>
                        <h6>Student Community</h6>
                    </li>
                    </router-link>
                    <li class="" style="margin-top: 1000px; list-style: none;" >
                        
                        <div class="d-flex">
                            <div><img src="./img/Vector.png" alt=""></div>
                            <h6 class="mx-3">Log out</h6>
                        </div>
                    </li>

                    
                </ul>

            </div>
        </div>
            <div class="col-8" style="padding: 0;">
                <header class="d-flex"
                style="background-color: #FFFFFF; height: 85px;">
            
            <input type="text" style="background-color: #E5E5E5; border-radius: 20px; width: 550px; 
            height: 50px; border: none; padding-left: 30px; font-size:20px;" class="me-5 mt-3 mx-5" placeholder="Search Community">
            <div class="me-5 justify-content-end mt-4">
                <img src="./img/Ellipseb.png" alt="" class="" style="position: absolute; width: 40px; height: 40px;">
                <img src="./img/messages.png" alt="" style="position: relative; margin-left: 10px; margin-right: 10px;
                margin-top: 13px; width: 20px; height: 20px;">
            </div>
            <img src="./img/Notification.png" alt="" style="width: 40px; height: 40px;" class="mt-4">
        </header>

                <div class="px-5 pt-5">
                    <div>
                        <div class="d-flex">
                        <img src="./img/parrot.png" alt="" style="border-radius: 50%">
                        <h4 class="mt-3 mx-5"><strong>Hi Ayomide!</strong></h4>
                        </div>
                        <h5 class="my-5">What would you like to share your works with the community?</h5>
                    </div>

                    <div style="background-color: #FFFFFF; width: 900px; border-radius: 10px;
                    box-shadow: 0px 2px 19px rgba(0, 0, 0, 0.13);" class="p-5">
                        <h1>Create Post </h1>
                        <input type="text" style="background-color: #E5E5E5; color: #8F8E95; width: 750px;
                        height: 100px; border: none; border-radius: 20px;" 
                        placeholder="What would you like to share?" class="p-3 mb-5">
                        <div class="d-flex">
                            <div class="d-flex">
                                <div><img src="./img/iimmaaggee.png" alt=""></div>
                                <p class="mx-2">Image</p>
                            </div>
                            <div class="d-flex mx-5">
                                <div><img src="./img/video.png" alt=""></div>
                                <p class="mx-2">Video</p>
                            </div>
                            <button style="background-color:#C01C03; color: #FFFFFF; border-radius: 20px;
                            border: none; height: 50px; width: 150px; margin-left: 311px;">
                            Publish</button>
                        </div>
                    </div>

                    <div style="background-color: #FFFFFF; width: 900px; border-radius: 10px; margin-top: 50px;
                    box-shadow: 0px 2px 19px rgba(0, 0, 0, 0.13);"
                    class="p-5">
                        <div class="d-flex">
                            <img src="./img/parrot.png" alt="" style="border-radius: 50px;">
                            <div class="mx-4">
                                <h4><strong>Ayomide Saka</strong></h4>
                                <h5 style="color: #8F8E95;">5 mins ago</h5>
                            </div>
                        </div>
                        <input type="text"
                        placeholder="What would you like to share what would you like 
to share what would you like to share would you like to share what would you like to share."
                        style="width: 760px; height: 150px; background-color: #E5E5E5;
                        border: none; border-radius: 20px;" class="mt-3">
                        <div class="d-flex mt-4">
                            <div class="d-flex">
                                <div><img src="./img/Likes.png" alt=""></div>
                                <p class="mx-2">8 Likes</p>
                            </div>
                            <div class="d-flex mx-5">
                                <div><img src="./img/commented.png" alt=""></div>
                                <p class="mx-2">18 Comments</p>
                            </div>
                            <div class="d-flex">
                                <div><img src="./img/shared.png" alt=""></div>
                                <p class="mx-2">6 shared</p>
                            </div>
                        </div>
                    </div>

                    <div style="background-color: #FFFFFF; width: 900px; border-radius: 10px; margin-top: 50px;
                    box-shadow: 0px 2px 19px rgba(0, 0, 0, 0.13);"
                    class="p-5 mt-5">
                        <div class="d-flex">
                            <img src="./img/parrot.png" alt="" style="border-radius: 50px;">
                            <div class="mx-4">
                                <h4><strong>Ayomide Saka</strong></h4>
                                <h5 style="color: #8F8E95;">5 mins ago</h5>
                            </div>
                        </div>
                        <input type="text"
                        placeholder="What would you like to share what would you like 
to share what would you like to share would you like to share what would you like to share."
                        style="width: 760px; height: 150px; background-color: #E5E5E5;
                        border: none; border-radius: 20px;" class="mt-3">
                        <div class="d-flex mt-4">
                            <div class="d-flex">
                                <div><img src="./img/Likes.png" alt=""></div>
                                <p class="mx-2">8 Likes</p>
                            </div>
                            <div class="d-flex mx-5">
                                <div><img src="./img/commented.png" alt=""></div>
                                <p class="mx-2">18 Comments</p>
                            </div>
                            <div class="d-flex">
                                <div><img src="./img/shared.png" alt=""></div>
                                <p class="mx-2">6 shared</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<style scoped>
    li:hover {
        background-color: #C01C03;
        width: 250px;
        height: 50px;
        padding-top: 15px;
        border-radius: 10px;
    }

    li {
        color: #FFFFFF;
    }
</style>