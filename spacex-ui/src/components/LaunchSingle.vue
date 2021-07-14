<template>
    <div :class="`launch-select pa-3 overflow-auto grey lighten-2 d-sm-block ${mobileAct ? '' : 'd-none'}`">
        <div class="d-flex justify-end d-sm-none">
            <v-btn depressed x-small icon class="mb-3" @click="closeMobile()">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </div>

        <div v-if="Object.keys(launchSelect).length" style="width: 100%">
            <launch-galery :ships="launchSelect.ships" />
            
            <launch-details 
                :title="launchSelect.mission_name"
                :details="launchSelect.details"
                :links="launchSelect.links"/>
        </div>

        <div class="py-10 text-center no-select-mission d-flex flex-column justify-center" v-else>
            <div class="text-h4 grey--text mb-4">Select a mission</div>
            <div>
                <v-icon color="grey" size="40">mdi-hand-pointing-left</v-icon>
                <v-icon color="grey" size="40">mdi-rocket</v-icon>
            </div>
        </div>

        <template v-if="detailsLoading">            
            <loading-screen />
        </template>

    </div>
</template>

<script>
import LoadingScreen from './LoadingScreen.vue'
import LaunchGalery from './LaunchGalery.vue'
import LaunchDetails from './LaunchDetails.vue'

export default {

    components: {
        LoadingScreen,
        LaunchGalery,
        LaunchDetails
    },

    data: () => ({
    }),

    computed: {
		detailsLoading(){
			return this.$store.state.detailsLoading
		},
        
        launchSelect(){
            return this.$store.state.launchSelect
        },

        mobileAct(){
            return this.$store.state.mobileAct
        }
	},

    methods: {
        closeMobile(){
            this.$store.commit('setMobileAct', false)
        }
    }
}
</script>

<style>
    .no-select-mission {
        border: 1px dashed #9e9e9e;
        height: 100%;
    }
</style>