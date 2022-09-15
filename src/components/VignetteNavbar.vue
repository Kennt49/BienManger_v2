<template>
    <nav class="navbar navbar-dark bg-dark sticky-top container-fluid">
        <img class="logo_nav div_logo" src="/Logo_bien-manger.png" alt="" />
        <a class="navbar-brand">Bien-Manger</a>
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
                    <li class="nav-item"><a class="nav-link" @click="add">Ajouter une recette</a></li>
                    <li class="nav-item"><a class="nav-link" @click="vers">Retour</a></li>
                    <li class="nav-item"><a class="nav-link" @click="modify">Modifier la recette</a></li>
                    <li class="nav-item"><a class="nav-link" @click="erase">Supprimer la recette</a></li>
                </ul>
            </div>
        </div>
    </nav>
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
            this.$router.push("/supprimer");
        },
    }
}
</script>