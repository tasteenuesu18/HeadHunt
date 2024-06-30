<template>
    <v-card class="common-card" hover ripple :style="{ height: cardHeight, width: cardWidth }">
        <v-img v-if="image" :src="imageSrc" class="white--text" height="200px">
            <v-card-title>{{ title }}</v-card-title>
        </v-img>
        <v-card-title v-else>{{ title }}</v-card-title>
        <v-card-text>
            {{ text }}
        </v-card-text>
        <v-icon class="card-icon">mdi-open-in-new</v-icon>
    </v-card>
</template>

<script>
export default {
    name: 'CommonCard',
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        image: {
            type: [String, Object], // String for URL, Object for binary data
            default: null,
        },
        cardHeight: {
            type: String,
            default: 'auto',
        },
        cardWidth: {
            type: String,
            default: 'auto',
        },
    },
    computed: {
        imageSrc() {
            if (typeof this.image === 'string') {
                return this.image;
            } else if (this.image instanceof Blob) {
                return URL.createObjectURL(this.image);
            }
            return null;
        },
    },
};
</script>

<style scoped>
.common-card {
    position: relative;
    transition: background-color 0.2s, transform 0.2s;
}

.common-card:hover {
    background-color: rgba(0, 0, 0, 0.1);
    /* シンプルな色の変化 */
}

.card-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    color: inherit;
}
</style>