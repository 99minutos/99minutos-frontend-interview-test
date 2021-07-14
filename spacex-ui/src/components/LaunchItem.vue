<template>
    <v-card :class="`launch-item d-flex px-4 text-left align-center ${isActive ? 'blue white--text' : ''}`" @click="selectItem()">
        <div class="lauch-item-avatar">
            <v-icon :color="isActive ? '#fff' : '#000'" size="45">mdi-rocket-launch</v-icon>
        </div>

        <div class="lauch-item-info flex-grow-1 py-1">
            <h3 class="launch-item-title text-subtitle-2">{{ title }}</h3>
            <div class="launch-item-subtitle">{{ subtitle }}</div>
            <div class="launch-item-date text-right">{{ dateFormat }}</div>
        </div>
    </v-card>
</template>

<script>
import moment from 'moment';
import { services } from '../services';

export default {
    props: {
        title: String,
        subtitle: String,
        date: String,
        id: Number
    },

    computed: {
        dateFormat(){
            return moment(this.date).format('DD/MM/YYYY')
        },

        launchSelectId(){
            return this.$store.state.launchSelectId
        },

        isActive(){
            return this.launchSelectId == this.id
        },
    },

    methods: {
        async selectItem(){
            try {
                this.$store.dispatch('selectItem', {id: this.id})
                const response = await services.getLaunchById(this.id)
                const { data } = await response.json();
                this.$store.commit('setLaunchSelect', data.launch)
            } catch(err){
                alert('Connection could not be established');
            } finally {
                this.$store.commit('setDetailsLoading',false)
            }
        }
    }
}
</script>

<style>
    .launch-item:not(:last-child){
        margin-bottom: 10px;
    }

    .lauch-item-avatar {
        width: 70px;
        height: 100%;
    }
    
    .launch-item-subtitle {
        font-size: 12px;
    }

    .launch-item-date {
        font-size: 10px;
    }
</style>