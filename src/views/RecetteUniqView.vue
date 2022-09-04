<template>
    <div>
        <div>

            <p v-on:click="vers">retour</p>
        </div><br>

        <div>
            <div v-for="(recette, index) in uneRecette" :key="index">
                <h3> {{ recette.Name }} <br></h3>
                <div>nombre de convives {{recette.guest}}<br> </div>
                <div>pour la saison d{{ saisons[(recette.saison_id) - 1].Name }}</div>
            </div>

            <div v-for="(etape, index) in etapes" :key="index">
                <div><br>etapes {{ etape.number }} <br></div>
                <div> {{ etape.content }}</div>
            </div>
            <div v-for="(ingredient, index) in ingredients" :key="index">
                <div><br>quantite {{ ingredient.quantity }} {{ element[(ingredient.ingredients_id)-1].unité }} <br></div>
                <div> {{ element[(ingredient.ingredients_id)-1].Name }}</div>
            </div>
        </div>
    </div>

</template>
<script>
 





export default {
    name: 'RecetteUniqView',
    computed: {

        etapes() {
            return this.$store.state.RecetteUniq?.etape;
        },
        uneRecette() {
            return this.$store.state.RecetteUniq?.recettes;
                    },
        ingredients(){
            return this .$store.state.RecetteUniq?.ingre_recet;
        },      
        saisons() {
            return this.$store.state.retourData.saisons;
        },
        element() {
            return this.$store.state.retourData.element;
        },
    },
    methods: {
        vers(){
    this.$router.push("/retourData") ;
}
    }
}
</script>

<style>
</style>