<template>
<div>
  <h3> Questa pagina è la intro del vocabolario, scegli i vocaboli che vuoi apprendere:</h3>
  <v-card
      class="my-5, mx-auto"
      width="200px"
      tile>
  <v-list dense>
    <v-list-item-group
        color="primary"
    >
      <v-list-item
          v-for="voc in vocItems"
          :key="voc.title"
          :to="voc.path"
          link
      >
        <v-list-item-content>
        <v-list-item-title v-text="voc.title"></v-list-item-title>
      </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
  </v-card>
</div>
</template>

<script>
export default {
  name: "IntroVocabolario",

  data() {
    return {
      vocItems: [
        {title: 'Foods', path:'/hello/vocabolario'}
      ]
    }
  }
}
</script>

<style scoped>

</style>