<template>
    <body>
        <div v-for="(recette, index) in recettes" :key="index">
            <VignetteRecette :saisons="saisons" :plats="plats" :recette="recette" :data-value="recette.id"
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