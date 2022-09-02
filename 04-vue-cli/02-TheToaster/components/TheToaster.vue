<template>
  <div class="toasts">
    <ui-toast
      v-for="toast in toasts"
      :toast-message="toast.textMessage"
      :toast-type="toast.typeIcon"
    />
  </div>
</template>

<script>
import UiToast from './UiToast.vue'

export default {
  name: 'TheToaster',

  components: { UiToast },

  data() {
    return {
      toasts: [],
    }
  },

  methods: {
    success(textMessage) {
      this.toasts.push({ textMessage, typeIcon: 'success' })
    },
    error(textMessage) {
      this.toasts.push({ textMessage, typeIcon: 'error' })
    },
  },
}
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast + .toast {
  margin-top: 20px;
}
</style>
