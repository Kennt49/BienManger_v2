<template>

    <body class="back-color">
        <nav class="navbar bg-light">
            <div class="container-fluid navbar-back-color">
                <a class="navbar-brand" href="#">
                    <div class="display">
                        <div class="div_logo">
                            <img class="logo_nav" src="../assets/Logo_bien-manger.png" alt="">
                        </div>
                    </div>
                    <div class="title">
                        <h1>Bien-Manger</h1>
                    </div>
                </a>
                <div class="display">
                    <div class="display">
                        <button type="button"
                            class="btn display btn-outline-primary navbar-back-color styleblock-radius"
                            v-on:click="vers"><i class="bi bi-arrow-left-circle-fill"></i></button>
                    </div>
                    <div class="display">
                        <button type="button" class="btn display btn-outline-primary">
                            <i class="bi bi-search-heart-fill"></i></button>
                    </div>
                </div>
            </div>
        </nav>
        <div>
            <div>
                <br>
                <div v-for="(recette, index) in uneRecette" :key="index">
                    <h1 class="backblock-title-color styleblock-title-radius displayblock-center">
                        <article class="bold text-capitalize"> {{ recette.Name }} </article>
                    </h1><br>
                    <div class="gridblock-3col">
                        <div class="backblock-color styleblock-radius">Pour
                            <article class="bold text-capitalize"> {{ recette.guest }} </article> personnes
                        </div>
                        <div class="backblock-color styleblock-radius">A préparer en
                            <article class="bold text-capitalize"> {{saisons[(recette.saison_id)-1].Name}} </article>
                        </div>
                        <div class="backblock-color styleblock-radius">A servir <br> en
                            <article class="bold text-capitalize"> {{plat[(recette.plat_id)-1].menu}} </article>
                        </div>
                    </div>
                </div>
                <br>
                <div class="gridblock-6col" v-for="(ingredient, index) in ingredients" :key="index">
                    <div class="text-capitalize backblock-title-color styleblock-radius"> {{
                    element[(ingredient.ingredients_id) - 1].Name }} </div>
                    <div> {{ ingredient.quantity }} </div>
                    <div> {{ element[(ingredient.ingredients_id) - 1].unit}}</div>
                </div>
                <div v-for="(etape, index) in etapes" :key="index">
                    <div><br>Etape {{ etape.number }} <br></div>
                    <div> {{ etape.content }}</div>
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
            return this.$store.state.retourData?.saisons;
        },
        element() {
            return this.$store.state.retourData?.element;
        },
        plat() {
            return this.$store.state.retourData?.plats;
        }
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