<template>
  <button class="lz-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'
defineOptions({ name: "lz-button" });

type ButtonProps = {
  type?: string
}

const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`lz-button--${buttonProps.type}`]: buttonProps.type }
})
</script>

