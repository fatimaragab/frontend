import { createStore } from 'vuex'

const localStorageKey = "todos-store"

const todosStore = createStore({
    state: {
        todos: [
            { title: "Hit the gym", isChecked: false },
            { title: "Pay bills", isChecked: true }
        ],
    },
    mutations: {
        initialiseStore(state) {
            // Check if the ID exists
            if (localStorage.getItem(localStorageKey)) {
                // Replace the state object with the stored item
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem(localStorageKey)))
                );
            }
        },
        createTodo(state, payload) {

            const newTodo = payload

            state.todos.push(newTodo)
        },
        removeTodo(state, payload) {

            state.todos = state.todos.filter((todo, index) => index !== payload.indexToRemove)
        },
        toggleTodoCheck(state, payload) {

            state.todos[payload.indexToUpdate].isChecked = !state.todos[payload.indexToUpdate].isChecked
        },
        updateTodoTitle(state, payload) {

            state.todos[payload.indexToUpdate].title = payload.title
        },
    },
    computed: {
        todos() {
            return this.$store.state
        }
    },
    getters: {
        sache(state) {
            return state
        }
    }

});

// Subscribe to store updates
todosStore.subscribe((mutation, state) => {
    // Store the state object as a JSON string
    localStorage.setItem(localStorageKey, JSON.stringify(state));
});
export default todosStore

