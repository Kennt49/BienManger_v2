<template>

    <main>
        <div>
            <label for="titre">Titre de la recette</label>
            <input class="text-align-center margin" type="text" v-model="this.collect.Name" placeholder="couscous" />
        </div>
        <div>
            <label for="guest">Nombre de convives</label>
            <input class="text-align-center" type="text" v-model="this.collect.guest" placeholder="2" />
        </div>


        <label for="guest">Description de la recette</label>
        <input class="text-align-center" type="text" v-model="this.collect.description"
            placeholder="description recette" /><br>
        <div id="v-model-select" class=""> A prepare en
            <select v-model="this.collect.saison_id">
                <option>Choisissez la saison</option>
                <option v-for="(sais, i) of saisons" :key=i :value=sais.id> {{sais.Name}}</option>
            </select>{{ this.collect.saison }}
        </div>
        <div id="v-model-select" class=""> A servir en
            <select v-model="this.collect.plat_id">
                <option disabled value="">Choisissez le type de plat</option>
                <option v-for="(plat ,i ) of plats" :key=i :value=plat.id>
                    {{ plat.menu }}
                </option>
            </select>
        </div>
        <p v-if="step == 0" @click="valid">Valider</p>

        <div v-if="step === 1">
            <AjoutIngredients :ingredients="ingredients" :transfertId="transfertId"></AjoutIngredients>
            <AjoutEtape :transfertId="transfertId"></AjoutEtape>
            <div>
                <p @click="valide">Valider</p>
            </div><br>
        </div>
    </main>





</template>
<script>

import AjoutIngredients from '../components/AjoutIngredients.vue'
import AjoutEtape from '../components/AjoutEtape.vue'

export default {
    name: 'ajoutView',
    components: {
        AjoutIngredients,
        AjoutEtape,


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
                guest: 2,
                description: "",
                saison_id: "",
                plat_id: "",
                utilisateur_id: 1,

            },

            step: 0,
            transfertId: 0,
        }



    },

    methods: {
        valid() {//envoie les données vers la BDD de la recette
            this.collect.Slug = this.collect.Name;
            fetch(process.env.VUE_APP_CON_URL + '/recipe/add', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.collect)
            })
                .then((data) => data.json())
                .then(data => (this.$store.commit('ajoutrecette', data)))
                .then(this.miseAJour);
            this.step = 1;

        },
        valide() {//envoie des etapes et ingredient en base non fini a debugger

            //this.valideEtape();
            this.validIgredients();
            this.$router.push("/retourData");
        },



        miseAJour() {
            let index = this.recettes.length;
            index = index - 1;
            let id = this.recettes[index].id;
            this.transfertId = id;
        }
    }
}

</script>

<style>

</style>