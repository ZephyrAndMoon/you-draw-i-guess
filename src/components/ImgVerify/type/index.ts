import { Ref, ToRefs } from 'vue'

export type CanvasInfo = {
  pool: string
  width: number
  height: number
  imgCode: string
}

export type UseVerify = {
  handleDraw: () => void
  verify: Ref<HTMLCanvasElement | null>
} & ToRefs<CanvasInfo>
