<template>
    <main>

        <div class="tab-recette">
            <div class="recette-nom-tab">
                <p class="nom-recette-supr">Omelette au fromage</p>
            </div>
            <div class="img-tab-supr">
                <img class="img-size-suppression" src="../assets/Omelette-au-Fromage.webp"
                    alt="image d'une omelette au fromage">
            </div>
        </div>
        <div class="box-choix-supr">
            <div class="champs-choix-supr">
                <div class="text-choix-supr bold">
                    <p>Êtes-vous sûr de vouloir supprimer cette recette ?</p>
                </div>
                <div class="choix">
                    <div class="display margin-up">
                        <button type="button" class="btn display btn-outline-primary"><i
                                class="bi bi-caret-left"></i></button>
                    </div>
                    <div class="display margin-up">
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
    </main>
</template>

<script>
export default {
    name: 'suprimerView',
    components: {
    }
}
</script>

<style scoped>
.bt-confirmation-supr {
    background-color: transparent;
    border: 1px solid;
    border-radius: 5px;
    border-color: transparent;
    background-color: beige;
}

.box-choix-supr {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 0px 0px;

}

.text-choix-supr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    font-size: medium;
}

.champs-choix-supr {
    width: 84%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
}

@media screen and (min-width: 540px) {

    .div_logo {
        display: flex;
        width: 9vw;
        height: 7vh;
        margin-left: 17px;
        justify-content: center;
    }

    .recette-nom-tab {
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: center;
        border-width: 2px 2px 0px 2px;
        border-style: solid;
        border-color: rgb(73, 73, 73);
        border-radius: 7px 7px 0px 0px;
    }

    .nom-recette-supr {
        display: flex;
        align-self: center;
        margin: 0px;
        font-size: 1.5em;
    }

    .tab-recette {

        display: flex;
        flex-direction: column;
        width: 95%;
        justify-content: center;
    }

    .recette-supr {
        width: 100%;
        height: 380px;
        display: flex;
        justify-content: center;
        margin: 35px 0px 27px 0px;
    }
}

@media screen and (min-width: 1024px) {

    .div_logo {
        width: 6vw;
        height: 10.7vh;
        margin-left: 17px;
    }

    .btn {
        width: 7vw;
        padding: 6px 10px 6px 10px;
        color: transparent;
        border-color: transparent;
    }

    .bi-caret-left {
        color: black;
        font-size: 95%;
        border-radius: 5px;
        background-color: beige;
        width: 26px;
    }

    .tab-recette {
        display: flex;
        flex-direction: column;
        width: 84%;
        justify-content: center;
    }

    .recette-supr {
        width: 100%;
        height: 560px;
        display: flex;
        justify-content: center;
        margin: 45px 0px 35px 0px;
    }
}

.choix {
    display: flex;
    justify-content: center;
}

.recette-supr {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    border: 0px 0px 2px 2px solid;
    border-color: black;
}

.recette-nom-tab {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    border-width: 2px 2px 0px 2px;
    border-style: solid;
    border-color: rgb(73, 73, 73);
    border-radius: 7px 7px 0px 0px;
    background-color: #A0C6A9;
}

.nom-recette-supr {
    display: flex;
    align-self: center;
    margin: 0px;
}

.recette-supr {
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: center;
    margin: 5px 0px 18px 0px;
}

.tab-recette {
    display: flex;
    flex-direction: column;
    width: 95%;
    justify-content: center;
    margin: 10px auto 0px auto;

}

.img-size-suppression {
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 5.5px 5.5px;
}

.img-tab-supr {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(73, 73, 73);
    border-radius: 0px 0px 7px 7px;

}
</style>