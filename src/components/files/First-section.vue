<template>
<!---First Section-->
    <section>
      <div class="container">
          <div>
              <h1 class="mt-5 px-3">Dashboard</h1>
          </div>
          <div class="row">
              <div class="col-1 D-items w-25 m-4">
                <div class="d-flex">
                    <div class="img-bg p-4"><img src="./assets/img/Book.png" alt="Book" class="img-fluid"></div>
                    <div class="pt-4 D-text">
                        <h3>10</h3>
                        <h6>Enrolled Courses</h6>
                    </div>
                </div>
              </div>
              <div class="col-1 D-items w-25 m-4">
                  <div class="d-flex">
                      <div class="img-bg p-4"><img src="./assets/img/Video.png" alt="Video" class="img-fluid"></div>
                      <div class="pt-4 D-text">
                          <h3>5</h3>
                          <h6>Active Courses</h6>
                      </div>
                  </div>
              </div>
              <div class="col-1 D-items w-25 m-4">
                  <div class="d-flex">
                      <div class="img-bg p-4"><img src="./assets/img/Favourite.png" alt="Favourite" class="img-fluid"></div>
                      <div class="pt-4 D-text">
                          <h3>15</h3>
                          <h6>Wish List</h6>
                      </div>
                  </div>
              </div>
          <div class="row">
              <div class="col-1 D-items w-25 m-4">
                  <div class="d-flex">
                      <div class="img-bg p-4"><img src="./assets/img/Complete.png" alt="Completed" class="img-fluid"></div>
                      <div class="pt-4 D-text">
                          <h3>2</h3>
                          <h6>Completed Courses</h6>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
  </section>

  </template>

<style scoped>
    
h5 span, h3 {
    font-weight: 600;
}

h1 {
    font-weight: 600;

}

.D-items {
    background-color: #FFFFFF;
    border-radius: 5px;
}

h6 {
    font-weight: 400;
    font-size: 10px;
}

.D-text {
    margin-top: 10px;
}
</style>