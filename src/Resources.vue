<template lang="html">
<div class="resources">
  <h4 class="resources-title">Resources for...</h4>
  <div class="cardX">
     <div class="cardX-photo">
       <img src="./assets/Images/local_organization.png" alt="Photo" width="200">
     </div>
     <div class="cardX-title">
       <strong>Local <br>Organization</strong>
     </div>
     <div class="cardX-content">
        <ul>
          <li><a href="#">Resource Link</a></li>
          <li><a href="#">Resource Link</a></li>
          <li><a href="#">Resource Link</a></li>
        </ul>
     </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .resources {
    background-color: #e1e1e1 !important;
    height: 500px;
    .resources-title {
    //  position: absolute;
      margin: 0 auto;
      display: block;
      text-align: center;
  //    margin-top: 40px;

    }

    .cardX {
      background-color: white;
      height: 260px;
      width: 200px;
      .cardX-title {
        width: 200px;
        height: 50px;
        margin-top: -13px;
        background-color: #003c4d;

        strong {
          margin: 0 auto;
          margin-top: 15px;
          position: absolute;
          display: block;
          text-align: center;
          left: 50px;
          color: white;
        }

      }
       .cardX-content {
         a {
           color: black;
           margin:  0 auto;
           margin: 10px, 10px, 10px, 10px;
           text-align: center;
           padding: 50px !important;
          }
       }
    }
  }
</style>
