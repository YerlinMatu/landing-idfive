<template lang="html">
<div class="resources">
  <h4>Resources for...</h4>
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
    background-color: #e1e1e1;
    height: 500px;

    .cardX {
      background-color: white;
      height: 260px;
      width: 200px;
      .cardX-title {
        width: 200px;
        height: 50px;
        background-color: #003c4d;

        strong {
          margin: 0 auto;
          text-align: center;
          color: white;
        }
        a {  color: black; }
      }
       .cardX-content {

       }
    }
  }
</style>
