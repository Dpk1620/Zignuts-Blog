<template>
  <!-- this component is use to showing every success msg for every action of users  -->
  <div class="modal">
    <div class="modal-content">
        <p>
            {{ this.modalMessage }}
        </p>
        <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
props:["modalMessage"],
methods:{
    closeModal(){
        this.$emit("Close-modal");
    }
}
}
</script>
<style lang="scss" scoped>

</style>