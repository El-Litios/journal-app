<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-sucess fs-3 fw-bold">{{getEntryDate.day}}</span>
                <span class="mx-1 fs-3">{{getEntryDate.month}}</span>
                <span class="mx-2 fs-4 fw-light">{{getEntryDate.yearDay}}</span>
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
            <textarea placeholder="Cuentame tu dia" v-model="entry.text"></textarea>
        </div>
    </template>

    <FabButton icon="fa-save" @click="saveEntry()" />

    <img src="https://www.xtrafondos.com/wallpapers/paisaje-digital-en-atardecer-5846.jpg" alt="entry-img" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'

import getDateEntry from '../helpers/getDateEntry'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            entry: null
        }
    },

    components: {
        FabButton: defineAsyncComponent( () => import('../components/FabButton.vue'))
    },

    methods: {
        ...mapActions('journal', ['updateEntry']),

        loadEntry(){
            const entry = this.getEntriesById( this.id )
            if (!entry) return this.$router.push( { name: 'No-entry' } )
            this.entry = entry
        },

        async saveEntry(){
            this.updateEntry( this.entry )
        },

    },

    computed: {
        ...mapGetters('journal', ['getEntriesById']),

        getEntryDate(){
            const { day, month, yearDay } = getDateEntry(this.entry.date)
            return {day, month, yearDay}
        }
    },

    created() {
        this.loadEntry()
    },

    watch: {
        id(){
            this.loadEntry()
        }
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