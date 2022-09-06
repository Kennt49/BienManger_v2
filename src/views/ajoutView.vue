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
            <select v-model="elements[index]">
                <option></option>
                <option v-for="(ingre, i) of ingredients" :key=i :value=ingre.id> {{ingre.Name}}</option>

            </select>
            <br />
        </div>
        <a @click="ajoutIngre">Ajouter un ingredient</a>
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
            elements: [''],


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
            this.elements.push('');
            console.log(this.elements);
        }
    }
}
</script>

<style>
</style>