<template>
  <html>

  <body>
  <form v-on:submit.prevent="createItem">

    <div class="header">
      <a href="/" class="btn btn-primary" role="button"> Return to Home </a>
      <h2 style="margin:5px">My To Do List</h2>
    </div>

    <div class="todosContainer">
      <div class="formContainer">
        <input v-model="text" type="text" placeholder="New Todo Title" class="input">

        <button class="addBtn" :disabled="text.length < 1" type="submit">Add Todo</button>
      </div>

      <ul>
        <li v-for="(item, index) in todos" :class="{ checked: item.isChecked }"
            @click.native="toggleItemCheck(index)">
          <span :contenteditable="editableIndex === index" :ref="'todo-' + index">{{ item.title }}</span>

          <button @click.native.stop="removeItem(index)" class="close" type="button">x</button>
          <button @click.native.stop="toggleEditMode(index)" class="close" type="button">edit</button>
        </li>
      </ul>
    </div>
  </form>

  </body>

  </html>
</template>

<style>
.text-box {

  color: #444;

  height: 4.4rem;
  padding: 0 1.5rem;

  border-radius: 4px;

  font-size: 16px;

  border: none;

}
</style>

<script>
import { mapState } from 'vuex';

import todosStore from "../store/todos"

export default {
  computed: mapState({
    todos: state => state.todos
  }),
  data() {

    return {
      text: "",
      editableIndex: null,
    }
  },
  methods: {
    createItem() {

      if (this.text.length < 1) return

      // create a new item where the title is the current value of the input field
      const newItem = {
        title: this.text,
        isChecked: false,
      }
      todosStore.commit("createTodo", newItem)

      this.text = ""
    },
    toggleItemCheck(indexToUpdate) {

      todosStore.commit("toggleTodoCheck", { indexToUpdate })
    },
    removeItem(indexToRemove) {

      todosStore.commit("removeTodo", { indexToRemove })
    },
    updateItem(indexToUpdate, title) {

      todosStore.commit("updateTodoTitle", { indexToUpdate, title })
    },
    toggleEditMode(index) {

      this.editableIndex = index

      setTimeout(() => this.$refs["todo-" + index][0].focus())
    },
  }
}
</script>