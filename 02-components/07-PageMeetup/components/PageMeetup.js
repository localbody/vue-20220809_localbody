import { defineComponent } from '../vendor/vue.esm-browser.js'
import UiContainer from './UiContainer.js'
import UiAlert from './UiAlert.js'
import MeetupView from '../../06-MeetupView/components/MeetupView'

import { fetchMeetupById } from '../meetupService.js'

export default defineComponent({
  name: 'PageMeetup',

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  data() {
    return {
      meetup: null,
      error: null,
    }
  },

  watch: {
    meetupId: {
      immediate: true,
      handler(id) {
        this.meetup = null
        this.error = null
        fetchMeetupById(id)
          .then((meetup) => {
            this.meetup = meetup
          })
          .catch((error) => (this.error = error))
      },
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->

      <MeetupView v-if="meetup"  :meetup="meetup"/>

      <UiContainer v-else-if="!meetup && !error" >
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-else-if="error">
        <UiAlert>{{ error.message }}</UiAlert>
      </UiContainer>
    </div>`,
})
