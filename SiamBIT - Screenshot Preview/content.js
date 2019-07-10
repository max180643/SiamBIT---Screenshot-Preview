var list = document.querySelectorAll('[title="รูปภาพตัวอย่าง"]');
    for (i = 0; i < list.length; i++) {
        var extension = list[i].parentNode.href.split('.').pop();
        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif') {
            list[i].src = list[i].parentNode.href;
            list[i].height = 100;
            list[i].align = "top";
            list[i].style.display = "block";
        }
    }
// Create by max180643 (Chanwit Settavongsin)!