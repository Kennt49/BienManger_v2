<template>
    <div>
        <div>
            <p @click="created">dede</p>
        </div><br>

        <div>
            <div v-for="(recette, index) in recettes" :key="index" v-on:click="voir">
                <div :data-value="recette.id"><br>{{ recette.Name }}</div>
                <div>pour la saison d{{ saisons[(recette.saison_id) - 1].Name }}</div>
                <div>nombre de convives {{ recette.guest }}</div>
                <div>{{ recette.description }} </div>
                <img src={{image[(recette.id)].url}} />
            </div>

        </div>
    </div>


</template>
<script>
// <img src=image[(recette.id)].url />//





export default {
    name: 'retourDataView',
    computed: {

        saisons() {
            return this.$store.state.retourData?.saisons;
        },
        recettes() {
            return this.$store.state.retourData?.recettes;
        },
        image() {
            return this.$store.state.retourData?.images;
        }
    },
    methods: {
        created() {
            fetch(process.env.VUE_APP_CON_URL + "/recipe")
                .then(data => data.json())
                .then(data => {
                    this.$store.commit('updateData', data);
                })
        },
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