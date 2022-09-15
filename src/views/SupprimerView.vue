<template>

    <body class="back-img-cover">

        <VignetteNavbar />

        <div class=" recette-supr">
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
        <div class="box-choix-supr">
            <div class="champs-choix-supr">
                <div class="text-choix-supr bold">
                    <p>Êtes-vous sûr de vouloir supprimer cette recette ?</p>
                </div>
                <div class="choix">
                    <div class="display">
                        <button type="button" class="btn display btn-outline-primary"><i
                                class="bi bi-caret-left"></i></button>
                    </div>
                    <div class="display">
                        <button type="button" class="bt-confirmation-supr" data-bs-toggle="modal"
                            data-bs-target="#modal1">Oui, je suis sûr</button>

                        <!--Modal-->
                        <div class="modal fade" data-bs-backdrop="static" id="modal1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" aria-labelledby="suppression confirmée">
                                            Confirmation
                                        </h5>
                                    </div>
                                    <div class="modal-body" aria-describedby="content"
                                        aria-labelledby="la recette a bien été supprimée">
                                        <p>La recette a bien été supprimée</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary text-white"
                                            aria-labelledby="Retour à la page d'acceuille">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import VignetteNavbar from "@/components/VignetteNavbar"
export default {
    name: 'suprimerView',
    components: {
        VignetteNavbar
    }
}
</script>

<style>

</style>