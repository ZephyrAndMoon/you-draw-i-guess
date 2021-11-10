import { defineComponent, ref } from 'vue'
import { useVerify } from '@/hooks/verify'

export default defineComponent({
  setup() {
    const verify = ref<HTMLCanvasElement | null>(null)

    return {
      ...useVerify(verify)
    }
  },
  render() {
    return (
      <>
        <canvas ref="verify" width="120" height="40" onClick={this.handleDraw}></canvas>
      </>
    )
  }
})
