<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/supabase';
console.log("supabase :", supabase);

  
</script>
<template>
    <div>
         <FormKit type="form">
            <FormKit name="nomMaison" label="nom"></FormKit>
            <FormKit name="prix" label="prix" type="number"></FormKit>
            <FormKit name="favori" label="mettre en valeur" type="checkbox"></FormKit>
        </FormKit> 
    </div>
</template>