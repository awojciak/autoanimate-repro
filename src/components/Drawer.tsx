import { createSignal, For, Show } from "solid-js"
import { createAutoAnimate } from "@formkit/auto-animate/solid"
import './index.css'

export default function Drawer() {
  let parent: HTMLDivElement
  createAutoAnimate(() => parent, /* optional config */)

  const menuItems = ["Home", "Settings", "Logout"]
  const [isExpanded, setIsExpanded] = createSignal(true)

  return <div class="parent" ref={parent}>
    <Show when={isExpanded()} keyed>
      <ul class="drawer">
        <For each={menuItems}>
          {item => <li class="item">{item}</li>}
        </For>
      </ul>
    </Show>
    <div class="content">
      <button
        class="button button--alt"
        type="button"
        onClick={() => setIsExpanded(isExpanded => !isExpanded)}
      >
        Toggle Drawer
      </button>
    </div>
  </div>
}
