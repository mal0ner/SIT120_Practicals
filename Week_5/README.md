# SIT120 WEEK 5 PRACTICAL TASKS: Vue JS - Components, User input and Props

**Overview**:

This week, you will focus on gaining a better understanding of the Vue.js Framework and its different components and play with different examples. This week's tasks are all about learning only, you do not need to push anything to github. Just 1-2 sentences reflections needed for each task.

## Task 1: Components Basics

**Reflection**:

```js
Vue.component("counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    'button v-on:click="count++">You clicked the button {{ count }} times</button>',
});
```

Components are portable and reusable segments of code that can have their own data and methods
associated with them. In Vue, each component rendered out to the DOM is its own instance and
can maintain state independent of other instances of the same component.

```html
<div id="app">
  <counter></counter>
  <!-- independent instance with separate counter-->
  <counter></counter>
  <!-- independent instance with separate counter-->
  <counter></counter>
  <!-- independent instance with separate counter-->
</div>
```

This architecture allows for the developer to create large, complex web applications through the composition of smaller and more generic components whose state can be manipulated to achieve the desired effect.
