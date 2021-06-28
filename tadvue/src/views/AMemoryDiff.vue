<template>
  <div>
    <h2 class="mb-5" aria-label="Animals memory game">Animals Memory Game</h2>
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
          role="button"
          dark
          class="mb-10 mr-4"
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
  name: "AMemoryDiff",
  data() {
    return {
      finish: false,
      memoryCards: [],
      flippedCards: [],
      cards: [
        {
          dialogstate: false,
          dialog: "dialog35",
          image: require('@/assets/CAA Animals/butterfly.png'),
          english: "butterfly",
          italian: "farfalla",
          alt: "a butterfly, una farfalla"
        },
        {
          dialogstate: false,
          dialog: "dialog36",
          image: require('@/assets/CAA Animals/crocodile.png'),
          english: "crocodile",
          italian: "coccodrillo",
          alt: "a crocodile, un coccodrillo"
        },
        {
          dialogstate: false,
          dialog: "dialog37",
          image: require('@/assets/CAA Animals/ducks.png'),
          english: "duck",
          italian: "anatra",
          alt: "a duck, un'anatra"
        },
        {
          dialogstate: false,
          dialog: "dialog38",
          image: require('@/assets/CAA Animals/fly.png'),
          english: "fly",
          italian: "mosca",
          alt: "a fly, una mosca"
        },
        {
          dialogstate: false,
          dialog: "dialog39",
          image: require('@/assets/CAA Animals/frog.png'),
          english: "frog",
          italian: "rana",
          alt: "a frog, una rana"
        },
        {
          dialogstate: false,
          dialog: "dialog40",
          image: require('@/assets/CAA Animals/giant turtle.png'),
          english: "turtle",
          italian: "tartaruga",
          alt: "a turtle, una tartaruga"
        },
        {
          dialogstate: false,
          dialog: "dialog41",
          image: require('@/assets/CAA Animals/hedgehog.png'),
          english: "hedgehog",
          italian: "riccio",
          alt: "a hedgehog, un riccio"
        },
        {
          dialogstate: false,
          dialog: "dialog42",
          image: require('@/assets/CAA Animals/horses.png'),
          english: "horse",
          italian: "cavallo",
          alt: "a horse, un cavallo"
        },
        {
          dialogstate: false,
          dialog: "dialog43",
          image: require('@/assets/CAA Animals/lion.png'),
          english: "lion",
          italian: "leone",
          alt: "a lion, un leone"
        },
        {
          dialogstate: false,
          dialog: "dialog44",
          image: require('@/assets/CAA Animals/octopuses.png'),
          english: "octopus",
          italian: "polipo",
          alt: "an octopus, un polipo"
        },
        {
          dialogstate: false,
          dialog: "dialog45",
          image: require('@/assets/CAA Animals/owl.png'),
          english: "owl",
          italian: "gufo",
          alt: "an owl, un gufo"
        },
        {
          dialogstate: false,
          dialog: "dialog46",
          image: require('@/assets/CAA Animals/parrot.png'),
          english: "parrot",
          italian: "pappagallo",
          alt: "a parrot, un pappagallo"
        },
        {
          dialogstate: false,
          dialog: "dialog47",
          image: require('@/assets/CAA Animals/pigeon.png'),
          english: "pigeon",
          italian: "piccione",
          alt: "a pidgeon, un piccione"
        },
        {
          dialogstate: false,
          dialog: "dialog48",
          image: require('@/assets/CAA Animals/rooster.png'),
          english: "rooster",
          italian: "gallo",
          alt: "a rooster, un gallo"
        },
        {
          dialogstate: false,
          dialog: "dialog49",
          image: require('@/assets/CAA Animals/sea horses.png'),
          english: "seahorse",
          italian: "cavalluccio marino",
          alt: "a sea horse, un cavalluccio marino"
        },
        {
          dialogstate: false,
          dialog: "dialog50",
          image: require('@/assets/CAA Animals/cat.png'),
          english: "cat",
          italian: "gatto",
          alt: "a cat, un gatto"
        },
      ],
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
    this.cardsSelected = _.shuffle(this.cards).slice(0, 8)
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