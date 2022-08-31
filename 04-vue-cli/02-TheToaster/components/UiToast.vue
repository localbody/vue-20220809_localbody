<template>
  <div v-if="isShow" class="toast" :class="`toast_${toastType}`">
    <ui-icon class="toast__icon" :icon="toastTypeIcon" />
    <span>{{ toastMessage }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue'

const INTERVAL = 5000

const TOAST_TYPE_ICONS = {
  success: 'check-circle',
  error: 'alert-circle',
}

export default {
  name: 'UiToast',

  components: { UiIcon },

  props: {
    toastMessage: {
      type: String,
      required: false,
    },
    toastType: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      timeoutId: null,
      isShow: true,
    }
  },

  created() {
    this.timeoutId = setTimeout(() => {
      this.isShow = false
    }, INTERVAL)
  },

  beforeUnmount() {
    clearTimeout(this.timeoutId)
  },

  computed: {
    toastTypeIcon() {
      return TOAST_TYPE_ICONS[this.toastType]
    },
  },
}
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
