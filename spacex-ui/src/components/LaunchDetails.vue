<template>
    <v-card class="pa-3">
        <h1 class="text-h6 text-center mb-3">{{ title }}</h1>
        <p class="text-caption px-4">
            {{ details }}
        </p>
        <div class="d-flex justify-center py-4">
            <v-btn 
                small 
                color="primary" 
                link :href="links.article_link || links.video_link"
                target="is_blank">
                    See more
            </v-btn>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        title: String,
        details: String,
        links: Object
    }
}
</script>

<style>

</style>