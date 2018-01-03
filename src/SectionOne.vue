<template lang="html">
  <div class="content">
    <h5>
      <h4>Did you know</h4>
      We surveyed over 600 commnunity members to <br>
      prioritize and address health needs.
    </h5>
    <button  class="btn btn-yellow">Read More</button>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss">
$blue: #003c4d;
$yellow: #ffce00;

.content {
  margin: 0 auto;
  margin-top: -10px;
  width: 100%;
  height: auto;
  padding: 40px;
  display: block;
  text-align: center;
//  padding: 0px;
  h4 { color: $yellow;}
  h5 { color: white; }
  button {
    margin: 0 auto;
    margin-top: 20px;
    display: block;
  }
  background-color: $blue
}
</style>
