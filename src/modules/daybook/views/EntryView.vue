<template>
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
          <span class="text-sucess fs-3 fw-bold">12</span>
          <span class="mx-1 fs-3">Julio</span>
          <span class="mx-2 fs-4 fw-light">2022</span>
      </div>

      <div>
          <button class="btn btn-danger text-white mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>
          <button class="btn btn-primary mx-2">
              Subir Foto
              <i class="fa fa-upload"></i>
          </button>
      </div>

    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Cuentame tu dia"></textarea>
    </div>

    <FabButton icon="fa-save"/>

    <img src="https://www.xtrafondos.com/wallpapers/paisaje-digital-en-atardecer-5846.jpg" alt="entry-img" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        FabButton: defineAsyncComponent( () => import('../components/FabButton.vue'))
    }
}
</script>

<style lang="scss" scoped>

    textarea{
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }

</style>