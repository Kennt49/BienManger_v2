<template>

    <body class="back-color">
        <nav class="navbar sticky-top">
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
                <div >
                    <h1 class="backblock-title-color styleblock-title-radius displayblock-center">
                        <article class="bold text-capitalize"> {{uneRecette.Name }} </article>
                    </h1><br>
                    <div class="gridblock-3col">
                        <div class="backblock-color styleblock-radius">Pour
                            <article class="bold text-capitalize"> {{ uneRecette.guest }} </article> personnes
                        </div>
                        <div class="backblock-color styleblock-radius">A préparer en
                            <article class="bold text-capitalize"> {{uneRecette.saison.Name}} </article>
                        </div>
                        <div class="backblock-color styleblock-radius">A servir <br> en
                            <article class="bold text-capitalize"> {{uneRecette.plat.menu}} </article>
                        </div>
                    </div>
                </div>
                <br>
                <div class="gridblock-10col bold text-align-left">
                    <div>Ingrédients</div>
                    <div>Qté</div>
                </div><br>
                <div class="gridblock-10col text-align-left" v-for="(ingredient, index) in ingredients" :key="index">
                    <div class="text-capitalize"> {{ingredient.Name }}
                    </div>
                    <div>
                        {{ingredient.ingredients_recettes.quantity }}
                    </div>

                </div> <br>
                <div class="bold text-align-left">
                    Etapes
                </div> <br>
                <div class="gridblock-7col text-align-left" v-for="(etape, index) in etapes" :key="index">
                    <div> {{ etape.number }}
                    </div>
                    <ul>
                        <li>{{ etape.content }}</li>
                    </ul>
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
            return this.$store.state.RecetteUniq?.etapes;
        },
        uneRecette() {
            return this.$store.state.RecetteUniq;
        },
        ingredients() {
            return this.$store.state.RecetteUniq?.ingredients;
        },
        saisons() {
            return this.$store.state.RecetteUniq?.saison;
        },
        plat() {
            return this.$store.state.RecetteUniq?.plat;
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