<template>
  <div>
    <h1>test {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "firstroutechild",
  data() {
    return {
      msg: "FirstRouteChild"
    };
  },
  mounted() {
    console.log("mounted child");
    //debugger;
  }
};
</script>