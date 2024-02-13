<script setup lang="ts">
import { supabase } from "../../supabase";
let { data, error } = await supabase
  .from('quartier_commune')
  .select()

  console.log("Quartier commune : ",data);
  
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);

</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="quartierObject in (data as any[])">
        {{ quartierObject.nom_commune }} -
        {{ quartierObject.nom_quartier }}
      </li>
    </ul>
  </section>
</template>