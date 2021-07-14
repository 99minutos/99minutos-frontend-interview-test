<template>
    <div class="loading-screen d-flex justify-center align-center grey lighten-2">
        <v-progress-circular
            :size="70"
            :width="7"
            color="primary"
            indeterminate>
        </v-progress-circular>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-screen {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        height: 100%;
        width: 100%;
        opacity: .5;
    }
</style>