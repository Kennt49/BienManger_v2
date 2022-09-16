<template>
    <nav class="navbar navbar-dark bg-dark sticky-top container-fluid">
        <img class="logo_nav div_logo" src="/Logo_bien-manger.png" alt="" @click="vers" />
        <a class="navbar-brand" @click="vers">Bien-Manger</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <img class="logo_nav div_logo" src="/Logo_bien-manger.png" alt="" />
                <h5 class="offcanvas-title">Bien-Manger</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <form class="d-flex margin-left-right" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit" @click="search">Rechercher</button>
            </form>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item"><a class="nav-link" data-bs-dismiss="offcanvas" @click="add">Ajouter une
                            recette</a></li>
                    <li class="nav-item"><a class="nav-link" data-bs-dismiss="offcanvas" @click="vers">Retour</a></li>
                    <li class="nav-item"><a class="nav-link" data-bs-dismiss="offcanvas" @click="modify">Modifier la
                            recette</a></li>
                    <li class="nav-item" data-bs-toggle="modal" data-bs-target="#modal1"><a class="nav-link"
                            data-bs-dismiss="offcanvas" @click="erase">Supprimer la
                            recette</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="modal fade" data-bs-backdrop="static" id="modal1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" aria-labelledby="suppression confirmée">
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
    <div class="modal fade" data-bs-backdrop="static" id="modal2">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" aria-labelledby="suppression confirmée">
                        Confirmation
                    </h5>
                </div>
                <div class="modal-body" aria-describedby="content" aria-labelledby="La recette a bien été supprimée !">
                    <p>La recette a bien été supprimée !</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary text-white" aria-labelledby="Retour à l'acceuil">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'VignetteNavbar',
    props: {
        navbar: {
            type: Object
        },
    },
    methods: {
        vers() {
            this.$router.push("/retourData");
        },
        modify() {
            this.step = 1;
        },
        add() {
            this.$router.push("/recette");
        },
        erase() {
            this.$router.push("");
        },
    }
}

</script>
