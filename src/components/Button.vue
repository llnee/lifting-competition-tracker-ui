<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
}
</script>

<style scoped>

.btn {

  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  border: black 1px solid;
  box-shadow: 5px 5px 5px black;
  width: 50%;
}
</style>