<template>
  <div class="home">
    <div class="column" style="background-color:#E7EAEF;">
      <img src="@/assets/calender-day-love-svgrepo-com.svg" alt="logo" height="80" width="80">
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


          <form v-on:submit.prevent="createItem(1)">
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;


            <div class="todosContainer1">
              <div class="formContainer">
                <input v-model="text" type="text" placeholder="New Todo Title" class="input">
                <button class="addBtn" :disabled="text.length < 1" type="submit">Add Todo</button>
              </div>

              <ul>
                <li v-for="(item, index) in todos['work']" :class="{ checked: item.isChecked }"
                    @click.native="toggleItemCheck(index, 1)">
                  <span :contenteditable="editableIndex[0] === index" :ref="'1todo-' + index">{{ item.title }}</span>

                  <button @click.native.stop="removeItem(index, 1)" class="close" type="button">x</button>
                  <button @click.native.stop="toggleEditMode(index, 1)" class="close" type="button">{{
                      (editableIndex[0] === index) ? "Save" : "Edit"
                    }}</button>
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
          <form v-on:submit.prevent="createItem(2)">


            <div class="todosContainer2">
              <div class="formContainer">
                <input v-model="text2" type="text" placeholder="New Todo Title" class="input">

                <button class="addBtn" :disabled="text2.length < 1" type="submit">Add Todo</button>
              </div>

              <ul>
                <li v-for="(item, index) in todos['home']" :class="{ checked: item.isChecked }"
                    @click.native="toggleItemCheck(index, 2)">
                  <span :contenteditable="editableIndex[1] === index" :ref="'2todo-' + index">{{ item.title }}</span>

                  <button @click.native.stop="removeItem(index, 2)" class="close" type="button">x</button>
                  <button @click.native.stop="toggleEditMode(index, 2)" class="close" type="button">{{
                      (editableIndex[1] === index) ? "Save" : "Edit"
                    }}</button>
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

            <form v-on:submit.prevent="createItem(3)">
              <div class="todosContainer0">
                <div class="formContainer">
                  <input v-model="text3" type="text" placeholder="New Todo Title" class="input">
                  <button class="addBtn" :disabled="text3.length < 1" type="submit">Add Todo</button>
                </div>
                <ul>
                  <li v-for="(item, index) in todos['others']" :class="{ checked: item.isChecked }"
                      @click.native="toggleItemCheck(index, 3)">
                    <span :contenteditable="editableIndex[2] === index" :ref="'3todo-' + index">{{ item.title }}</span>
                    <button @click.native.stop="removeItem(index, 3)" class="close" type="button">x</button>
                    <button @click.native.stop="toggleEditMode(index, 3)" class="close" type="button">{{
                        (editableIndex[2] === index) ? "Save" : "Edit"
                      }}</button>
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


export default {
  computed: mapState({
    todos: state => state.todos,
  }),
  name: 'HomeView',
  data() {
    return {
      HomeView: [], time: '', text: "", text2: "", text3: "",
      editableIndex: [null, null, null],
    }

  },
  methods: {
    createItem(type) {
      if(type == 1){
        if (this.text.length < 1) return
        const newItem = {
          title: this.text,
          isChecked: false,
          type: 'work'
        }
        todosStore.commit("createTodo", newItem)
        this.text = ""
      }
      else if(type == 2){
        if (this.text2.length < 1) return
        const newItem = {
          title: this.text2,
          isChecked: false,
          type: 'home'
        }
        todosStore.commit("createTodo", newItem)
        this.text2 = ""
      }
      else if(type == 3){
        if (this.text3.length < 1) return
        const newItem = {
          title: this.text3,
          isChecked: false,
          type: 'others'
        }
        todosStore.commit("createTodo", newItem)
        this.text3 = ""
      }
    },
    toggleItemCheck(indexToUpdate, type) {
      if(type == 1){
        todosStore.commit("toggleTodoCheck", {indexToUpdate: indexToUpdate, type: 'work'})
      }
      else if(type == 2){
        todosStore.commit("toggleTodoCheck", {indexToUpdate: indexToUpdate, type: 'home'})
      }
      else if(type == 3){
        todosStore.commit("toggleTodoCheck", {indexToUpdate: indexToUpdate, type: 'others'})
      }
    },
    removeItem(indexToRemove, type) {
      if(type == 1){
        todosStore.commit("removeTodo", {indexToRemove: indexToRemove, type: 'work'})
      }
      else if(type == 2){
        todosStore.commit("removeTodo", {indexToRemove: indexToRemove, type: 'home'})
      }
      else if(type == 3){
        todosStore.commit("removeTodo", {indexToRemove: indexToRemove, type: 'others'})
      }
    },
    updateItem(indexToUpdate, title, type) {
      if(type == 1){
        todosStore.commit("updateTodoTitle", {indexToUpdate: indexToUpdate, title: title, type: 'work'})
      }
      else if(type == 2){
        todosStore.commit("updateTodoTitle", {indexToUpdate: indexToUpdate, title: title, type: 'home'})
      }
      else if(type == 3){
        todosStore.commit("updateTodoTitle", {indexToUpdate: indexToUpdate, title: title, type: 'others'})
      }
    },
    toggleEditMode(index, type) {
      if(this.editableIndex[type - 1] === index){
        var new_data = this.$refs[type+"todo-" + index][0].innerHTML;
        if(type == 1){
          todosStore.commit("updateTodoTitle", {indexToUpdate: index, title: new_data, type: 'work'})
        }
        else if(type == 2){
          todosStore.commit("updateTodoTitle", {indexToUpdate: index, title: new_data, type: 'home'})
        }
        else if(type == 3){
          todosStore.commit("updateTodoTitle", {indexToUpdate: index, title: new_data, type: 'others'})
        }
        this.editableIndex[type - 1] = null;
      }
      else{
        this.editableIndex[type - 1] = index;
        setTimeout(()=>{
          this.$refs[type+"todo-" + index][0].focus();
        })
      }
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