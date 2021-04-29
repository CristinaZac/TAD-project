<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="5">
      <div>
      <v-card
          outlined
          shaped
          class="ml-10 mt-10 mb-3"
      :style="borderObj">
        <v-card-title class="justify-center" role="title"><h3 tabindex="0">Quiz</h3>  </v-card-title>
<!--        <v-card-text role="text" tabindex="0">
          <h4>Istruzioni:</h4> <br>
          Un'immagine e tre possibili risposte. Selezionare quella corretta.
        </v-card-text>-->
        <v-img :src="colors[this.arr[0]].image"
        :alt="colors[this.arr[0]].alt"
        tabindex="0">
        </v-img>
        <!--      <v-btn
                  color="deep-purple"
                  dark
                  @click="randomImage"
              >
                Inizia!
              </v-btn>-->
      </v-card>
      </div>
    </v-col>
    <v-col>
      <v-card class="mt-10" :style="borderObj">
        <v-card-title role="title"><h3 tabindex="0">Answers: </h3></v-card-title>
        <v-row
            justify="center"
            v-for="answer in answers"
            :key="answer.name">
          <v-btn class="my-2 white--text mb-4"
                 rounded
                 :disabled="!isHidden"
                 x-large
                 role="button"
                 color="deep-purple"
                 v-on:click="answerClicked = answer.name; isHidden = false"
          >
            {{answer.name}}
          </v-btn>
        </v-row>
        <div id="app">
          <h1 v-if="isHidden === false" tabindex="0">{{checkAnswer()}}</h1>
        </div>
      </v-card>

      <!--        <div class="mt-5" v-if="rightAnswer = true"> {{rightAnswer}}</div>-->
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  name: "quiz",
  data() {
    return {
      borderObj: {
        border: '2px solid black',
        // backgroundColor: '#b3b5b8',
      },
      isHidden: true,
      arr:[],
      answerClicked: String,
      rightAnswer: Boolean,
      answers: [
        {name: String}, {name:String}, {name: String}
      ],
      colors: [
        {
          dialogstate: false,
          dialog: "dialog21",
          image: require('@/assets/CAA Color/black.png'),
          english: "black",
          italian: "nero",
          alt: "black color, colore nero",
        },
        {
          dialogstate: false,
          dialog: "dialog22",
          image: require('@/assets/CAA Color/blue.png'),
          english: "blue",
          italian: "blu",
          alt: "blue color, colore blu",
        },
        {
          dialogstate: false,
          dialog: "dialog23",
          image: require('@/assets/CAA Color/brown.png'),
          english: "brown",
          italian: "marrone",
          alt: "brown color, colore marrone",
        },
        {
          dialogstate: false,
          dialog: "dialog24",
          image: require('@/assets/CAA Color/golden.png'),
          english: "golden",
          italian: "oro",
          alt: "golden color, colore oro",
        },
        {
          dialogstate: false,
          dialog: "dialog25",
          image: require('@/assets/CAA Color/green.png'),
          english: "green",
          italian: "verde",
          alt: "green color, colore verde",

        },
        {
          dialogstate: false,
          dialog: "dialog26",
          image: require('@/assets/CAA Color/grey.png'),
          english: "grey",
          italian: "grigio",
          alt: "grey color, colore grigio",
        },
        {
          dialogstate: false,
          dialog: "dialog27",
          image: require('@/assets/CAA Color/lightblue.png'),
          english: "light blue",
          italian: "azzurro",
          alt: "light blue color, colore azzurro"
        },
        {
          dialogstate: false,
          dialog: "dialog28",
          image: require('@/assets/CAA Color/orange.png'),
          english: "orange",
          italian: "arancione",
          alt: "orange color, colore arancione"
        },
        {
          dialogstate: false,
          dialog: "dialog29",
          image: require('@/assets/CAA Color/pink.png'),
          english: "pink",
          italian: "rosa",
          alt: "pink color, colore rosa"
        },
        {
          dialogstate: false,
          dialog: "dialog30",
          image: require('@/assets/CAA Color/purple.png'),
          english: "purple",
          italian: "viola",
          alt: "purple color, colore viola"
        },
        {
          dialogstate: false,
          dialog: "dialog31",
          image: require('@/assets/CAA Color/red.png'),
          english: "red",
          italian: "rosso",
          alt: "red color, colore rosso"
        },
        {
          dialogstate: false,
          dialog: "dialog32",
          image: require('@/assets/CAA Color/silver.png'),
          english: "silver",
          italian: "argento",
          alt: "silver color, colore argento"
        },
        {
          dialogstate: false,
          dialog: "dialog33",
          image: require('@/assets/CAA Color/white.png'),
          english: "white",
          italian: "bianco",
          alt: "white color, colore bianco"
        },
        {
          dialogstate: false,
          dialog: "dialog34",
          image: require('@/assets/CAA Color/yellow.png'),
          english: "yellow",
          italian: "giallo",
          alt: "yellow color, colore giallo"
        },
      ],
    }
  },
  mounted() {

    this.arr = [];
    while(this.arr.length < 3){
      var r = Math.floor(Math.random() * (14));
      if(this.arr.indexOf(r) === -1)this.arr.push(r);
    }
    this.answers[0].name = this.colors[this.arr[0]].english;
    this.answers[1].name = this.colors[this.arr[1]].english;
    this.answers[2].name = this.colors[this.arr[2]].english;

    this.answers = this.answers.sort(() => Math.random() - 0.5)



  },
  methods: {
    checkAnswer() {
      if(this.answerClicked === this.colors[this.arr[0]].english) {
        this.rightAnswer = true;
        return "Risposta esatta!";
      } else if (this.answerClicked !== this.colors[this.arr[0]].english) {
        this.rightAnswer = false
        return "Risposta errata";
      }
    }
  },
}
</script>

<style scoped>

</style>