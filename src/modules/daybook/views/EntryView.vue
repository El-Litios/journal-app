<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-sucess fs-3 fw-bold">{{getEntryDate.day}}</span>
                <span class="mx-1 fs-3">{{getEntryDate.month}}</span>
                <span class="mx-2 fs-4 fw-light">{{getEntryDate.yearDay}}</span>
            </div>

            <div>
                <input type="file" @change="onSelectedImage" ref="imgSelector" v-show="false" accept="image/png, image/jpg, image/jpeg">
                <button class="btn btn-danger text-white mx-2" @click="deleteEntries()" v-if="entry.id">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary mx-2" type="file" @click="selectionImageBtn">
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

    <img  v-if="entry.picture && !localImage" :src="entry.picture" alt="entry-img" class="img-thumbnail">
    <img v-if="localImage" :src="localImage" alt="entry-img" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'

import getDateEntry from '../helpers/getDateEntry'
import uploadImage from '../helpers/uploadImage'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            entry: null,
            localImage: null,
            file: null
        }
    },

    components: {
        FabButton: defineAsyncComponent( () => import('../components/FabButton.vue'))
    },

    methods: {
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),

        loadEntry(){
            let entry;
            
            if (this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }       
            }else{
                entry = this.getEntriesById( this.id )
                if (!entry) return this.$router.push( { name: 'No-entry' } )
            }
           
            this.entry = entry
        },

        async saveEntry(){
            new Swal({
                title: 'Espere un momento',
                allowOutsideClick: false,
            }) 

            Swal.showLoading()

            const urlimg = await uploadImage(this.file)
            this.entry.picture = urlimg

            if (this.entry.id) {
               await this.updateEntry( this.entry )
            } else {
               const id = await this.createEntry(this.entry)
               this.$router.push( { name: 'Entry', params: { id }} )
            }

            Swal.fire('Guardado!!', 'Entrada registrada :D', 'success')
            this.file = null
        },

        async deleteEntries(){

            const result = await Swal.fire({
                title: 'Está seguro de eliminar la entrada?',
                text: 'Al se borrado, no hay vuelta atras D:',
                showDenyButton: 'true',
                confirmButtonText: 'Aceptar'
            })

            if (result.isConfirmed) {

                new Swal({
                    title: 'Un momento por favor.',
                    allowOutsideClick: false
                })

                Swal.showLoading()

                await this.deleteEntry(this.entry.id)

                this.$router.push({ name: 'No-entry'})

                Swal.fire('Entrada borrada', '', 'success')
            }
            
        },
        
        onSelectedImage( ev ){
           const file =  ev.target.files[0]

           if (!file) {
               this.localImage = null
               this.file = null
               return
           }

            this.file = file
           const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL(file)


        },

        selectionImageBtn(){
            this.$refs.imgSelector.click()
        }

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