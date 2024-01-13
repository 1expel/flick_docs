function changeMenu() {
    const menuID = document.getElementById("sidebar");
    const sidebarContainer = document.getElementById("sidebar-container");
    const contentID = document.getElementById("content");

    if (sidebarContainer.style.display == "none") {
        sidebarContainer.style.display = "block";
        contentID.style.width = null;
        menuID.style.backgroundColor = null;
    }
    else {
        sidebarContainer.style.display = "none";
        menuID.style.backgroundColor = "#f6f6f6";
        contentID.style.width = "95%";
    }
}

function handleResize() {
    const menuID = document.getElementById("sidebar");
    const sidebarContainer = document.getElementById("sidebar-container");
    const contentID = document.getElementById("content");

    menuID.style = null;
    sidebarContainer.style = null;
    contentID.style = null;
}
