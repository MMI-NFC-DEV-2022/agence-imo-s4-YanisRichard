<script setup lang="ts">
import { RouterLink } from "vue-router";
import { supabase } from "@/supabase";
import type { Database } from "@/supabase-types";
// let { data, error } = await supabase
//   .from('quartier_commune')
//   .select()

//   console.log("Quartier commune : ",data);

const {data, error} = await supabase.from("Commune").select(`
  *,
  Quartier(*)
`);
console.log("les quarties par commune : ",data);

  
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);

</script>

<template>
  <!--<section class="flex flex-col">
 <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="quartierObject in data ">
        {{ quartierObject.nom_commune }} -
        {{ quartierObject.nom_quartier }}
      </li>
    </ul>
  </section> -->

  <h3>Liste des Quartiers Simplifié </h3>

  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="Commune in data" :key="Commune.id">
        {{ Commune.nom_commune }} 
        <ul>
            <li v-for="Quartier in (Commune.Quartier)" :key="Quartier.id">
                <RouterLink :to="{name:'/quartiers/edit/[[id]]', params:{id:Quartier.id}}"> {{ Quartier.nom_quartier }} </RouterLink> </li>
        </ul>
       
      </li>
    </ul>
  </section>
</template>