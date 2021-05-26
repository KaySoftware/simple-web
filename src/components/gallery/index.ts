// @ts-ignore
import anime from "animejs/lib/anime.es";

export function showGallery(id: string, filter_class: string) {
    const mainSelector = document.getElementById(id)
    if (mainSelector != null) {
        const items: HTMLCollection = mainSelector.getElementsByClassName("image-block")
        const filters = document.querySelectorAll("." + filter_class + " li a")
        filters.forEach(filter => {
            let filterAttr = filter.getAttribute("data-filter")
            filter.addEventListener("click", () => {
                Array.from(items).forEach(item => {
                    let m = item as HTMLElement
                    anime({
                        targets: m,
                        opacity: "1",
                        duration: 500
                    })

                    let array = JSON.parse(m.getAttribute("data-groups"))
                    if (!array.includes(filterAttr) && filterAttr != "all") {
                        anime({
                            targets: m,
                            opacity: "0",
                            duration: 500
                        })
                    }
                })
            })
        })
    }
}
