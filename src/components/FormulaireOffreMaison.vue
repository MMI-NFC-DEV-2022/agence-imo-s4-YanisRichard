<script setup lang="ts">
import {ref} from "@vue/reactivity";
import AfficheMaison from "./AfficheMaison.vue";
import type { SchemaOffreMaison } from "@/type";

const maison = ref<SchemaOffreMaison>({});
</script>
<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">Résultat</h2>
            <AfficheMaison v-bind="maison"/>
        </div>
    </div>
    <div>
        <FormKit type="form" v-model="maison">
            <FormKit name="nom" label="nom"></FormKit>
            <FormKit name="prix" label="prix" type="number"></FormKit>
            <FormKit name="favori" label="mettre en valeur" type="checkbox"></FormKit>
        </FormKit>
    </div>
</template>