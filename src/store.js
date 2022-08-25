import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            cardNumber: '',
            cardName: '',
            cardMonth: '',
            cardYear: '',
            cvc: '', //This shouldn't be done, CHANGE
        }
    },
    mutations: {
        CHANGE_CARD_NUMBER(state, number){
            state.cardNumber = number;
        },
        CHANGE_CARD_NAME(state, name){
            state.cardName = name;
        },
        CHANGE_CARD_MONTH(state, month){
            state.cardMonth = month;
        },
        CHANGE_CARD_YEAR(state, year){
            state.cardYear = year;
        },
        CHANGE_CARD_CVC(state, cvc){
            state.cvc = cvc;
        }
    },
})

export default store;