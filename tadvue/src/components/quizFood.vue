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
          <v-card-title class="justify-center" role="title"><h3 tabindex="0">Food Quiz</h3>  </v-card-title>
          <v-img :src="foods[this.arr[0]].image"
                 :alt="foods[this.arr[0]].alt"
                 tabindex="0">
          </v-img>
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
  name: "quizFood",
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
      foods: [
        {
          dialogstate: false,
          dialog: "dialog1",
          image: require('@/assets/CAA Foods/bananas.png'),
          english: "banana",
          italian: "banana",
          alt: "banane"
        },
        {
          dialogstate: false,
          dialog: "dialog2",
          image: require('@/assets/CAA Foods/broccolis.png'),
          english: "broccoli",
          italian: "broccoli",
          alt: "broccoli"
        },
        {
          dialogstate: false,
          dialog: "dialog3",
          image: require('@/assets/CAA Foods/cheese.png'),
          english: "cheese",
          italian: "formaggio",
          alt: "un pezzo di formaggio, a piece of cheese"
        },
        {
          dialogstate: false,
          dialog: "dialog4",
          image: require('@/assets/CAA Foods/cherries.png'),
          english: "cherry",
          italian: "ciliegia",
          alt: "una ciliegia, a cherry"
        },
        {
          dialogstate: false,
          dialog: "dialog5",
          image: require('@/assets/CAA Foods/chicken.png'),
          english: "chicken",
          italian: "pollo",
          alt: "pollo arrosto, a roasted chicken"
        },
        {
          dialogstate: false,
          dialog: "dialog6",
          image: require('@/assets/CAA Foods/chocolate.png'),
          english: "chocolate",
          italian: "cioccolata",
          alt: "una tavoletta di cioccolata, a chocolate bar"
        },
        {
          dialogstate: false,
          dialog: "dialog7",
          image: require('@/assets/CAA Foods/chocolate cake.png'),
          english: "chocolate cake",
          italian: "torta al cioccolato",
          alt: "una torta al cioccolato, a chocolate cake"
        },
        {
          dialogstate: false,
          dialog: "dialog8",
          image: require('@/assets/CAA Foods/juice.png'),
          english: "orange juice",
          italian: "succo d'arancia",
          alt: "succo d'arancia, an orange juice"
        },
        {
          dialogstate: false,
          dialog: "dialog9",
          image: require('@/assets/CAA Foods/meat.png'),
          english: "meat",
          italian: "carne",
          alt: "una fettina di carne, a piece of meat"
        },
        {
          dialogstate: false,
          dialog: "dialog10",
          image: require('@/assets/CAA Foods/muffins.png'),
          english: "muffin",
          italian: "muffin",
          alt: "un muffin, a muffin"
        },
        {
          dialogstate: false,
          dialog: "dialog11",
          image: require('@/assets/CAA Foods/pawpaw.png'),
          english: "papaya",
          italian: "papaya",
          alt: "una papaya, a papaya"
        },
        {
          dialogstate: false,
          dialog: "dialog12",
          image: require('@/assets/CAA Foods/plums.png'),
          english: "plum",
          italian: "prugna",
          alt: "una prugna, a plum"
        },
        {
          dialogstate: false,
          dialog: "dialog13",
          image: require('@/assets/CAA Foods/spaghetti.png'),
          english: "spaghetti",
          italian: "spaghetti",
          alt: "un piatto di spaghetti, a plate of spaghetti"
        },
        {
          dialogstate: false,
          dialog: "dialog14",
          image: require('@/assets/CAA Foods/vegetables.png'),
          english: "vegetables",
          italian: "verdure",
          alt: "delle verdure, some vegetables"
        },
        {
          dialogstate: false,
          dialog: "dialog15",
          image: require('@/assets/CAA Foods/cauliflowers.png'),
          english: "cauliflower",
          italian: "cavolfiore",
          alt: "un cavolfiore, a cauliflower"
        },
        {
          dialogstate: false,
          dialog: "dialog16",
          image: require('@/assets/CAA Foods/coconuts.png'),
          english: "coconuts",
          italian: "cocco",
          alt: "una noce di cocco, a coconut"
        },
        {
          dialogstate: false,
          dialog: "dialog17",
          image: require('@/assets/CAA Foods/onions.png'),
          english: "onion",
          italian: "cipolla",
          alt: "una cipolla, an onion"
        },
        {
          dialogstate: false,
          dialog: "dialog18",
          image: require('@/assets/CAA Foods/glass of milk.png'),
          english: "a glass of milk",
          italian: "un bicchiere di latte",
          alt: "un bicchiere di latte, a glass of milk"
        },
        {
          dialogstate: false,
          dialog: "dialog19",
          image: require('@/assets/CAA Foods/glass of water.png'),
          english: "a glass of water",
          italian: "un bicchiere di acqua",
          alt: "un bicchiere di acqua, a glass of water"
        },
        {
          dialogstate: false,
          dialog: "dialog20",
          image: require('@/assets/CAA Foods/orange.png'),
          english: "orange",
          italian: "arancia",
          alt: "un'arancia, an orange"
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
    this.answers[0].name = this.foods[this.arr[0]].english;
    this.answers[1].name = this.foods[this.arr[1]].english;
    this.answers[2].name = this.foods[this.arr[2]].english;

    this.answers = this.answers.sort(() => Math.random() - 0.5)



  },
  methods: {
    checkAnswer() {
      if(this.answerClicked === this.foods[this.arr[0]].english) {
        this.rightAnswer = true;
        return "Risposta esatta!";
      } else if (this.answerClicked !== this.foods[this.arr[0]].english) {
        this.rightAnswer = false
        return "Risposta errata";
      }
    }
  },
}
</script>

<style scoped>

</style>