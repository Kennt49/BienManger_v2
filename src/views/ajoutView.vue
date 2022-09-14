<template>
    <div>
        <div>
            <label for="titre">Titre de la recette</label>
            <input class="text-align-center" type="text" v-model="this.collect.Name" placeholder="couscous" /><br>
            <label for="guest">Nombre de convives</label>
            <input class="text-align-center" type="text" v-model="this.collect.guest" placeholder="2" /><br>
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

            <div v-if="step === 0">
                <legend>etapes de la recette</legend>
                <div v-for="(etape, index) of etapes" :key="index">
                    <div>{{index+1}}</div><input type="text" v-model="etapes[index].content" /><br />
                </div>
                <a @click="create_champ">Ajouter une étape</a>

                <AjoutIngredients :ingredients="ingredients" :transfertId="transfertId"></AjoutIngredients>

                <div>
                    <p @click="valide">Valider</p>
                </div><br>
            </div>
        </div>


    </div>



</template>
<script>
import  AjoutIngredients  from "../components/AjoutIngredients.vue";

export default {
    name: 'ajoutView',
    components: {
        AjoutIngredients

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
            etapes: [{ number: 1, content: "", recette_id: 0 }],
            phase: { number: 2, content: "", recette_id: 0 },
            step: 0,
            transfertId:0,
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
            // parcourt le tableau d'objet et envoie les etapes
            for (let index = 0; index < this.etapes.length; index++) {
                fetch(process.env.VUE_APP_CON_URL + '/etape/add', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.etapes[index])
                })
                    .then((data) => data.json());
            }
            // parcourt le tableau d'objet et envoie les ingredients
            for (let index = 0; index < this.elements.length; index++) {
                fetch(process.env.VUE_APP_CON_URL + '/ingredient_recette/add', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.elements[index])
                })
                    .then((data) => data.json());
            }
            this.$router.push("/retourData");
        },
        create_champ() {
            this.etapes.push({ ...this.phase });
            this.phase.number = this.phase.number + 1;
        },


        miseAJour() {
            let index = this.recettes.length;
            index = index - 1;
            let id = this.recettes[index].id;
            this.etapes[0].recette_id = id;
            this.phase.recette_id = id;
            this.transfertId=id;


        }
    }
}

</script>

<style>

</style>