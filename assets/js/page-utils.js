function checkScreenSize() {
    let width = screen.width;
    if(width < 800)
        //location.href="../../../assets/error/405.html";
        //alert("This page is not fully responsive yet!")
        return;
}

checkScreenSize();