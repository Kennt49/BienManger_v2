<template>
    <div>
        <div>
            <input class="titre" type="text" v-model="this.collect.Name" placeholder="couscous" /><br>
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
                    <option v-for="(plat ,i ) of plats" :key=i :value=plat.id >
                        {{ plat.menu }}
                    </option>
                </select>
            </div>{{this.collect.plat}}


        </div>
        <div>
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
                    saison: "",
                    saison_id: "",
                    plat: "",
                    plat_id: "",

                }
            ]

        }
    },
    methods: {
        valid() {
            console.log('sdfghjktre');
        },
        selectSais(event) {
            this.saison_id = event.target.getAttribute('data-value');
            console.log(this.collect.saison);
        }
    }
}
</script>

<style>
</style>