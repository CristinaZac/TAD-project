<template>
  <div>
    <v-row class="justify-center mt-10"
    >
      <h2>Scegli il livello:</h2>
    </v-row>
    <v-btn x-large
           role="button"
           dark
           color="deep-purple"
           class="mr-5 mt-10"
           to="/memorygame"
           aria-label="livello facile">
      Facile
    </v-btn>
    <v-btn x-large
           role="button"
           dark
           color="deep-purple"
           class="mr-5 mt-10"
           to="/actionmedium"
           aria-label="livello medio"
    >
      Medio
    </v-btn>
    <v-btn x-large
           role="button"
           dark
           color="deep-purple"
           class="mr-5 mt-10"
           to="/actiondiff"
           aria-label="livello difficile"
    >
      Difficile
    </v-btn>

  </div>
</template>
<script>
export default {
  name: "PreGameAction"
}
</script>

<style scoped>

</style>