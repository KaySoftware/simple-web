import "./tailwind.css"
import "./styles.css"
import './components/slider/styles.css'
import * as slider from './components/slider'
import * as accordeon from './components/accordeon'
import * as gallery from './components/gallery'

/**
 * Document Ready
 **/
function docReady(fn: any) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

slider.mainSlider()
slider.carouselSlider()
accordeon.showAccordeon()
accordeon.showMobileMenu()
gallery.showGallery('img-gallery','tag-menu')

docReady(function() {
    const loader = document.getElementById("pre-loader")
    if (loader != null) {
        loader.style.display = "none"
    }
})
