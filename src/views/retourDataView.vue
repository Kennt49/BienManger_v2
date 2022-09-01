<template>
    <div>
        <div>
            <p @click="retourData">dede</p>
        </div><br>

        <div>
            <div v-for="(recette, index) in recettes" :key="index">
                <div><br>{{ recette.Name }}</div>
                <div>pour la saison d{{ saisons[(recette.saison_id) - 1].Name }}</div>
                <div>nombre de convives {{ recette.guest }}</div>
                <div>{{ recette.description }} </div>
            </div>

        </div>
    </div>

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
        }
    },
    methods: {
        retourData() {
            fetch(conUrl + "/recipe")
                .then(data => data.json())
                .then(data => {
                    this.$store.commit('updateData', data);
                    // console.log(this.$store.state.retourData);
                }) //this.retourData);



        }

    }
}
</script>

<style>
</style>