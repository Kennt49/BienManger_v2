<template>

    <body class="back-img-cover">
        <VignetteNavbar></VignetteNavbar>
        <div class="backblock-color styleblock-radius text-capitalize opacity8" v-for="(recette, index) in recettes"
            :key="index">
            <VignetteRecette :saisons="saisons" :plats="plats" :recette="recette" v-on:click="voir" />
        </div>
        <VignetteEndBar></VignetteEndBar>
    </body>
</template>

<script>
import VignetteRecette from '@/components/VignetteRecette'
import VignetteNavbar from '@/components/VignetteNavbar'
import VignetteEndBar from '@/components/VignetteEndBar'

export default {
    name: 'retourDataView',
    components: {
        VignetteRecette,
        VignetteNavbar,
        VignetteEndBar
    },
    computed: {
        saisons() {
            return this.$store.state.retourData?.saisons;
        },
        recettes() {
            return this.$store.state.retourData?.recettes;
        },
        plats() {
            return this.$store.state.retourData?.plats;
        },
    },
    created() {
        this.$store.dispatch('recupRecettes')
    },
    methods: {
        voir(event) {
            let val = event.target.getAttribute('data-value');

            fetch(process.env.VUE_APP_CON_URL + "/recipe/show/" + val)
                .then(data => data.json())
                .then(data => {
                    this.$store.commit('recepUniq', data);
                })
            this.$router.push("/recetteUniq");
        },
    }
}
</script>

<style>

</style>