<template>

    <body>
        <div v-for="(recette, index) in recettes" :key="index"><br />
            <div v-on:click="voir" :data-value="recette.id" style="font-weight: bold">{{ recette.Name }}</div>
            <div>A servir en {{ saisons[(recette.saison_id) - 1].Name }} comme <div class="text-lowercase">
                    {{plats[(recette.plat_id)-1].menu}}</div>
            </div>
            <div>Pour {{ recette.guest }} personnes</div>
            <div>{{ recette.description }} </div>
        </div>
    </body>
</template>

<script>
export default {
    name: 'retourDataView',
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
        fetch(process.env.VUE_APP_CON_URL + "/recipe")
            .then(data => data.json())
            .then(data => {
                this.$store.commit('updateData', data);
            })
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