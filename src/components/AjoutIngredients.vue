<template>
    <div>
        <legend>liste des ingredients</legend>
        <div v-for="(elem, index) of elements" :key="index">
            <select v-model="elem.ingredients_id">
                <option v-for="(ingred, i) of ingredients" :key=i :value=ingred.id> {{ingred.Name}}</option>
            </select>
            <input type="text" v-model="elem.quantity" />

            <br />
        </div>
        <a @click="ajoutIngre">Ajouter un ingredient</a>
    </div>
    <div>
        <h5>Entre un nouvelle ingredient</h5>
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
            ingre: { quantity: 0, ingredients_id: 0, recettes_id: this.transfertId },
            elements: [{ quantity: 0, ingredients_id: 0, recettes_id: this.transfertId }],
        }
    },
    props: {
        transfertId: { type: Number },
        ingredients: {
            type: Object
        },
    },

    methods: {
        ajoutIngre() {
            this.elements.push({ ...this.ingre });
        },
        newIngEnv() {
            console.log(this.NewIngred);
            fetch(process.env.VUE_APP_CON_URL + '/ingredient/add', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.NewIngred),
            })
                .then((data) => data.json())
                .then(data => (this.$store.commit('ajoutIngred', data)));

        },
        
        valideIngredients(){
            // parcourt le tableau d'objet et envoie les ingredients
            for (let index = 0; index < this.elements.length; index++) {
                fetch(process.env.VUE_APP_CON_URL + '/ingredient_recette/add', {
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