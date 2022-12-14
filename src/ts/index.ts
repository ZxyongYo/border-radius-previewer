import '../style/main.scss'
import AdjustableBox from './AdjustableBox'
import { SimpleControlBox } from './SimpleControlBox'

const movables = {
  topX: document.getElementById('topX')!,
  rightY: document.getElementById('rightY')!,
  bottomX: document.getElementById('bottomX')!,
  leftY: document.getElementById('leftY')!,
}

const initState = AdjustableBox.generateInitStateFromUrlHash(window.location.hash)

new SimpleControlBox({
  moveableElems: movables,
  state: initState
})
