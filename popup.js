document.getElementById("StudentHaxWeb").addEventListener("click", StudentHaxWeb);

function StudentHaxWeb() {
    const blank = window.open("about:blank", "_blank");
    const doc = blank.document;
    const iframe = doc.createElement("iframe");
    const style = iframe.style;
    const img = doc.createElement("link");
    doc.title = "Algebra-Geometry";
    iframe.src = "https:/studenthax.com";
    style.position = "fixed";
    style.border = style.width = "none";
    style.width = style.height = "100%";
    style.top = style.bottom = style.left = style.right = 0;
    iframe.setAttribute('allowFullScreen', '')
    doc.body.appendChild(iframe)
    }