<template>
  <span class="lz-icon" :class="iconStyle">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'
defineOptions({ name: "lz-icon" });

type iconProps = {
  type?: string
}

const iconProps = defineProps<iconProps>()

const iconStyle = computed(() => {
  return { [`lz-icon--${iconProps.type}`]: iconProps.type }
})
</script>

