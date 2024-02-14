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

async function supprimerQuartier() {
    console.log("supprimerQuartier");
//   const { data, error } = await supabase
//     .from("Quartier")
//     .delete()
//     .match({ code_Quartier: quartierObject.value.code_Quartier });
//   if (error) {
//     console.error(
//       "Erreur à la suppression de ",
//       quartierObject.value,
//       "erreur :",
//       error
//     );
//   } else {
//     router.push("/quartier");
//   }
}

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

    <button
        type="button"
        @click="($refs.dialogSupprimer as any).showModal()"
        class="focus-style justify-self-end rounded-md bg-red-500 p-2 shadow-sm"
      >
        Supprimer l'offre
      </button>
      <dialog
        ref="dialogSupprimer"
        @click="($event.currentTarget as any).close()"
      >
        <button
          type="button"
          class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm"
        >
          Annuler</button
        ><button
          type="button"
          @click="supprimerQuartier()"
          class="focus-style rounded-md bg-red-500 p-2 shadow-sm"
        >
          Confirmer suppression
        </button>
      </dialog>

  </section>
</template>