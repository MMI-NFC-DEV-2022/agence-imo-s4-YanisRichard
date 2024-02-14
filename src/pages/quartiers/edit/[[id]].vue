<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/supabase';
import { FormKit } from '@formkit/vue';
console.log("supabase :", supabase);

  
</script>

<template>
    <div>
        <FormKit 
            type="form" 
            v-model="quartier"
            :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
            @submit="upsertQuartier"
        >
            <FormKit name="nom_quartier" label="Nom Quartier"></FormKit>
        </FormKit> 
    </div>
</template>