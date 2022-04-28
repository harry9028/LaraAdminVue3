<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    // expose to template and other options API hooks
    return {
      count,
    };
  },

  mounted() {
    console.log(this.count); // 0
  },
};
</script>


<template>
  <div class="content-wrapper">
    <div class="container">
      <div class="row p-2">
        <button @click="count++">{{ count }}</button>
      </div>
    </div>
  </div>
</template>