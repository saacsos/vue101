<template>
  <div class="container mx-auto">
    <h1 class="text-2xl mb-4">Pokemon List</h1>
    <pokemon-create-form></pokemon-create-form>
    <pokemon-table></pokemon-table>
  </div>
</template>

<script>
import PokemonCreateForm from '@/components/PokemonCreateForm'
import PokemonTable from "@/components/PokemonTable"

export default {
  components: {
    PokemonTable,
    PokemonCreateForm
  },
  created() {},
  methods: {},
}
</script>

<style></style>
