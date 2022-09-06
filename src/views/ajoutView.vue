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
            <div id="leschamps_1">1</div><input type="text" name="name_1" /><br />
            <span id="leschamps_2"><a @click="create_champ">Ajouter un champs</a></span>
           

        </div>
        <div>
            <input type="submit" value="Creer">

            <p @click="valid">Valider</p>
        </div><br>

    </div>


</template>
<script>

export default {
    name: 'ajoutView',
    computed: {
        saisons() {
            return this.$store.state.retourData?.saisons;

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
                    description:"",
                    saison_id: "",
                    plat_id: "",

                }
            ]
            

        }
    },
    methods: {
        valid() {
            console.log('sdfghjktre');
        },
        create_champ() {
            let i = 2;
            let i2 = 3;
            document.getElementById('leschamps_' + i).innerHTML = '\'<span id="num_\'+i\'">' + i + '</span>\'<br /><input type="text" name="name_' + i + '"></span>';
            document.getElementById('leschamps_' + i).innerHTML += (i <= 40) ? '<br /><span id="leschamps_' + i2 + '"><a @click="create_champ(' + i2 + ')">Ajouter un champs</a></span>' : '';

            i = i + 1;
            i2 = i2 + 1;
        }
    }
}
</script>

<style>
</style>