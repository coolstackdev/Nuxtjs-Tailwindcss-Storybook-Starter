<template>
  <div>
    <!-- Test purpose for showing how to use storybook 'knob' and 'action' -->
    <p>{{ round ? 'round' : 'not-round' }}</p>
    <p>{{ type }}</p>
    <p class="text-magenta font-cabin-bold-italic text-lg">
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    text: { type: String, default: '' },
    type: { type: String, default: '' },
    round: { type: Boolean, default: false },
  },
}
</script>

<style></style>
