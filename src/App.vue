<template>
<div>
<navbar></navbar>
<div class="banner">
  <img src="./assets/Images/hero_image.png" alt="hola">
</div>
<div class="container one">
  <div class="row">
    <!-- firs info -->
    <div class="col s6 first-content">
      <div class="container">
      <h4 class="title">
        Not Hopkins Governement <br>
        and Community Affairs
      </h4>
      <p>
        Maecenas tempus tellus eget condimentum <br>
        rihouscus, sem quam semper liber, sit amet
        adipiscing sem neque sed ipsum.
      </p>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </small>
        <small>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <button class="btn btn-yellow">Read Our Mission Statement</button>
        </small>
        </div>
    </div>
    <!-- Second info -->
    <div class="col s6 second-content">
      <div class="container">
      <h4 class="center-align">
        Have a Question?
      </h4>
      <small>
        <center>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </center>
      </small><br>
      <button class="btn btn-yellow">Contact Us</button>
      </div>
    </div>
  </div>
  </div>
<!--  <img src="./assets/Images/have_question.png" class="photo1"> -->
  <SectionOne></SectionOne>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$blue: #003c4d;
$yellow: #ffce00;
i {
  vertical-align: top;
  line-height: 40px;
  margin-top: -7px;
}
#navbarOne {
   background-color:  $blue;
   height: 40px;
   line-height: 40px;
   .nav-wrapper {
     height: 174 / 2 !important;
   }
}
 #navbarTwo {
   background-color: white;
   .brand-logo {
     font-size: 20px;
     margin-left: 20px;
   }
   .logo {
     border: solid 1px $blue;
     background-color: white;
   }
   a {
      color: $blue;
      font-size: 20px;
    }
   ul {
      position: absolute;
      margin-left: 66%;
   }
 }
 // Banner
.banner {
  width: 100%;
  img { width:  100%; }
}

// first section
.btn-yellow {
  background-color: $yellow;
  color: black;
  border: none;
  border-radius: none !important;
  text-transform: capitalize;
  box-shadow: none;
  &:hover {
    background-color: $yellow;
    box-shadow: none;
  }
}

.one {
  width: 100%;
  height: 400px;

   .title {
    margin: 10 auto;
    text-align: justify;
  }
  p, small {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h4 {
    color: $blue;
    margin-top: 50px;
   }

  .first-content {
    margin-top: -10px;
    height: 500px;
    color: black;
    button {
      margin-top: 20px;
      display: block;
    }
    ul { margin-top: 20px;  }
    li { margin-bottom: 10px; }
  }
  //padding: 60px;
  .second-content {
  //  padding: 20px;
    margin-top: -10px;
    background-color: $blue;
    height: 400px;
    color: white;
    button {
      margin: 0 auto;
      margin-top: 20px;
      display: block;
    }
    h4 { color: white }
    p, small {
      margin: 0 auto;
      text-align: center;
     }
  }
  .photo1 {
    margin: 0 auto;
    margin-top: 0px;
    padding: 0px;
    position: relative;
    width: 50%;
    margin-top: 42px;
    margin-left: -10px;
  }
}


</style>
