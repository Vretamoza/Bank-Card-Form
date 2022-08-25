<script>
import Cleave from 'cleave.js';

export default {
    data(){
        return {
        }
    },
    mounted() {
        new Cleave('.card-input', {
            creditCard: true,
        });
    },
    computed: {
        cardNumber: {
            get(){
                return this.$store.cardNumber;
            },
            set(value){
                this.$store.commit('CHANGE_CARD_NUMBER', value);
            }
        },
        cardName: {
            get(){
                return this.$store.cardName;
            },
            set(value){
                this.$store.commit('CHANGE_CARD_NAME', value);
            }
        },
        cardMonth: {
            get(){
               return this.$store.cardMonth; 
            },
            set(value){
                this.$store.commit('CHANGE_CARD_MONTH', value);
            }
        },
        cardYear: {
            get(){
               return this.$store.cardYear; 
            },
            set(value){
                this.$store.commit('CHANGE_CARD_YEAR', value);
            }
        },
        cardCode: {
            get(){
               return this.$store.cvc; 
            },
            set(value){
                this.$store.commit('CHANGE_CARD_CVC', value);
            }
        }
    },
    methods: {
    }
}
</script>

<template>
    <form class="flex flex-col gap-6 w-80">
        <div class="input-container">
            <label for="cardholder-name">cardholder name</label>
            <input
                v-model="cardName" 
                type="text" 
                id="cardholder-name" 
                placeholder="e.g Jane Appleseed" 
                class="border">
        </div>
         <div class="input-container">
            <label for="card-number">card number</label>
            <input
                v-model="cardNumber"
                type="text" 
                id="card-number" 
                placeholder="e.g 1234 5678 9123 0000" 
                class=" card-input border">
        </div>
        <div class=" date-container flex gap-6">
            <div class="input-container">
                <label for="exp-date">exp. date (mm/yy)</label>
                <div class="flex gap-2">
                    <input 
                        type="text" 
                        id="exp-date" 
                        placeholder="mm" 
                        class="w-16 border"
                        v-model="cardMonth">
                    <input 
                        type="text" 
                        id="exp-date" 
                        placeholder="yy" 
                        class="w-16 border"
                        v-model="cardYear">
                </div>
            </div>
            <div class="input-container">
                <label for="cvc">cvc</label>
                <input 
                    type="text" 
                    id="cvc" 
                    placeholder="e.g 123" 
                    class="w-40 border"
                    v-model="cardCode">
            </div>
        </div>
        <input type="submit" class="submit-button" value="Confirm">
    </form>
</template>

<style lang="scss">
@import '../assets/scss/custom';

    .input-container {
        display: flex;
        flex-direction: column;
        label {
            text-transform: uppercase;
            font-size: 11px;
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 500;
            letter-spacing: 2px;
            color: $dark-violet;
        }
        input {
            border-radius: 5px;
            padding: 6px 15px;
        }
        ::placeholder {
            font-size: 15px;
        }
    }

    .submit-button {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 500;
        font-size: 18px;
        border-radius: 5px;
        padding: 6px 15px;
        color: $white;
        background-color: $dark-violet;
    }
</style>
