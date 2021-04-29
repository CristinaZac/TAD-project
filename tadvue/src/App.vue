<template>
  <v-app>
    <v-row>
    <v-col cols="2">
      <nav>
      <v-navigation-drawer absolute permanent aria-roledescription="menu" >
        <v-list-item role="navigation">
          <v-list-item-content>
            <v-list-item-title class="title">
              Menù
            </v-list-item-title>
<!--            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>-->
          </v-list-item-content>
        </v-list-item>
        <v-list
            dense
            nav>
          <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.path"
              link
          aria-roledescription="menu item">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title > <strong>{{ item.title }} </strong></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      </nav>
    </v-col>
      <v-col>
    <router-view/>
      </v-col>
    </v-row>
    <v-footer id="footer" class="justify-center"
              outlined
              dark>
      2021 - Cristina Zaccagnino - CdL Informatica Umanistica - Tecnologie Assistive per la Didattica
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      items: [
        {title: 'Home', icon: 'mdi-home', path: '/'},
        {title: 'Vocabolario', icon: 'mdi-view-dashboard', path: '/hello/vocabolario'},
        {title: 'Giochi', icon: 'mdi-google-controller', path: '/hello/giochi'},
        // {title: 'About', icon: 'mdi-help-box', path: '/about'},
      ],
      right: null,
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#footer {
  word-spacing: 5px;
  margin-left: 6.5cm;
}


</style>
