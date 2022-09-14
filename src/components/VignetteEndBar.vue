<template>
    <ul class="bg-dark gridblock-8col">
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Mentions légales</a></li>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener"><i class="bi bi-file-richtext"></i></a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener"><i class="bi bi-chat-left-dots"></i></a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener"><i class="bi bi-twitter"></i></a>
        </li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener"><i class="bi bi-newspaper"></i></a></li>
    </ul>
</template>

<script>
export default {
    name: 'VignetteEndBar',
    props: {
        navbar: {
            type: Object
        },
    }
}
</script>