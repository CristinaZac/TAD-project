<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
          :complete="e1 > 1"
          step="1"
      >
        Carta 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
          :complete="e1 > 2"
          step="2"
          role="button"
      >
        Carta 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Carta 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <quiz></quiz>
        <v-btn
            color="primary"
            @click="e1 = 2"
            role="button"
        >
          Continua
        </v-btn>

        <v-btn text to="/hello/giochi"
               role="button">
          Indietro
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <quiz></quiz>

        <v-btn
            color="primary"
            @click="e1 = 3"
            role="button"
        >
          Continua
        </v-btn>

        <v-btn text to="/hello/giochi">
          Indietro
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <quiz></quiz>
        <v-btn
            color="primary"
            onClick="window.location.reload()"
            role="button"
        >
          Gioca ancora
        </v-btn>

        <v-btn text to="/hello/giochi"
        role="button">
          Indietro
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  components:{
  },
  name: "Learn",
  data() {
    return {
      e1: 1,
    }
  },
}
</script>
