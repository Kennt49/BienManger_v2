<template>
    <div>
        <legend>Ingrédients nécessaires</legend>
        <p>Choisissez un ingrédient déjà existant ou ajoutez en un nouveau</p>
        <div class="opacity8 styleblock-radius color" style="background-color: #7d8994;"
            v-for="(elem, index) of elements" :key="index">
            <select class="btn btn-secondary margin" v-model="elem.ingredients_id">
                <option v-for="(ingred, i) of ingredients" :key=i :value=ingred.id>{{ingred.Name}}</option>
            </select>
            <input class="backblock-color styleblock-radius" type="text" v-model="elem.quantity" /> <br>
            <a @click="ajoutIngre">Ajouter un ingredient</a>
        </div>

    </div>
    <div>
        <input type="text" v-model="NewIngred.Name" />
        <input type="text" v-model="NewIngred.unit" />
        <p @click="newIngEnv">propose</p>
    </div>
</template>
<script>


export default {
    name: 'AjoutIngredients',
    data() {
        return {
            NewIngred: {
                Name: '',
                unit: ''
            },
            ingre: {
                quantity: "",
                ingredients_id: 0,
                recettes_id: this.IdRecette
            },
            elements: [{
                quantity: "",
                ingredients_id: 0,
                recettes_id: this.IdRecette
            }],
        }
    },
    props: {
        ingredients: {
            type: Object
        },
        IdRecette: {
            type: Number
        },
        parametreFonction: {
            type: String
        },
        created() {
        },
    },

    methods: {
        ajoutIngre() {
            this.elements.push({ ...this.ingre });
        },
        newIngEnv() {
            console.log(this.NewIngred);
            console.log(this.parametreFonction);
            fetch(process.env.VUE_APP_CON_URL + '/ingredient/add', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.NewIngred),
            })
                .then((data) => data.json())
                .then(data => (this.$store.commit('ajoutIngred', data)));

        },

        valideIngredients() {
            // parcourt le tableau d'objet et envoie les ingredients
            for (let index = 0; index < this.elements.length; index++) {
                fetch(process.env.VUE_APP_CON_URL + '/ingredient_recette/' + this.parametreFonction, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.elements[index])
                })
                    .then((data) => data.json());
            }
        }
    }

}
</script>