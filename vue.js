// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      firstStep: true,
      lastStep: false,
      reset: false,
      activeStep: false, // когда 'true' добавляем шагу class="active"
      steps: [
        {activeStep: true, doneStep: false, title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {activeStep: false, doneStep: false, title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {activeStep: false, doneStep: false, title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {activeStep: false, doneStep: false, title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {activeStep: false, doneStep: false, title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ]
    }
  },
  methods: {

    // когда нажимаем кнопку назад
    prev() {
      this.activeIndex--;

      this.steps[this.activeIndex].activeStep = true;
      this.steps[this.activeIndex + 1].activeStep = false;
      this.steps[this.activeIndex].doneStep = false;
      this.lastStep = false;
    },

    // начать заново
    resetSteps() {
      this.steps[this.steps.length -1].activeStep = false;
      this.activeIndex = 0;
      this.steps[this.activeIndex].activeStep = true;
      this.reset = false;
      this.lastStep = false;

      document.querySelectorAll('li').forEach(el=> el.classList.remove('done'));

    },

    // кнопка вперед или закончить
    nextOfFinish() {
      this.activeIndex++;

      if (this.activeIndex < this.steps.length) {
        this.steps[this.activeIndex].activeStep = true;
        this.steps[this.activeIndex - 1].activeStep = false;
        this.steps[this.activeIndex - 1].doneStep = true;
      }

      if (this.activeIndex >= this.steps.length) {
        this.reset = true;
      }

    },

    // когда нажимаем на определенный шаг
    setActive(idx) {
      this.activeIndex = idx;

      document.querySelectorAll('li').forEach((el, i)=> {
        if (i < this.activeIndex) {
          el.classList.add('done');
          el.classList.remove('active');
        } else if (i > this.activeIndex) {
          el.classList.remove('done');
          el.classList.remove('active');
        } else {
          el.classList.add('active')
          el.classList.remove('done');
        }
      });

      this.steps[idx].activeStep = true;
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    currentStep() {

    },

    // 2. выключена ли кнопка назад
    backIsActive() {

    },

    // 3. находимся ли мы на последнем шаге
    isLastStep() {
      if (this.activeIndex === this.steps.length - 1) {
        this.lastStep = true;
      }
      console.log('Last Step', this.lastStep)
      return this.lastStep;
    }

  }
}

Vue.createApp(App).mount('#app')