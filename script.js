document.getElementById('anoAtual').textContent = new Date().getFullYear().toString()

const printBtn = document.getElementById('btnPrint')
if (printBtn) {
  printBtn.addEventListener('click', () => window.print())
}

const internalLinks = document.querySelectorAll('.nav a[href^="#"], .top-link[href^="#"], .skip-link[href^="#"]')
internalLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href')
    if (!targetId || targetId === '#') return
    const target = document.querySelector(targetId)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
    }
  })
})

;(function enableKeyboardFocusClass() {
  const handleFirstTab = (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  }
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  window.addEventListener('keydown', handleFirstTab)
})()
