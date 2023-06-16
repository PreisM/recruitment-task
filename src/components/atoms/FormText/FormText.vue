<template>
  <div class="flex flex-col w-full">
    <label
      :for="id"
      class="text-custom-gray-700 font-semibold mb-2"
      v-text="label"
    />
    <input
      :id="id"
      v-model="model"
      type="text"
      class="border h-10 px-4 py-2 rounded text-custom-gray-700"
      :placeholder="placeholder"
      onkeydown="return /[a-z]/i.test(event.key)"
      @input="changeInput"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AtomFormText',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const changeInput = (ev: Event) => {
      emit('update:modelValue', (ev.target as HTMLInputElement).value)
    }
    
    const model = ref(props.modelValue)

    return { 
      changeInput,
      model
    }
  }
})
</script>
