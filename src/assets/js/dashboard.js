/* eslint-disable no-unused-vars */
window.addEventListener('load', () => {

    let sideBarToggler = document.querySelector(".sidebar-toggler")
    let sideBar = document.querySelector(".sidebar-column")

    // open sidebar
    sideBarToggler.addEventListener("click", () => {

        sideBar.classList.toggle("shown")

    })

    let closeSideBarBtn = document.querySelector(".close-sidebar")

    // close sidebar
    closeSideBarBtn.addEventListener("click", () => {

        sideBar.classList.toggle("shown")

    })
})