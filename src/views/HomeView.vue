<template>
  <div class="home">
    <div class="column" style="background-color:#E7EAEF;">
      <img src="@/assets/calender-day-love-svgrepo-com.svg" alt="logo" height="80px" width="80px">
      <br> <br> <br> <br> <br> <br><br> <br> <br> <br>
      <calendar :events="events" @select="onSelect" class="glyphicon glyphicon-calendar icon" />
      <br>
      <span class="glyphicon glyphicon-check"></span>
      <br>
      <span class="glyphicon glyphicon-cog active"></span>
      <br> <br><br> <br> <br> <br> <br> <br><br><br> <br> <br> <br> <br> <br> <br> <br>
      <div>
        <p style="font-size: 18px"> {{ time }}</p>
      </div>
    </div>
    <div class="column2" style="background-color: #EDC5AB">
      <div class="header" style="background-color: #EDC5AB">
        <h3 style="color:#E7EAEF;"> &nbsp;&nbsp;30 NOV &nbsp; &nbsp;<u>Today</u> &nbsp; &nbsp; 2 Dec &nbsp; |&nbsp;
          <span>&#183;</span><span>&#183;</span><span>&#183;</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Categories:3/4
          <span class="glyphicon glyphicon-circle-arrow-left"></span> <span
              class="glyphicon glyphicon-circle-arrow-right"></span></h3>
      </div>
      <div class="column3" style="background-color: #EDC5AB">
        <h1 style="color:#217074;" >Work & School &nbsp; &nbsp; </h1>
        <div class="text" style="background-color: #E7EAEF">


          <form v-on:submit.prevent="createItem">
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;


            <div class="todosContainer1">
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
        </div>
      </div>

      <div class="column3" style="background-color: #EDC5AB">
        <h1 style="color:#217074;"> Home &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;</h1>




        <br>
        <div class="text" style="background-color: #E7EAEF">
          <form v-on:submit.prevent="createItem">


            <div class="todosContainer2">
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
        </div>
      </div>

      <div class="column3" style="background-color: #EDC5AB">
        <h1 style="color:#217074;"> Others &nbsp; &nbsp; </h1>
        <br><br>
        <div >
          <div class="text" style="background-color: #E7EAEF">

            <form v-on:submit.prevent="createItem">
              <div class="todosContainer0">
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
          </div>
        </div>




      </div>
      <br>
      <div>

      </div>
    </div>

  </div>
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
import todosStore2 from "../store/todos"


export default {
  computed: mapState({
    todos: state => state.todos
  }),
  name: 'HomeView',
  data() {
    return {
      HomeView: [], time: '', text: "",
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
      todosStore2.commit("createTodo", newItem)

      this.text = ""
    },
    toggleItemCheck(indexToUpdate) {

      todosStore.commit("toggleTodoCheck", {indexToUpdate})
      todosStore2.commit("toggleTodoCheck", {indexToUpdate})
    },
    removeItem(indexToRemove) {

      todosStore.commit("removeTodo", {indexToRemove})
      todosStore2.commit("removeTodo", {indexToRemove})
    },
    updateItem(indexToUpdate, title) {

      todosStore.commit("updateTodoTitle", {indexToUpdate, title})
      todosStore2.commit("updateTodoTitle", {indexToUpdate, title})
    },
    toggleEditMode(index) {
      this.editableIndex = index

      setTimeout(() => this.$refs["todo-" + index][0].focus())
    },


    mounted() {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/ToDoList'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(result => result.forEach(HomeView => {
            this.Homeview.push(tasks)
          }))
          .catch(error => console.log('error', error))

      setInterval(() => {
        this.time = new Date().toLocaleTimeString();
      }, 1000);

    }
  },
}


</script>