<template>
  <h1>foo: {{ foo }}</h1>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    foo: {
      default: 'hello',
    }
  }
})
</script>
