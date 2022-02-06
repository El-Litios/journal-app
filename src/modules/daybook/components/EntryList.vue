<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" name="" id="" class="form-control" placeholder="Buscar" v-model="term">
    </div>

    <div class="mt-2 d-flex flex-column">
      <button class="btn btn-primary mx-5" @click="$router.push({ name: 'Entry', params: { id: 'new'} })">
        <i class="fa fa-plus"></i>
      </button>
    </div>

    <div class="entry-scrollarea">
      <Entry v-for="entry in searchEntryByTerm" :key="entry.id" :entry="entry"/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      term: ''
    }
  },

  components:{
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },

  computed: {
    ...mapGetters('journal', ['getEntriesByTerm']),

    searchEntryByTerm(){
      return this.getEntriesByTerm(this.term)
    }
  }
}
</script>

<style lang="scss" scoped>
  .entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
  }

  .entry-scrollarea{
    height: calc(100vh - 120px);
    overflow: scroll;
  }
</style>