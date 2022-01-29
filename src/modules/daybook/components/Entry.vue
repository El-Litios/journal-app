<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'Entry', params: { id: 1 } })">
      <!-- Title -->
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">12</span>
          <span class="mx-1 fs-5">Enero</span>
          <span class="mx-1 fs-5">2022</span>
      </div>
      <div class="entry-description">
          Descripcion de ejemplo
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #12e350;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
        }

        .entry-description{
            font-size: 12px;
        }
    }

</style>