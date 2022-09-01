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

## Task 2: Understanding Handling User Input

**Reflection**:

As another example of a v- prefixed Vue directive, v-model is a method for binding data between a Vue
instance and the wide range of user input elements available in HTML.

```jsx
<div id="app">
    <input v-model="text">
    <p> {{ text }} </p>
</div>

let app = new Vue({
    el: '#app',
    data: {
        text: '',
    }
})
```

In accordance with Vue's focus on reactive state, a declaratively rendered
element which references the data to which the input is bound will reflect
changes to its state in real time. V-model has interop and defined behaviour for
an array of different input types including text-areas, radio buttons, checkboxes and select elements, as well as a set of helpful functions or
'modifiers' that can be applied to the user input that allow the developer
to receive the data in the desired format.

## Task 3: Learning Component Registration

**Reflection**:

In Vue, registration essentially refers to the scope at which a component
is 'visible' or available for use in templating. 'Globally' registered components are created via the Vue.component() method and, hence the name, are universally available across the app. Locally registered components are defined as a simple variable using standard syntax and are only usable by components
who have specified its name in its options within the _components_ object. Global components are packed in the javascript bundle loaded by the user regardless of whether or not they are in use, hurting user experience; use local components wherever possible.

Global Component Registration:

```js
Vue.component("component-name", {
  //...options...
});
```

Local Component Registration:

```js
let Component = {
  //...options...
};

//component in which it is registered.
Vue.component("parent-component", {
  data: function () {
    //...
  },
  template: "<h1></h1>",
  components: { myComponent: "component-name" },
});
```

## Task 4: Props, Event emitters and Slots

- **_Props_**: Props, or 'properties' are a method for the unidirectional passing of data from a parent to a child component. External data that a component may wish to utilise can be defined as a prop in its options as an array of string prop identifiers (or an object of k-V
  pairs if the type should need to be specified). When actually using components, props accept values through the HTML attribute syntax. For dynamically updating prop values, we can use the familiar v-bind:prop-name directive.

```js
Vue.component("article", {
  props: ["title", "author", "age"],
  // or
  props: { title: String, author: String, age: Number },
  //...
});
```

- **_Events_**: The v-on directive allows for us to specify behaviour for DOM elements in reaction to certain types of events that we can 'listen' for. Furthermore, the $emit method allows for developers to define their own events and by extension pass information from a child element to a parent element.

- **_Slots_**: slots are reserved DOM elements defined in a component's template that allow us to 'inject' markup. Instead of being achieved through custom attributes, slots can be filled
  by populating the element. Slots can be named and also have the same scope as the rest of the template in which they are written.
