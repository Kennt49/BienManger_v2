<template>
    <div>
        <div><br>{{ recette.Name }}</div>
        <div>pour la saison d{{ saisons[(recette.saison_id) - 1].Name }}</div>
        <div>nombre de convives {{ recette.guest }}</div>
        <div>{{ recette.description }} </div>
    </div>
</template>
<script>
export default {
    name: 'VignetteRecette',
    props: {
        recette: {
            type: Object
        },
        saisons: { type: Array }

    }
}
</script>