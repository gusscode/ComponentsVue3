import {ref} from 'vue'

const page = {
    title: { type: [String, null] },
    question: { type: String },
    options: { type: Array, default: [] },
    correctAnswer: { type: String },
}








const useTestGame = (props, emit)=>{
    const currentCounter = ref()

    const pages = ref(props.pages);
    const countPages = pages.value.length;
    const correctAnswers = ref(0)

    //--------------- Methods
    const nextPage = (answer, index)=>{
        if(answer === pages[index].correctAnswer ) correctAnswers++;
    }
    


    return { currentCounter, countPages, correctAnswers, nextPage }
}










export {useTestGame}