<template>
    <v-card v-if="ships.length" class="mb-4">
        <v-window
            v-model="slide"
            reverse>
                <v-window-item
                    v-for="item,index in ships"
                    :key="`card-${index}`">
                        <img :src="item.image" alt="" style="width: 100%; height: auto" />
                </v-window-item>
        </v-window>

        <div class="justify-space-between d-flex" v-if="ships.length > 1">
            <v-btn
                text
                @click="prev">
                    <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
                text
                @click="next">
                    <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        ships: Array
    },

    data: () => ({
        slide: null
    }),

    methods: {
        next () {
            this.slide = this.slide + 1 === this.length ? 0 : this.slide + 1
        },
        prev () {
            this.slide = this.slide - 1 < 0 ? this.length - 1 : this.slide - 1
        },
    }
}   
</script>

<style>

</style>