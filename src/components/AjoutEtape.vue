<template>
    <legend>etapes de la recette</legend>
    <div v-for="(etape, index) of etapes" :key="index">
        <div>{{index+1}}</div><input type="text" v-model="etapes[index].content" /><br />
    </div>
    <a @click="create_champ">Ajouter une étape</a>
</template>
<script>


export default {
    name: 'AjoutEtape',
    data() {
        return {
            etapes: [{
                number: 1,
                content: "",
                recette_id: this.IdRecette
            }],
            phase: {
                number: 2,
                content: "",
                recette_id: this.IdRecette
            },
        }
    },
    props: {
        IdRecette: { type: Number },
    },
    created() {
    },

    methods: {
        create_champ() {
            this.etapes.push({ ...this.phase });
            this.phase.number = this.phase.number + 1;
            console.log(this.etapes[0].recette_id);
        },
        MiseAJourEtape() {
            this.etapes[0].recette_id = this.IdRecette;
            console.log(this.etapes[0].recette_id);
        },

        valideEtape() {            // parcourt le tableau d'objet et envoie les etapes
            for (let index = 0; index < this.etapes.length; index++) {
                fetch(process.env.VUE_APP_CON_URL + '/etape/add', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.etapes[index])
                })
                    .then((data) => data.json());
            }
        }
    }
}
</script>