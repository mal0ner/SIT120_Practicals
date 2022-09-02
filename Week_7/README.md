# SIT120 WEEK 7 PRACTICAL TASKS: Vue JS - Registration, Props, Custom Events, Async

**Overview**:

This week, you will gain a better understanding of the Vue.js component. How Component (Registration, Props, Custom Events, Dynamic/Async) works? You will also learn and start coding Vue Components.

## Task 1: Component Registration

**Reflection**:

As mentioned in the week 6 reflection, vue components can be manually scoped through 'registration'
in the components in which they are used. By explicitly specifying which components will be used
in which contexts, vue can improve the bundle size by not shipping unecessary globally scoped code.
This application involved a global 'article' component which contained a locally scoped child component 'authors-section'.

## Task 2 and 3: Coding Props and Events.

**Reflection**:

As discussed in week 6, props are the method by which components may 'pass down' state to any
number of derived child-components. In line with Vue's attention to reactive UI, changes made to
higher level components will cascade down via props. Conversely, events are Vue's primary mechanism
for initiating changes or influencing state in the opposite direction; from a lower level component to a higher level one. Higher level components can 'listen' for events originating from lower level components via the $emit method and can also recieve data in the process.

## Task 4: Vue Slots - named Slots

Slots allow for data to be passed to components in the form of HTML markdown instead of just plain
values. This can be useful when certain sections of a component template may need to have variable
content. In this task, I implemented both the main article body and the author's notes as slots to
enable some creative freedom when producing the articles. Named slots use an identifier
to ease the process of assigning elements between multiple slots and makes use of the template element with a v-slot directive to assign them.
