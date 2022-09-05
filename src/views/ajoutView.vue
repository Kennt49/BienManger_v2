<template>
    <div>
        <div>
            <input class="titre" type="text" v-model="this.collect.Name" placeholder="couscous" /><br>
            <input class="guest" type="text" v-model="this.collect.guest" placeholder="2" /><br>
            <div id="v-model-select" class=""> pour L
                <select v-model="this.collect.saison">
                    <option disabled value="Ete">Choisissez la saison</option>
                    <option v-for="i in saisons.length" :key=i :data-value=saisons.id v-on:click="select">
                        {{ saisons[i - 1].Name }}
                    </option>
                </select>{{ this.collect.saison }}
            </div>
            <div id="v-model-select" class=""> pour L
                <select v-model="this.collect.plat">
                    <option disabled value="">Choisissez le type de plat</option>
                    <option v-for="i in saisons.length" :key=i :data-value=saisons.id v-on:click="select">
                        {{ saisons[i - 1].Name }}
                    </option>
                </select>{{ this.collect.saison }}
            </div>


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
    },


    data() {
        return {
            collect: [
                {
                    Name: "",
                    guest: 2,
                    saison: "",

                }
            ]

        }
    },
    methods: {
        valid() {
            console.log('sdfghjktre');
        }

    }
}
</script>

<style>
</style>