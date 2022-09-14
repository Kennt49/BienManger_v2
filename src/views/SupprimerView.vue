<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <div class="display">
                    <div class="div_logo">
                        <img class="logo_nav" src="../../public/Logo_bien-manger.png" alt="Logo du site">
                    </div>
                </div>
                <div class="title">
                    <h1>Bien-Manger</h1>
                </div>
            </a>
            <div class="display">
                <div class="display">
                    <button type="button" class="btn display btn-outline-primary"><i
                            class="bi bi-arrow-left-circle-fill"></i></button>
                </div>
                <div class="display">
                    <button type="button" class="btn display btn-outline-primary"><i class="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    </nav>
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
</template>

<script>
export default {
    name: 'suprimerView',
}
</script>

<style>

</style>