import { defineComponent } from 'vue'

import './App.scss'

export default defineComponent({
  setup() {
    const handleSwitchStatus = (type: string): void => {}
    return {
      handleSwitchStatus
    }
  },
  render() {
    return (
      <>
        <router-view></router-view>
      </>
    )
  }
})
