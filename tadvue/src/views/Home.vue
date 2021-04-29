<template>
  <div id="opening">
  <header class="mb-6"> <v-img :src="require('@/assets/london-crop.png')" aspect-ratio="6" alt="immagine del big ben, london bridge"></v-img>  </header>

    <v-row>
      <v-spacer></v-spacer>
<!--      <v-col cols="2"></v-col>-->
   <v-col>
    <v-card height="420" width="700" class="ml-15 mb-5" outlined elevation="10" rounded :style="borderObj">
      <v-card-title  class="justify-center" tabindex="0" role="title" aria-label="Imparare l'inglese con la CAA" > <h4> Imparare l'inglese con la CAA </h4></v-card-title>
      <v-card-text class="mt-3" id="cardText" tabindex="0" aria-label="Questo sito nasce con l'intento di fungere da strumento ausiliario per l'apprendimento della lingua inglese
      per i bambini con DSA e disturbo dello spettro autistico, sfruttando anche  la Comunicazione Aumentativa Alternativa.
      Il sito è sviluppato in due sezioni: nella sezione vocabolario è possibile visualizzare i vocaboli divisi per categorie con la traduzione inglese sotto, ciò che viene appreso
      può essere poi testato nella sezione giochi."> Questo sito nasce con l'intento di fungere da strumento ausiliario per l'apprendimento della lingua inglese
      per i bambini con DSA e disturbo dello spettro autistico, sfruttando anche  la Comunicazione Aumentativa Alternativa. <br>
        <br>
        Il sito si compone di due sezioni:<br>

        <ul>
        <li>Vocabolario: è possibile visualizzare i vocaboli divisi per categorie (animali, colori, azioni..) con la traduzione inglese. Ciò che viene appreso
        può essere poi testato nella sezione successiva.</li>
        <li>Giochi: comprende il gioco di memory, il cui scopo è quello di appaiare le immagini, e il quiz, che verifica le conoscenze apprese. </li>
        </ul>
        Cosa aspetti? Inizia subito!
      </v-card-text>
      <v-btn
          color="deep-purple"
          dark
          to="/hello/giochi"
          role="button"
          class="mt-8 mr-5 "
      >
        Vai ai giochi
      </v-btn>
<!--      <v-spacer></v-spacer>-->
      <v-btn
          color="deep-purple"
          dark
          to="/hello/vocabolario"
          role="button"
          class="mt-8"
      >
        Vai al vocabolario
      </v-btn>
    </v-card>
   </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
data () {
    return{
      borderObj: {
        border: '2px solid black',
       // backgroundColor: '#b3b5b8',
      }
    }
}
}
</script>
<style scoped>
#opening {
  background-color: #b3b5b8;
}
#cardText {
  font-size: 15px;
  text-align: justify;
  color: black;
}
</style>