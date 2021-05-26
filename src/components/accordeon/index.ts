export function showAccordeon() {
    let accordeons: HTMLCollection = document.getElementsByClassName("accordeon")
    for (let index = 0; index < accordeons.length; index++) {
        let accordeon = accordeons.item(index)
        let tabs: HTMLCollection = accordeon.getElementsByClassName("tab")
        for (let tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
            let tab = tabs[tabIndex]
            let title = tab.getElementsByClassName("tab-title").item(0)
            if (title != null) {
                title.addEventListener("click", () => tab.classList.toggle("active"))
            }
        }
    }
}

export function showMobileMenu() {
    let btnMenu = document.getElementById("btn-mobile-menu")
    let menu = document.getElementById("mobile-menu")
    btnMenu.addEventListener("click", () => menu.classList.toggle("active"))

    let childs = menu.querySelectorAll("li > a")
    childs.forEach(child => {
        child.addEventListener("click", () => child.nextElementSibling.classList.toggle("active"))
    })
}
