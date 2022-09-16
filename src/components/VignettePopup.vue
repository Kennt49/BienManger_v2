<template>
    <div class="display margin-up">
        <button type="button" class="bt-confirmation-supr" data-bs-toggle="modal" data-bs-target="#modal1">Oui, je suis
            sûr</button>

        <!--Modal-->
        <div class="modal fade" data-bs-backdrop="static" id="modal1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" aria-labelledby="confirmation de suppression">
                            Confirmation
                        </h5>
                    </div>
                    <div class="modal-body" aria-describedby="content"
                        aria-labelledby="voulez-vous vraiment supprimer cette recette">
                        <p>Voulez-vous vraiment supprimer cette recette ?</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary text-white"
                            aria-labelledby="Annule l'action de suppression de la recette"
                            data-bs-dismiss="modal">Non</button>
                        <button class="btn btn-primary text-white"
                            aria-labelledby="Confirme l'action de suppression de la recette" data-bs-toggle="modal"
                            data-bs-target="#modal2">Oui</button>
                    </div>
                </div>
            </div>
        </div>
        <!--Modal-->
        <div class="modal fade" data-bs-backdrop="static" id="modal2">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" aria-labelledby="suppression confirmée">
                            Confirmation
                        </h5>
                    </div>
                    <div class="modal-body" aria-describedby="content"
                        aria-labelledby="La recette a bien été supprimée !">
                        <p>La recette a bien été supprimée !</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary text-white" aria-labelledby="Retour à l'acceuil"
                            data-bs-dismiss="modal" @click="vers">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VignettePopup',
    props: {
        popup: {
            type: Object
        },
    },
    methods: {
        vers() {
            this.$router.push("/retourData");
        }
    }
}
</script>