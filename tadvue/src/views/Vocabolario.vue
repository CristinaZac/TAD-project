<template>
  <v-container id="cont">
    <v-tabs
        color="deep-purple accent-4"
        right
    role="tablist"
    id="tab">
      <v-tab>Foods</v-tab>
      <v-tab>Colors</v-tab>
      <v-tab>Animals</v-tab>
      <v-tab>Actions</v-tab>
      <v-spacer></v-spacer>
      <v-text-field
          color="deep-purple accent-4"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          v-model="search"
          placeholder="Cerca in italiano"
          aria-label="Ricerca dei vocaboli in italiano"
          class="mx-6"
          role="searchbox"
      >
      </v-text-field>

<!--first tab-->
      <v-tab-item class="mt-5">

        <v-row
          class="justify-center">
          <v-row class="justify-center">
            <v-card height="60px" width="94%"
                    class="mb-5"
                    role="legenda"
            >
              <v-card-text aria-label="Su alcune immagini è presente +s che suggerisce il plurale del vocabolo. <br>
            Ad esempio: la parola prugna, che in inglese si traduce con plum, riporta +s, ciò vuol dire che il plurale sarà plums">Su alcune immagini è presente <strong>+s</strong> che suggerisce il plurale del vocabolo. <br>
            Ad esempio: la parola prugna, che in inglese si traduce con plum, riporta +s, ciò vuol dire che il plurale sarà <strong>plums</strong>.</v-card-text>
            </v-card>
          </v-row>

          <v-row>
    <v-dialog v-for="img in filteredListFood"
              :key="img.dialog"
              v-model="img.dialogstate"
        width="500">
      <template v-slot:activator="{ on, attrs }">
            <v-col class="align-content-center">
              <v-card
                  id="card"
                  class="mx-auto, justify-center"
                  width="250">
                <v-img
                    :src="img.image"
                    aspect-ratio="1.5"
                    contain
                    :alt="img.alt"
                    tabindex="1">
                </v-img>
                <v-card-title>
                  <v-spacer></v-spacer>
                  {{img.english}} <br>
                  {{img.italian}}
                  <v-spacer></v-spacer>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      outlined
                      rounded
                      v-bind="attrs"
                      v-on="on"
                  tabindex="1"
                  aria-label="Ingrandisci immagine"
                  role="button">
                    Ingrandisci
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" role="title">
          {{img.english}}
        </v-card-title>
        <v-img
            :src="img.image"
            aspect-ratio="1.5"
            contain
            :alt="img.alt"
            tabindex="0"
        aria-roledescription="image">
        </v-img>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              @click=" img.dialogstate = false" aria-label="Chiudi">
            Chiudi
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-row>
        </v-row>

      </v-tab-item>
<!--   second tab-->
      <v-tab-item class="mt-5">
        <v-row
            class="justify-center">
          <v-dialog v-for="img in filteredListColor"
                    :key="img.dialog"
                    v-model="img.dialogstate"
                    width="500">

            <template v-slot:activator="{ on, attrs }">
              <v-col class="align-content-center">
                <v-card
                    class="mx-auto, justify-center"
                    width="250">
                  <v-img
                      :src="img.image"
                      aspect-ratio="1.5"
                      contain
                      tabindex="1"
                  :alt="img.alt">
                  </v-img>
                  <v-card-title>
                    <v-spacer></v-spacer>
                    {{img.english}} <br>
                    {{img.italian}}
                    <v-spacer></v-spacer>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        outlined
                        rounded
                        v-bind="attrs"
                        v-on="on"
                        tabindex="1"
                        aria-label="Ingrandisci immagine">
                      Ingrandisci
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
            </template>
            <v-card>
              <v-card-title class="headline grey lighten-2">
                {{img.english}}
              </v-card-title>
              <v-img
                  :src="img.image"
                  aspect-ratio="1.5"
                  contain
                  :alt="img.alt"
                  tabindex="0">
              </v-img>

              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    @click=" img.dialogstate = false"
                    aria-label="Chiudi">
                  Chiudi
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

      </v-tab-item>
      <!--  third tab-->
      <v-tab-item class="mt-5">
        <v-row class="justify-center">
          <v-card height="60px" width="94%"
                  class="mb-5"
                  role="legenda"
          >
            <v-card-text aria-label="Su alcune immagini è presente +s che suggerisce il plurale del vocabolo. <br>
            Ad esempio: la parola prugna, che in inglese si traduce con plum, riporta +s, ciò vuol dire che il plurale sarà plums">Su alcune immagini è presente <strong>+s</strong> che suggerisce il plurale del vocabolo. <br>
              Ad esempio: la parola prugna, che in inglese si traduce con plum, riporta +s, ciò vuol dire che il plurale sarà <strong>plums</strong>.</v-card-text>
          </v-card>
        </v-row>
        <v-row
            class="justify-center">
          <v-dialog v-for="img in filteredListAnimal"
                    :key="img.dialog"
                    v-model="img.dialogstate"
                    width="500">

            <template v-slot:activator="{ on, attrs }">
              <v-col class="align-content-center">
                <v-card
                    class="mx-auto, justify-center"
                    width="250">
                  <v-img
                      :src="img.image"
                      aspect-ratio="1.5"
                      contain
                      tabindex="1">
                  </v-img>
                  <v-card-title>
                    <v-spacer></v-spacer>
                    {{img.english}}  <br>
                    {{img.italian}}
                    <v-spacer></v-spacer>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        outlined
                        rounded
                        v-bind="attrs"
                        v-on="on"
                        tabindex="1"
                        aria-label="Ingrandisci immagine">
                      Ingrandisci
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
            </template>
            <v-card>
              <v-card-title class="headline grey lighten-2">
                {{img.english}} <br>
                {{img.italian}}
              </v-card-title>
              <v-img
                  :src="img.image"
                  aspect-ratio="1.5"
                  contain
                  :alt="img.alt"
                  tabindex="0">
              </v-img>

              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    @click=" img.dialogstate = false"
                    aria-label="Chiudi">
                  Chiudi
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-tab-item>
<!--      fouth tab-->
      <v-tab-item class="mt-5">
        <v-row
            class="justify-center">
          <v-dialog v-for="img in filteredListAction"
                    :key="img.dialog"
                    v-model="img.dialogstate"
                    width="500">

            <template v-slot:activator="{ on, attrs }">
              <v-col class="align-content-center">
                <v-card
                    class="mx-auto, justify-center"
                    width="250">
                  <v-img
                      :src="img.image"
                      aspect-ratio="1.5"
                      contain
                      tabindex="1"
                      :alt="img.alt">
                  </v-img>
                  <v-card-title>
                    <v-spacer></v-spacer>
                    {{img.english}} <br>
                    {{img.italian}}
                    <v-spacer></v-spacer>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        outlined
                        rounded
                        v-bind="attrs"
                        v-on="on"
                        tabindex="1"
                        aria-label="Ingrandisci immagine">
                      Ingrandisci
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-col>
            </template>
            <v-card>
              <v-card-title class="headline grey lighten-2">
                {{img.english}} <br>
                {{img.italian}}
              </v-card-title>
              <v-img
                  :src="img.image"
                  aspect-ratio="1.5"
                  contain
                  :alt="img.alt"
                  tabindex="0">
              </v-img>

              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    @click=" img.dialogstate = false"
                    aria-label="Chiudi">
                  Chiudi
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

      </v-tab-item>
      </v-tabs>
  </v-container>
