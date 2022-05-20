<template>
    <div style="height: 1300px"> 
        <header style="background-color: #232B37; height: 120px;" class="d-flex pt-5">
            <h3 style="color:#FFFFFF; margin-left: 70px;">:<span style="color: #C01C03">One-</span>learner</h3>
            <h4 style="color:#FFFFFF; margin-left: 500px;">Data Analyst: <span style="color: #C01C03">What is data?</span></h4>
        </header>
        <div class="row" >
            <div class="col-4" style="background-color: #232B37; color: #FFFFFF; height: 800px">
                <h1 class="px-5 mb-3">Course Content</h1>
                <div style="border: 1px dashed #101927;"></div>
                <h4 class="my-3 px-5">Lesson 1</h4>
                 <div style="border: 1px dashed #101927;"></div>
                <h4 class="my-3 px-5">Lesson 2</h4>
                 <div style="border: 1px dashed #101927;"></div>
                <h4 class="my-3 px-5">Lesson 3</h4>
            <div class="px-5 mb-3">
                <div class="d-flex">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                    <h6>Introduction to Malware</h6>
                </div>
                <div class="d-flex">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                    <h6>Assignment 01</h6>
                </div>
                <div class="d-flex">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                    <h6>Intermediate Malware</h6>
                </div>
                <div class="d-flex">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                    <h6>Advanced Malware</h6>
                </div>
            </div>
                <div style="border: 1px dashed #101927;"></div>
                <h4 class="px-5 my-3">Lesson 4</h4>
                <div style="border: 1px dashed #101927;"></div>
            </div>
        <div class="col-8 p-5">
            <div>
                <img src="./img/mware.png" alt="">
            </div>
            <h5 style="color:#C01C03; font-size: 30px;" class="mt-3">Assignment for this topic</h5>
            <div class="d-flex justify-content-between" style="margin-top: 50px;">
                    <router-link to="./menu" style="text-decoration: none;">
                    <button style="border: none; background-color: #8F8E95; color:#FFFFFF;
                    border-radius: 7px; height: 50px; width: 150px;">
                    <img src="./img/arrowBack.png" alt="" class="me-2">
                    Previous</button>
                    </router-link>
                    <router-link to="./assignment" style="text-decoration: none;">
                    <button style="border: none; background-color: #8F8E95; color:#FFFFFF;
                    border-radius: 7px; height: 50px; width: 150px;">Next
                    <img src="./img/arrowForward.png" alt="" class="mx-2"></button>
                    </router-link>
                </div>
            <div class="d-flex mt-5 p-3" style="background-color: #C01C03; height: 60px; color: #FFFFFF;">
                <div class="d-flex mx-5">
                    <img src="./img/Vector.png" alt="" class="me-3">
                    <h5>Leave Ratings</h5>
                </div>
                <div class="d-flex me-5">
                    <img src="./img/Certificate.png" alt="" class="me-3">
                    <h5>Get Certificate</h5>
                </div>
                <div class="d-flex me-5">
                    <img src="./img/Share.png" alt="" class="me-3">
                    <h5>Share this course</h5>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>