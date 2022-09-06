<template>

    <body class="back-color">
        <div>
            <div>

                <p class="backblock-color styleblock-radius" v-on:click="vers">retour</p>
            </div><br>

            <div>
                <div v-for="(recette, index) in uneRecette" :key="index">
                    <h1 class="backblock-color styleblock-radius">{{ recette.Name }} </h1>
                    <div class="backblock-color styleblock-radius">Pour {{ recette.guest }} personnes</div>
                    <div class="backblock-color styleblock-radius">Préparez-le en{{ saisons[(recette.saison_id) -
                            1].Name
                    }}</div>
                </div>

                <div v-for="(etape, index) in etapes" :key="index">
                    <div><br>etapes {{ etape.number }} <br></div>
                    <div> {{ etape.content }}</div>
                </div>
                <div v-for="(ingredient, index) in ingredients" :key="index">
                    <div><br>quantite {{ ingredient.quantity }} {{ element[(ingredient.ingredients_id) - 1].unité }}
                        <br>
                    </div>
                    <div> {{ element[(ingredient.ingredients_id) - 1].Name }}</div>
                </div>
            </div>
        </div>
    </body>
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
        ingredients() {
            return this.$store.state.RecetteUniq?.ingre_recet;
        },
        saisons() {
            return this.$store.state.retourData.saisons;
        },
        element() {
            return this.$store.state.retourData.element;
        },
    },
    methods: {
        vers() {
            this.$router.push("/retourData");
        }
    }
}
</script>

<style>
</style>