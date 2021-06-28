<template>
  <div>
    <h2 class="mb-5" aria-label="action memory game">Actions Memory Game</h2>
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-5 mx-auto">
        <div class="row justify-content-md-center">
          <div v-for="card in memoryCards" :key="card.italian" class="col-auto mb-3 flip-container" :class="{ 'flipped': card.isFlipped, 'matched' : card.isMatched}" @click="flipCard(card)" @keydown.enter="flipCard(card)">
            <div class="memorycard">
              <div class="front border rounded shadow"><img width="130" height="150" :src="require('@/assets/pattern3.jpg')"  ></div>
              <!--            <div class="back rounded border"><img width="100" height="150" :src="'/assets/CAA Color/'+card.image"></div>-->
              <div class="back rounded border"><img width="130" height="150" :src="card.image" :alt="card.alt" tabindex="0" >
                <div>{{card.english}}</div>

              </div>
              <div class="back rounded border"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <v-row justify="center">
      <v-btn
          class="mb-10"
          role="button"
          dark
          color="deep-purple"
          onClick="window.location.reload()"
          aria-label="gioca ancora"
      > Restart </v-btn>
    </v-row>
  </div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';

export default {
  name: "ActionMedium",
  data() {
    return {
      finish: false,
      memoryCards: [],
      flippedCards: [],
      cards: [
        {
          image: require('@/assets/CAA Action/high five.png'),
          english: "to give high five",
          italian: "battere il cinque",
          alt: "due persone che si danno il cinque, two people giving high five"
        },
        {
          image: require('@/assets/CAA Action/listen to music.png'),
          english: "to listen to music",
          italian: "ascoltare la musica",
          alt: "una persona che ascolta la musica, a person listening to music"
        },
        {
          image: require('@/assets/CAA Action/study.png'),
          english: "to study",
          italian: "studiare",
          alt: "una persona che studia, a person studying"
        },
        {
          image: require('@/assets/CAA Action/to applaud.png'),
          english: "to clap",
          italian: "applaudire",
          alt: "una persona che applaude, a person clapping"
        },
        {
          image: require('@/assets/CAA Action/to dance.png'),
          english: "to dance",
          italian: "ballare",
          alt: "una persona che balla, a person dancing"
        },
        {
          image: require('@/assets/CAA Action/to infect.png'),
          english: "to infect",
          italian: "infettare",
          alt: "infettare qualcuno, to infect somebody"
        },
        {
          image: require('@/assets/CAA Action/to play basketball.png'),
          english: "to play basketball",
          italian: "giocare a basket",
          alt: "due persone giocano a basket, two people playing basketball"
        },
        {
          image: require('@/assets/CAA Action/to talk.png'),
          english: "to talk",
          italian: "parlare",
          alt: "due persone che parlano, two people talking"
        },

      ]
    }
  },
  created() {
    this.cards.forEach((card) => {
      Vue.set(card,'isFlipped',false);
      Vue.set(card,'isMatched',false);
    });
    /*
      let cards1 =  _.cloneDeep(this.cards);
      let cards2 =  _.cloneDeep(this.cards);*/
    this.cardsSelected = _.shuffle(this.cards).slice(0, 6)
    this.memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.cardsSelected), _.cloneDeep(this.cardsSelected)));

  },
  methods: {
    flipCard(card) {
      if(card.isMatched || card.isFlipped || this.flippedCards.length === 2)
        return;
      card.isFlipped = true;

      if(this.flippedCards.length < 2)
        this.flippedCards.push(card);
      if(this.flippedCards.length === 2)
        this._match(card);
    },

    _match () {
      if(this.flippedCards[0].english === this.flippedCards[1].english) {
        setTimeout(() => {
          this.flippedCards.forEach(card => card.isMatched = true);
          this.flippedCards = [];
          // all card matched
          if(this.memoryCards.every(card => card.isMatched === true)) {
            this.finish = true;
          }
        }, 400);
      }
      else {
        setTimeout(() => {
          this.flippedCards.forEach((card) => {card.isFlipped = false});
          this.flippedCards = [];
        }, 800);
      }
    }, //chiudo match
  },
}
</script>

<style scoped>
.matched{
  opacity: 0.3;
}
.flip-container {
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  -o-perspective: 1000;
  perspective: 1000px;
  min-height: 120px;
  cursor: pointer;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>