<template>
  <div id="todo-list">
    <h2>Todo List</h2>
    <ul>
      <li :key="item.id" v-for="item in todolist">
        <TodoItem v-bind:item="item"></TodoItem>
      </li>
    </ul>
    <input v-model="state.inputValue">
    <button @click="handleAddTodo">Add</button>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { ADD_TODO_ACTION } from "../store/action-types.js";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem
  },
  data: function() {
    return {
      state: {
        inputValue: ""
      }
    };
  },
  methods: {
    handleAddTodo: function() {
      if (!this.state.inputValue) {
        return;
      }
      this.$store.dispatch(ADD_TODO_ACTION, this.state.inputValue);
    }
  },
  computed: {
    ...mapGetters(["todolist"])
  }
};
</script>
