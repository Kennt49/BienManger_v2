<template>
    <div>
        <div class="bold" :data-value="recette.id"><br>{{ recette.Name }}</div>
        <div>A servir en {{ saisons[(recette.saison_id) - 1].Name }} comme
            <div class="text-lowercase">{{ plats[(recette.plat_id) - 1].menu}}</div>
        </div>
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
        saisons: { type: Array },
        plats: { type: Array },

    }
}
</script>