</template>
<script>
export default {
  name: "Vocabolario",
  data() {
    return {
      search:"",
      foods: [
        {
          dialogstate: false,
          dialog: "dialog1",
          image: require('@/assets/CAA Foods/banana.png'),
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
      colors: [
        {
          dialogstate: false,
          dialog: "dialog21",
          image: require('@/assets/CAA Color/black.png'),
          english: "black",
          italian: "nero",
          alt: "black color, colore nero"
        },
        {
          dialogstate: false,
          dialog: "dialog22",
          image: require('@/assets/CAA Color/blue.png'),
          english: "blue",
          italian: "blu",
          alt: "blue color, colore blu"
        },
        {
          dialogstate: false,
          dialog: "dialog23",
          image: require('@/assets/CAA Color/brown.png'),
          english: "brown",
          italian: "marrone",
          alt: "brown color, colore marrone"
        },
        {
          dialogstate: false,
          dialog: "dialog24",
          image: require('@/assets/CAA Color/golden.png'),
          english: "golden",
          italian: "oro",
          alt: "golden color, colore oro"
        },
        {
          dialogstate: false,
          dialog: "dialog25",
          image: require('@/assets/CAA Color/green.png'),
          english: "green",
          italian: "verde",
          alt: "green color, colore verde"
        },
        {
          dialogstate: false,
          dialog: "dialog26",
          image: require('@/assets/CAA Color/grey.png'),
          english: "grey",
          italian: "grigio",
          alt: "grey color, colore grigio"
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
          italian: "yellow",
          alt: "yellow color, colore giallo"
        },
      ],
      animals: [
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
      actions: [
        { dialogstate: false,
          dialog: "dialog51",
          image: require('@/assets/CAA Action/high five.png'),
          english: "to give high five",
          italian: "battere il cinque",
          alt: "due persone che si danno il cinque, two people giving high five"
        },
        {
          dialogstate: false,
          dialog: "dialog52",
          image: require('@/assets/CAA Action/listen to music.png'),
          english: "to listen to music",
          italian: "ascoltare la musica",
          alt: "una persona che ascolta la musica, a person listening to music"
        },
        {
          dialogstate: false,
          dialog: "dialog53",
          image: require('@/assets/CAA Action/study.png'),
          english: "to study",
          italian: "studiare",
          alt: "una persona che studia, a person studying"
        },
        {
          dialogstate: false,
          dialog: "dialog54",
          image: require('@/assets/CAA Action/to applaud.png'),
          english: "to clap",
          italian: "applaudire",
          alt: "una persona che applaude, a person clapping"
        },
        {
          dialogstate: false,
          dialog: "dialog55",
          image: require('@/assets/CAA Action/to dance.png'),
          english: "to dance",
          italian: "ballare",
          alt: "una persona che balla, a person dancing"
        },
        {
          dialogstate: false,
          dialog: "dialog56",
          image: require('@/assets/CAA Action/to infect.png'),
          english: "to infect",
          italian: "infettare",
          alt: "infettare qualcuno, to infect somebody"
        },
        {
          dialogstate: false,
          dialog: "dialog57",
          image: require('@/assets/CAA Action/to play basketball.png'),
          english: "to play basketball",
          italian: "giocare a basket",
          alt: "due persone giocano a basket, two people playing basketball"
        },
        {
          dialogstate: false,
          dialog: "dialog58",
          image: require('@/assets/CAA Action/to talk.png'),
          english: "to talk",
          italian: "parlare",
          alt: "due persone che parlano, two people talking"
        },
      ],
    }
  },
  computed: {
    filteredListFood() {
      return this.foods.filter(img => {
        return img.italian.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    filteredListColor() {
      return this.colors.filter(img => {
        return img.italian.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    filteredListAnimal() {
      return this.animals.filter(img => {
        return img.italian.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    filteredListAction() {
      return this.actions.filter(img => {
        return img.italian.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>
#tab {
  background-color: #b3b5b8;
}


</style>