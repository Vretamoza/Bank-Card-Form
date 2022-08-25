<script>
import CardForm from "./components/CardForm.vue";
export default {
  data() {
    return {};
  },
  components: {
    CardForm,
  },
  computed: {
    cardNumber() {
      return this.$store.state.cardNumber;
    },
    cardName() {
      return this.$store.state.cardName;
    },
    cardDate() {
      const month = this.$store.state.cardMonth;
      const year = this.$store.state.cardYear;
      return `${month} / ${year}`;
    },
    cvc() {
      return this.$store.state.cvc;
    },
  },
};
</script>

<template>
  <div class="main-container">
    <div class="left-container">
      <img class="left-img" src="./assets/img/bg-main-desktop.png" />
    </div>
    <div class="right-container flex justify-center items-center relative">
      <div class="front-card absolute top-32 left-[-320px] flex">
        <img src="./assets/img/bg-card-front.png" class="relative" />
        <p class="card-name absolute top-48 text-white mx-12">
          {{ cardName }}
        </p>
        <p class="card-number absolute top-36 text-white mx-12">
          {{ cardNumber }}
        </p>
        <p v-if="cardDate !== ' / '" class="card-date absolute top-48 text-white mx-12 w-80 text-end">
          {{ cardDate }}
        </p>
      </div>
      <div class="back-card absolute bottom-64 left-[-230px]">
        <img src="./assets/img/bg-card-back.png" class="relative" />
        <p class="absolute top-[6.9rem] text-white mx-12 w-[21rem] text-end">
          {{ cvc }}
        </p>
      </div>
      <CardForm />
    </div>
  </div>
</template>

<style lang="scss">
.card-number {
  font-size: 26px;
  letter-spacing: 3px;
  font-family: "Space Grotesk", sans-serif;
}

.card-name {
  letter-spacing: 3px;
  font-family: "Space Grotesk", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
}

.main-container {
  display: grid;
  grid-template-columns: max-content auto;

  .left-container {
    .left-img {
      height: 100vh;
    }
  }
}
</style>
