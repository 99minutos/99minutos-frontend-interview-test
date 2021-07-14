<template>
    <div class="launches-list pa-3 d-flex flex-column">
        
        <div class="py-5"> 
            <h1 class="text-h6 text-center">Last Launches</h1>
        </div>
        
        <div class="flex-grow-1 pa-3 overflow-auto">  
            <launch-item 
                v-for="item,index in launches" 
                :key="index"
                :title="item.mission_name"
                :subtitle="item.launch_site.site_name_long"
                :date="item.launch_date_local"
                :id="parseInt(item.id)" />
        </div>

        <template v-if="listLoading">
            <loading-screen />
        </template>
    </div>
</template>

<script>
import { services } from '../services';
import LaunchItem from './LaunchItem.vue'
import LoadingScreen from './LoadingScreen.vue'

export default {
    components: {
        LaunchItem,
        LoadingScreen
    },

    computed: {
        launches(){
            return this.$store.state.launches
        },

        launchSelect(){
            return this.$store.state.launchSelect
        },

        listLoading(){
            return this.$store.state.listLoading
        }
    },

    methods: {
        async getData(){
            try {
                this.$store.commit('setListLoading', true)
                const response = await services.getLaunches()
                const { data } = await response.json()
                this.$store.commit('setLaunches',[...data.launchesPast])
                console.log(data.launchesPast[0].mission_name);
            } catch(err){
                alert('Connection could not be established');
            } finally {
                this.$store.commit('setListLoading', false)
            }
        }
    },

    mounted(){
        this.getData()    
    }
}
</script>

<style scoped>
    
</style>