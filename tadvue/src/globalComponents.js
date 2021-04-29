import Vue from 'vue'

Vue.component('quiz',
    () => import('./components/quiz')
);
Vue.component('quizFood',
    () => import('./components/quizFood')
);