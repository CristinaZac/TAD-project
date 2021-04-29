<template>
  <v-container>

    <!--    <div>-->
    <h2 class="mb-5">Giochi</h2>
    <v-row>
      <v-spacer></v-spacer>
      <v-col>
        <div>
          <v-card
              outlined
              shaped
              class="mx-auto, justify-center"
              width="250"
              height="230"
              :style="borderObj">
            <v-card-title aria-label="Quiz sui colori" tabindex="0">
              Color Quiz <v-icon color="black" class="ml-3">mdi-palette</v-icon>
            </v-card-title>
            <v-card-text tabindex="0" aria-label="Istruzioni: Selezionare la risposta che corrisponde all'immagine">
              <h4>Istruzioni:</h4>
              Selezionare la risposta che corrisponde all'immagine.
            </v-card-text>
            <v-spacer></v-spacer>
            <v-btn
                color="deep-purple"
                dark
                to="/learn"
                role="button"
            >
              Gioca
            </v-btn>
            <v-spacer></v-spacer>
          </v-card>
        </div>
        <div>
          <v-card
              outlined
              shaped
              class="mx-auto, justify-center mt-10"
              width="250"
              height="230"
              :style="borderObj">
            <v-card-title aria-label="Memory con le azioni" tabindex="0">
              Action Memory <v-icon color="black" class="ml-3">mdi-human-greeting-proximity</v-icon>
            </v-card-title>
            <v-card-text class="mb-2" tabindex="0" aria-label="Istruzioni: accoppiare le immagini uguali.
        Se si gioca tramite screen reader, per selezionare l'immagine premere invio e poi procedere con la seconda.">
              <h4>Istruzioni:</h4>
              Accoppiare le immagini uguali.
            </v-card-text>
            <v-spacer></v-spacer>
            <v-btn
                color="deep-purple"
                dark
                to="/memorygame"
                role="button"
            >
              Gioca
            </v-btn>
            <v-spacer></v-spacer>
          </v-card>
        </div>
      </v-col>
      <v-col>
        <div>
          <v-card
              outlined
              shaped
              width="250"
              height="230"
              :style="borderObj">
            <v-card-title aria-label="Quiz sul cibo" tabindex="0">
               Food Quiz <v-icon color="black" class="ml-3">mdi-food</v-icon>
            </v-card-title>
            <v-card-text class="mb-2" tabindex="0"
                         aria-label="Istruzioni: Selezionare la risposta che corrisponde all'immagine">
              <h4>Istruzioni:</h4>
              Selezionare la risposta che corrisponde all'immagine.
            </v-card-text>
            <v-spacer></v-spacer>
            <v-btn
                color="deep-purple"
                dark
                to="/foodquiz"
                role="button"
            >
              Gioca
            </v-btn>
            <v-spacer></v-spacer>
          </v-card>
        </div>
        <div>
          <v-card
              outlined
              shaped
              class="mx-auto, justify-center mt-10"
              width="250"
              height="230"
              :style="borderObj">
            <v-card-title aria-label="memory con gli animali" tabindex="0">
              Animal Memory <v-icon color="black" class="ml-3">mdi-dog</v-icon>
            </v-card-title>
            <v-card-text class="mb-2" tabindex="0" aria-label="Istruzioni: accoppiare le immagini uguali.
        Se si gioca tramite screen reader, per selezionare l'immagine premere invio e poi procedere con la seconda.">
              <h4>Istruzioni:</h4>
              Accoppiare le immagini uguali.
            </v-card-text>
            <v-spacer></v-spacer>
            <v-btn
                color="deep-purple"
                dark
                to="/animalmemory"
                role="button"
                class="mt-3"
            >
              Gioca
            </v-btn>
            <v-spacer></v-spacer>
          </v-card>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "Giochi",
  data() {
    return {
      borderObj: {
        border: '2px solid black',
        // backgroundColor: '#b3b5b8',
      },
    }
  }
}
</script>

<style scoped>

</style>