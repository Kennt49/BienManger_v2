<template>

    <body>
        <nav class="navbar navbar-brand opacity8 sticky-top container-fluid navbar-back-color gridblock-8col">
            <img class="logo_nav div_logo" src="/Logo_bien-manger.png" alt="">
            <h1>Bien-Manger</h1>
            <button type="button" class="btn" @click="add"><i class="bi bi-plus-circle-fill"></i></button>
            <button type="button" class="btn" @click="vers"><i class="bi bi-arrow-left-circle-fill"></i></button>
            <button type="button" class="btn" @click="modify"><i class="bi bi-pencil-fill"></i></button>
            <button type="button" class="btn" @click="search"><i class="bi bi-search-heart-fill"></i></button>
        </nav>
        <div>
            <h1>
                <input :type="text" :readonly="readOnly" class="bold text-align-center text-capitalize"
                    v-model="uneRecette.Name" />
            </h1>

            <div class="gridblock-3col">
                <div class="backblock-color styleblock-radius">Pour
                    <input readonly class="bold backblock-color text-align-center text-capitalize"
                        v-model="uneRecette.guest" />
                    personnes
                </div>
                <div class="backblock-color styleblock-radius">A préparer en
                    <input disabled class="bold text-align-center backblock-color text-capitalize"
                        v-model="uneRecette.saison.Name" />
                </div>
                <div class="backblock-color styleblock-radius">A servir <br> en
                    <input disabled class="bold text-align-center backblock-color text-capitalize"
                        v-model="uneRecette.plat.menu" />
                </div>
            </div>
            <div class="gridblock-10col bold text-align-left">
                <div>Ingrédients</div>
                <div>Qté</div>
            </div>
            <div class="gridblock-10col text-align-left" v-for="(ingredient, index) in ingredients" :key="index">
                <input readonly class="text-capitalize" v-model="ingredient.Name" />
                <input readonly v-model="ingredient.ingredients_recettes.quantity" />
            </div>
            <div class="bold text-align-left">Etapes</div>
            <div class="gridblock-7col text-align-left" v-for="(etape, index) in etapes" :key="index">
                <input readonly v-model="etape.number" />
                <ul>
                    <li><input v-model="etape.content" /></li>
                </ul>
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
        },
        readOnly() {
            let estReadonly = this.step != 1
            return estReadonly;
        }



    },
    data() {
        return {
            step: 0,
        }
    },
    methods: {
        vers() {
            this.$router.push("/retourData");
        },
        modify() {

            this.step = 1;

        }
    }
}
</script>

<style>

</style>