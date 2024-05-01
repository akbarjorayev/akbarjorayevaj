export function setTabIcon(icon) {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.href = icon
  document.head.appendChild(link)
}
