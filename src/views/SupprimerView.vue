<template>

    <main class="back">

        <div class="recette-supr">
            <div class="tab-recette">
                <div class="recette-nom-tab">
                    <p class="nom-recette-supr">Omelette au fromage</p>
                </div>
                <div class="img-tab-supr">
                    <img class="img-size-suppression" src="../assets/Omelette-au-Fromage.webp"
                        alt="image d'une omelette au fromage">
                </div>
            </div>
        </div>
        <div>
            <p>Êtes-vous sûr de vouloir supprimer cette recette ?</p>
        </div>
        <div class="choix">
            <div class="display">
                <button type="button" class="btn display btn-outline-primary"><i
                        class="bi bi-arrow-left-circle-fill"></i></button>
            </div>
            <div class="display">
                <button type="button" class="">Oui, je suis sûr</button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'suprimerView',
    components: {
    }
}
</script>

<style>

</style>