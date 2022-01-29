<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <button @click="GoToDayBook" class="btn btn-success">A</button>
    <button @click="GoToDayBook" class="btn btn-primary">B</button>
    <button @click="GoToDayBook" class="btn btn-danger">C</button>
    <button @click="GoToDayBook" class="btn btn-darker">C</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    GoToDayBook(){
      this.$router.push({ name: 'No-entry' })
    }
  }
}
</script>
