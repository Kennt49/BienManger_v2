<template>

    <body class="back-img-cover">
        <VignetteNavbar></VignetteNavbar>
        <div>
            <h1>
                <textarea :readonly="readOnly" class="bold back-hidden text-align-center text-capitalize"
                    v-model="uneRecette.Name" />
            </h1>
            <div class="gridblock-3col">
                <div class="backblock-color opacity8 styleblock-radius">Pour
                    <input :type="text" :readonly="readOnly"
                        class="bold backblock-color text-align-center text-capitalize" v-model="uneRecette.guest" />
                    personnes
                </div>
                <div class="backblock-color opacity8 styleblock-radius">A préparer en
                    <input disabled class="bold text-align-center backblock-color text-capitalize"
                        v-model="uneRecette.saison.Name" />
                </div>
                <div class="backblock-color opacity8 styleblock-radius">A servir <br> en
                    <input disabled class="bold text-align-center backblock-color text-capitalize"
                        v-model="uneRecette.plat.menu" />
                </div>
            </div>
            <div class="gridblock-10col bold text-align-left">
                <div>Ingrédients</div>
                <div>Qté</div>
            </div>
            <div class="gridblock-10col text-align-left" v-for="(ingredient, index) in ingredients" :key="index">
                <input :type="text" :readonly="readOnly" class="text-capitalize back-hidden"
                    v-model="ingredient.Name" />
                <input :type="text" :readonly="readOnly" class="back-hidden"
                    v-model="ingredient.ingredients_recettes.quantity" />
            </div>
            <div class="bold text-align-left">Etapes</div>
            <div class="gridblock-7col text-align-left" v-for="(etape, index) in etapes" :key="index">
                <input :type="text" :readonly="readOnly" class="back-hidden" v-model="etape.number" />
                <ul>
                    <li><textarea :readonly="readOnly" class="back-hidden" v-model="etape.content" />
                    </li>
                </ul>
            </div>
        </div>
        <VignetteEndBar></VignetteEndBar>
    </body>
</template>

<script>
import VignetteNavbar from '@/components/VignetteNavbar'
import VignetteEndBar from '@/components/VignetteEndBar'

export default {
    name: 'RecetteUniqView',
    components: {
        VignetteNavbar,
        VignetteEndBar
    },
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
            return this.step != 1;
        }
    },
    data() {
        return {
            step: 1,
        }
    },
}
</script>

<style scoped>
textarea {
    border: 0
}
</style>