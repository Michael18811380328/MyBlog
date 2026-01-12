# vee-validate

‌一个基于Vue的表单验证库，‌帮助开发者实现表单数据的验证功能。‌

[https://github.com/logaretm/vee-validate](https://github.com/logaretm/vee-validate "https://github.com/logaretm/vee-validate")

近2年没有更新

vee-validate.logaretm.com/&#x20;

Painless Vue forms

## Features

* 🍞 Easy: Declarative validation that is familiar and easy to setup

* 🧘‍♀️ Flexible: Synchronous, Asynchronous, field-level or form-level validation

* ⚡️ Fast: Build faster forms faster with intuitive API and small footprint

* 🏏 Minimal: Only handles the complicated form concerns, gives you full control over everything else

* 😎 UI Agnostic: Works with native HTML elements or your favorite UI library components

* 🦾 Progressive: Works whether you use Vue.js as a progressive enhancement or in a complex setup

* ✅ Built-in Rules: Companion lib with 25+ Rules that covers most needs in most web applications

* 🌐 i18n: 45+ locales for built-in rules contributed by developers from all over the world

## Getting Started

### Installation

​

```
# Install with yarn
```

### Vue version support

The main v4 version supports Vue 3.x only, for previous versions of Vue, check
the following the table

| vue Version | vee-validate version | Documentation Link |
| ----------- | -------------------- | ------------------ |
| 2.x         | 2.x or 3.x           | v2 or v3           |
| 3.x         | 4.x                  | v4                 |

### Usage

vee-validate offers two styles to integrate form validation into your Vue.js
apps.

#### Composition API

The fastest way to create a form and manage its validation, behavior, and
values is with the composition API.

Create your form with useForm and then use defineField to create your
field model and props/attributes and handleSubmit to use the values and send
them to an API.

```
<script setup>
import { useForm } from 'vee-validate';// Validation, or use `yup` or `zod`

function required(value) {
  return value ? true : 'This field is required';
}

// Create the form
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: {
    field: required,
  },
});

// Define fields
const [field, fieldProps] = defineField('field');

// Submit handler
const onSubmit = handleSubmit(values => {
  // Submit to API
  console.log(values);
});
</script>

<template>
  <form @submit="onSubmit">
    <input v-model="field" v-bind="fieldProps" />
    <span>{{ errors.field }}</span>

    <button>Submit</button>
  </form>
</template>
```

You can do so much more than this, for more info check the composition API
documentation.

#### Declarative Components

Higher-order components can also be used to build forms. Register the Field
and Form components and create a simple required validator:
&#x20;  &#x20;

```
<script setup>
import { Field, Form } from 'vee-validate';

// Validation, or use `yup` or `zod`
function required(value) {
  return value ? true : 'This field is required';
}

// Submit handler
function onSubmit(values) {
  // Submit to API
  console.log(values);
}
</script>

<template>
  <Form v-slot="{ errors }" @submit="onSubmit">
    <Field name="field" :rules="required" />

    <span>{{ errors.field }}</span>

    <button>Submit</button>
  </Form>
</template>
```

The Field component renders an input of type text by default but you can
control that

## 📚 Documentation

Read the documentation and demos. [https://vee-validate.logaretm.com/v4](https://vee-validate.logaretm.com/v4 "https://vee-validate.logaretm.com/v4")

## Credits

* Inspired by Laravel's validation syntax

* v4 API Inspired by Formik's

* Nested path types by react-hook-form

* Logo by Baianat

​


