<template>
    <Navbar/>

    <div v-if="isLoading" class="row justify-content-md-center">
        <div class="col-3 alert-infor text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync">

                </i>
            </h3>
        </div>
    </div>

    <div v-else class="d-flex">
        <div class="col-">
            <EntryList/>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
import EntryList from '../components/EntryList.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        Navbar, EntryList
    },

    methods:{
        ...mapActions('journal', ['laodEntries'])
    },

    computed: {
        ...mapState('journal', ['isLoading'])
    },

    created() {
        this.laodEntries()
    }
}
</script>