<template>
    <div>
        <div>
            <label for="titre">Titre de la recette</label>
            <input class="titre" type="text" v-model="this.collect.Name" placeholder="couscous" /><br>
            <label for="guest">Nombre de convives</label>
            <input class="guest" type="text" v-model="this.collect.guest" placeholder="2" /><br>
            <div id="v-model-select" class=""> pour L
                <select v-model="this.collect.saison_id">
                    <option>Choisissez la saison</option>
                    <option v-for="(sais, i) of saisons" :key=i :value=sais.id> {{
                    sais.Name
                    }}</option>
                </select>{{ this.collect.saison }}
            </div>
            <div id="v-model-select" class=""> pour
                <select v-model="this.collect.plat_id">
                    <option disabled value="">Choisissez le type de plat</option>
                    <option v-for="(plat ,i ) of plats" :key=i :value=plat.id>
                        {{ plat.menu }}
                    </option>
                </select>
            </div>

            <legend>etapes de la recette</legend>
            <div v-for="(etape, index) of etapes" :key="index">
                <div>{{index+1}}</div><input type="text" v-model="etapes[index]" /><br />
            </div>
            <a @click="create_champ">Ajouter une étape</a>
        </div>
    </div>
    <div>
        <legend>liste des ingredients</legend>
        <div v-for="(elem, index) of elements" :key="index">
            <select v-model="elem.ingredient_id">
                <option></option>
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



    <div>
        <p @click="valid">Valider</p>
    </div><br>




</template>
<script>

export default {
    name: 'ajoutView',
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

    },


    data() {
        return {
            collect: [
                {
                    Name: "",
                    guest: 2,
                    description: "",
                    saison_id: "",
                    plat_id: "",

                }
            ],
            etapes: [''],
            ingre: { ingredient_id: 0, quantity: 0 },
            elements: [{ ingredient_id: 0, quantity: 0 }],
            NewIngred: { Name: '', unit: '' },
        }



    },

    methods: {
        valid() {
            console.log('sdfghjktre');
        },
        create_champ() {
            this.etapes.push('');
        },
        ajoutIngre() {
            this.elements.push({ ...this.ingre });
        },
        newIngEnv() {
            fetch(process.env.VUE_APP_CON_URL +'', {
                method: "POST",
                body: JSON.stringify(this.NewIngred),
            })
                .then((data)=> data.json());


        }

    }
}
</script>

<style>
</style>