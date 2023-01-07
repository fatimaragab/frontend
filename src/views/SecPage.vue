<template>
  <html>

  <body>

  <div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>

    <input v-model="text" type="text" placeholder="Title...">

    <span class="addBtn" v-on:click="newElement">Add</span>
  </div>

  <ul>
    <li v-for="(item, index) in items" :class="{ checked: item.isChecked }" @click.native="toggleItemCheck(index)">
      {{ item.title }}
    </li>
  </ul>

  </body>

  </html>
</template>
<script>


export default {
  data() {
    return {
      text: "",
      items: [
        { title: "Hit the gym", isChecked: false },
        { title: "Pay bills", isChecked: true }
      ]
    }
  },
  methods: {
    newElement() {
      // create a new item where the title is the current value of the input field
      const newItem = {
        title: this.text,
        isChecked: false,
      }

      // add the new item to our list of items
      this.items.push(newItem)

      // empty the input field
      this.text = ""
    },
    toggleItemCheck(index) {
      this.items[index].isChecked = !this.items[index].isChecked
    },
  }
}
</script>