<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'Entry', params: { id: entry.id } })">
      <!-- Title -->
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">{{getDay}}</span>
          <span class="mx-1 fs-5">{{getMonths}}</span>
          <span class="mx-1 fs-5">{{getYear}}</span>
      </div>
      <div class="entry-description">
          {{shortingText}}
      </div>
  </div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },

    computed: {
        shortingText(){
            return (this.entry.text.length > 60) ? this.entry.text.substring(0,50) + '...' : this.entry.text
        },

        getDay(){
            const date = new Date(this.entry.date)
            return date.getDate()
        },

        getMonths(){
            const date = new Date(this.entry.date)
            return months[ date.getMonth() ]
        },

        getYear(){
            const date = new Date(this.entry.date)
            return `${date.getFullYear()}, ${days[ date.getDay() ]}`
        }
    }
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