import { onMounted, toRefs, reactive, Ref } from 'vue'
import { randomColor, randomNum } from '@/utils/util'

import { CanvasInfo, UseVerify } from '@/types/imgVerify'

export const useVerify = (verify: Ref<HTMLCanvasElement | null>): UseVerify => {
  const state = reactive<CanvasInfo>({
    pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', // 随机字符串
    width: 120, // 展示区域宽度
    height: 40, // 展示区域高度
    imgCode: '' // 保存页面的内容（用来判断输入验证是否满足改code）,
  })

  // 绘制随机内容
  const draw = (): string => {
    /*
     * 1.填充颜色
     * - 生成画布
     * - 填充颜色与位置
     * - 填充位置
     */
    const ctx: CanvasRenderingContext2D | null = verify.value!.getContext('2d')
    let imgCode: string = ''

    if (ctx) {
      ctx.fillStyle = randomColor(180, 230)
      ctx.fillRect(0, 0, state.width, state.height)
      /*
       *  2.生成4个随机数
       *  - 七扭八歪
       *  - 随机大小
       *  - 画吧柳梢，各种色儿
       */
      for (let i = 0; i < 4; i++) {
        const text = state.pool[randomNum(0, state.pool.length - 1)]
        const fontSize = randomNum(18, 40)
        const deg = randomNum(-30, 30)
        /*
         * 3.绘制文字并让四个文字在不同的位置显示的思路 :
         * - 定义字体
         * - 定义对齐方式
         * - 填充不同的颜色
         * - 保存当前的状态（以防止以上的状态受影响）
         * - 平移translate()
         * - 旋转 rotate()
         * - 填充文字
         * - restore出栈
         * */
        ctx.font = `${fontSize}px Simhei`
        ctx.textBaseline = 'top'
        ctx.fillStyle = randomColor(80, 150)

        ctx.save()
        ctx.translate(30 * i + 15, 15)
        ctx.rotate((deg * Math.PI) / 180)

        ctx.fillText(text, -15 + 5, -15)
        ctx.restore()
        imgCode += text

        for (let j = 0; j < 5; j++) {
          ctx.beginPath()
          ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height))
          ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height))
          ctx.strokeStyle = randomColor(180, 230)
          ctx.closePath()
          ctx.stroke()
        }

        /*
         *   四、随机产生40个干扰的小点
         */
        for (let k = 0; k < 40; k++) {
          ctx.beginPath()
          ctx.arc(randomNum(0, state.width), randomNum(0, state.height), 1, 0, 2 * Math.PI)
          ctx.closePath()
          ctx.fillStyle = randomColor(150, 200)
          ctx.fill()
        }
      }
    }

    /*
     *   三、随机产生5条干扰线,干扰线的颜色要浅一点
     */
    return imgCode
  }

  // 初始展示
  onMounted(() => {
    draw()
    state.imgCode = draw()
  })

  // 点击图片重新绘制
  const handleDraw = () => {
    draw()
    state.imgCode = draw()
  }

  return {
    verify,
    handleDraw,
    ...toRefs<CanvasInfo>(state)
  }
}
