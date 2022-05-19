<template>
    <!---Second Section-->
  <section>
      <div class="container">
          <div>
              <h1 class="my-5 px-3">Trending Courses</h1>
          </div>
          <div class="row mb-5">
              <div class="col T-items me-5">
                  <div class=""><img src="./assets/img/DS.png" alt="Data Science" class="img-fluid course mb-4"></div>
                  <div class="ms-4">
                      <h4>Data Science And Data</h4>
                      <p class="course-description">All you need to know about
                           Data Science and Analitics right now.</p>
                  </div>
                  <div class="line"></div>
                  <div class="d-flex justify-content-between mt-4 mx-4">
                      <p class="invest">Investment: $90</p>
                      <div>
                          <img src="./assets/img/love.png" alt="heart" class="img-fluid">
                          <img src="./assets/img/tick.png" alt="" class="img-fluid">
                      </div>
                  </div>
              </div>

              <div class="col T-items me-5">
                  <div class=""><img src="./assets/img/FE.png" alt="Front-end" class="img-fluid course mb-4"></div>
                  <div class="ms-4">
                      <h4>Front End Development</h4>
                      <p class="course-description">All you need to know about
                           Front-end Development right now.</p>
                  </div>
                  <div class="line"></div>
                  <div class="d-flex justify-content-between mt-4 mx-4">
                      <p class="invest">Investment: $90</p>
                      <div>
                          <img src="./assets/img/love.png" alt="heart" class="img-fluid">
                          <img src="./assets/img/tick.png" alt="" class="img-fluid">
                      </div>
                  </div>
              </div>

            <div class="col T-items g-5">
                  <div class=""><img src="./assets/img/B.E.png" alt="Back End Development" class="img-fluid course mb-4"></div>
                  <div class="ms-4">
                      <h4>Back End Development</h4>
                      <p class="course-description">All you need to know about
                          Back-end Development right now.</p>
                  </div>
                  <div class="line"></div>
                  <div class="d-flex justify-content-between mt-4 mx-4">
                      <p class="invest">Investment: $90</p>
                      <div>
                          <img src="./assets/img/love.png" alt="heart" class="img-fluid">
                          <img src="./assets/img/tick.png" alt="" class="img-fluid">
                      </div>
                  </div>
              </div>
          </div>
          
          <!--second course row-->

          <div class="row second-course-row">
              <div class="col T-items me-5">
                  <div class=""><img src="./assets/img/F.S.png" alt="Full-Stack" class="img-fluid course mb-4"></div>
                  <div class="ms-4">
                      <h4>Full Stack Development</h4>
                      <p class="course-description">All you need to know about
                          Full Stack Development right now.</p>
                  </div>
                  <div class="line"></div>
                  <div class="d-flex justify-content-between mt-4 mx-4">
                      <p class="invest">Investment: $90</p>
                      <div>
                          <img src="./assets/img/love.png" alt="heart" class="img-fluid">
                          <img src="./assets/img/tick.png" alt="" class="img-fluid">
                      </div>
                  </div>
              </div>

              <div class="col T-items me-5">
                  <div class=""><img src="./assets/img/UI.png" alt="UI/UX Design" class="img-fluid course mb-4"></div>
                  <div class="ms-4">
                      <h4>UI/UX Design</h4>
                      <p class="course-description">All you need to know about
                          UI/UX Design right now.</p>
                  </div>
                  <div class="line"></div>
                  <div class="d-flex justify-content-between mt-4 mx-4">
                      <p class="invest">Investment: $90</p>
                      <div>
                          <img src="./assets/img/love.png" alt="heart" class="img-fluid">
                          <img src="./assets/img/tick.png" alt="" class="img-fluid">
                      </div>
                  </div>
              </div>

            <div class="col T-items g-5">
                  <div class=""><img src="./assets/img/DA.png" alt="Data Analyst" class="img-fluid course mb-4"></div>
                  <div class="ms-4">
                      <h4>Data Analyst</h4>
                      <p class="course-description">All you need to know about
                          Data Analyst right now.</p>
                  </div>
                  <div class="line"></div>
                  <div class="d-flex justify-content-between mt-4 mx-4">
                      <p class="invest">Investment: $90</p>
                      <div>
                          <img src="./assets/img/love.png" alt="heart" class="img-fluid">
                          <img src="./assets/img/tick.png" alt="" class="img-fluid">
                      </div>
                  </div>
              </div>
          </div>

        </div>
  </section>

  <!-- <section class="container">
      <div class="row">
          <div class="col-lg-4 card" style="width: 18rem;">
              <img src="img/DS.png" class="card-img-top" alt="Data Science">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
      </div>
  </section> -->

</template>

<style scoped>
    .card {
    padding: 0;
    margin: 0;
}
    .T-items {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 0;
    margin: 0;
}

.course {
    border-radius: 10px;
    width: 408px;
}

h4 {
    font-weight: 600;
    font-size: 18px;
}

.course-description {
    font-size: 13px;
    width: 80%;
}

.invest {
    color: #C01C03;
    font-weight: 600;
}

.line {
    border: 1px solid #8F8E95;
}

.second-course-row {
    margin-bottom: 350px;
}
</style>