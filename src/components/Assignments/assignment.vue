<template>
    <div>
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
            <div class="col-8" style="height: 1000px">
                <h1 style="font-weight: 600; width: 800px;" class="p-5">You have made it this far, 
                see your project brief.</h1>
                <p style="width: 700px;" class="px-5"
                >ShootStar is a photography company. The have contacted you to design a website for them to help them share their work, take bookings, upload short tutorials and also post blugs using all the
                     knowledge you have gathered in this course. Give in details the followins in your submission:</p>
                <ol style="width: 700px;" class="px-5">
                    <li>Task flow</li>
                    <li>Wireframe</li>
                    <li>Low fidelity prototype</li>
                    <li>High fidelity prototype</li>
                </ol>
                <div class="d-flex justify-content-between" style="margin-top: 200px;">
                    <router-link to="./main" style="text-decoration: none;">
                   <button style="border: none; background-color: #8F8E95; color:#FFFFFF;
                    border-radius: 7px; height: 50px; width: 150px;">
                    <img src="./img/arrowBack.png" alt="" class="me-2">
                    Previous</button>
                    </router-link>
                    <router-link to="./assigned" style="text-decoration: none;">
                    <button style="border: none; background-color: #8F8E95; color:#FFFFFF;
                    border-radius: 7px; height: 50px; width: 150px;">Next
                    <img src="./img/arrowForward.png" alt="" class="mx-2"></button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>