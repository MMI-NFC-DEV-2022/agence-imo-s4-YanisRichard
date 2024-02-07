<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { SchemaOffreMaison } from '@/type';
import { ref } from 'vue';

const maMaison =ref<SchemaOffreMaison>({
    nomMaison: "Maison",
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2 ,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399-1.jpg',
});


</script>

<template>
    <h1>On passe les valeurs en objet avec v-bind</h1>
    <AfficheMaison v-bind="maisons[0]" />
</template>