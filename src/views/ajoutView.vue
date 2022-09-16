<template>

    <main>
        <div>
            <label for="titre" class="margin-top">Titre de la recette</label>
            <input class="text-align-center margin backblock-color opacity8 styleblock-radius" type="text"
                v-model="this.collect.Name" placeholder="Insérez le nom" />
        </div>
        <div>
            <label for="guest">Nombre de personnes</label>
            <input class=" backblock-color opacity8 styleblock-radius text-align-center" type="text"
                v-model="this.collect.guest" placeholder="Exemple : 4" />
        </div>
        <div>
            <label>Description de la recette :</label>
            <input class=" backblock-color opacity8 styleblock-radius text-align-center" type="text"
                v-model="this.collect.description" placeholder="Ajoutez votre description" />
        </div>
        <div id="v-model-select" class="margin"> A preparer en <br>
            <select v-model="this.collect.saison_id" class="btn btn-secondary">
                <option disabled value="">Choisissez la saison</option>
                <option v-for="(sais, i) of saisons" :key=i :value=sais.id>{{sais.Name}}</option>
            </select>{{ this.collect.saison }}
        </div>
        <div id="v-model-select" class="margin"> A servir en <br>
            <select v-model="this.collect.plat_id" class="btn btn-secondary">
                <option disabled value="">Choisissez le type</option>
                <option v-for="(plat ,i ) of plats" :key=i :value=plat.id>{{ plat.menu }}</option>
            </select>
        </div>
        <p class=" backblock-color opacity8 styleblock-radius" v-if="step == 0" @click="validRecette">Passer à la
            seconde étape</p>

        <div v-if="step === 1">

            <AjoutIngredients ref="ajoutIngredients" :parametreFonction="parametreFonction" :ingredients="ingredients"
                :IdRecette="IdRecette">
            </AjoutIngredients>
            <AjoutEtape ref="ajoutEtape" :parametreFonction="parametreFonction" :IdRecette="IdRecette"></AjoutEtape>
            <div>

                <p class=" backblock-color opacity8 styleblock-radius" @click="validIngredientEtape"
                    data-bs-toggle="modal" data-bs-target="#modal3">
                    Valider</p>
            </div>
        </div>
        <VignettePopup />
    </main>

</template>
<script>

import AjoutIngredients from '@/components/AjoutIngredients.vue';
import AjoutEtape from '@/components/AjoutEtape.vue';
import VignettePopup from '@/components/VignettePopup'

const parametreFonction = "add";

export default {
    name: 'ajoutView',
    components: {
        AjoutIngredients,
        AjoutEtape,
        VignettePopup
    },
    computed: {

        saisons() {
            return this.$store.state.retourData?.saisons;
        },
        ingredients() {
            return this.$store.state.retourData?.element;
        },
        plats() {
            return this.$store.state.retourData?.plats;
        },
        recettes() {
            return this.$store.state.retourData?.recettes;
        }

    },

    data() {
        return {
            collect:
            {
                Name: "",
                Slug: "",
                guest: "",
                description: "",
                saison_id: "",
                plat_id: "",
                utilisateur_id: 1,

            },

            step: 0,
            IdRecette: 0,
            parametreFonction,
        }



    },

    methods: {
        validRecette() {//envoie les données vers la BDD de la recette
            this.collect.Slug = this.collect.Name;
            fetch(process.env.VUE_APP_CON_URL + '/recipe/add', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.collect)
            })
                .then((data) => data.json())
                .then(data => (this.$store.commit('ajoutrecette', data)))
                .then(this.miseAJour)
                .then(setTimeout(() => this.step = 1, 200));
            //FIXME: le delay est prevu pour permettre la mise a jour de la props

        },
        validIngredientEtape() {//envoie des etapes et ingredient en base non fini a debugger

            this.$refs.ajoutEtape.valideEtape();
            this.$refs.ajoutIngredients.valideIngredients();
            this.$router.push("/retourData");
        },
        miseAJour() {
            let index = this.recettes.length;
            index = index - 1;
            let id = this.recettes[index].id;
            this.IdRecette = id;

        }
    }
}

</script>

<style>

</style>