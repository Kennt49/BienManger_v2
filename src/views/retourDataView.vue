<template>

    <body class="back">
        <nav class="navbar opacity sticky-top">
            <div class="container-fluid navbar-back-color">
                <a class="navbar-brand" href="#"></a>
                <div class="gridblock-8col">
                    <img class="logo_nav div_logo" src="/Logo_bien-manger.png" alt="">
                    <h1>Bien-Manger</h1>
                    <button type="button" class="btn" @click="vers"><i
                            class="bi bi-arrow-left-circle-fill"></i></button>
                    <button type="button" class="btn" @click="modify"><i class="bi bi-pencil-fill"></i></button>
                    <button type="button" class="btn" @click="search"><i class="bi bi-search-heart-fill"></i></button>
                </div>
            </div>
        </nav>
        <div v-for="(recette, index) in recettes" :key="index">
            <VignetteRecette :saisons="saisons" :plats="plats" :recette="recette" 
                v-on:click="voir" />
        </div>
    </body>
</template>

<script>
import VignetteRecette from '@/components/VignetteRecette'

export default {
    name: 'retourDataView',
    components: {
        VignetteRecette
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
            
            console.log(process.env.VUE_APP_CON_URL + "/recipe/show/" + val)
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