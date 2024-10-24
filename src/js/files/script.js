// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

window.addEventListener("load", pageLoad)

function pageLoad() {
  // const htmlTag = document.documentElement

  // document.addEventListener('click', e => {
  //     const targetElement = e.target

  //     if (targetElement.closest('.class')) {
  //         console.log('1');
  //     }
  // })

  // Функция для изменения цвета fill у всех path внутри SVG на белый
  function changeSVGFillToWhite(item) {
    const svgs = item.querySelectorAll("svg path")
    svgs.forEach(path => {
      path.setAttribute("data-original-fill", path.getAttribute("fill")) // Сохраняем оригинальный цвет
      path.setAttribute("fill", "#fff") // Меняем цвет на белый
    })
  }

  // Функция для восстановления исходного цвета fill
  function restoreOriginalFill(item) {
    const svgs = item.querySelectorAll("svg path")
    svgs.forEach(path => {
      const originalFill = path.getAttribute("data-original-fill")
      if (originalFill) {
        path.setAttribute("fill", originalFill) // Восстанавливаем оригинальный цвет
      }
    })
  }

  // Добавляем обработчики событий для элементов с классом .item
  document.querySelectorAll(".item-services").forEach(item => {
    item.addEventListener("mouseenter", () => changeSVGFillToWhite(item))
    item.addEventListener("mouseleave", () => restoreOriginalFill(item))

    item.addEventListener("touchstart", () => changeSVGFillToWhite(item))
    item.addEventListener("touchend", () => restoreOriginalFill(item))
  })
}
