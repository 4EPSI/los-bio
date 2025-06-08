import { onMounted, onBeforeUnmount } from 'vue'

export function useClickOutside(
  elementGetter: () => HTMLElement | null,
  callback: () => void,
  ignoreSelectors: string[] = []
) {
  const handler = (event: MouseEvent) => {
    const el = elementGetter()
    const target = event.target as HTMLElement
    if (!el) return

    const clickedIgnored = ignoreSelectors.some(selector =>
      target.closest(selector)
    )
    if (clickedIgnored) return

    if (!el.contains(target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handler)
  })
}