import React from "react";
import {toSvg} from "html-to-image";
import {FaImage} from "react-icons/fa";
import Button from "arwes/lib/Button/index.js";

function downloadImage(dataUrl) {
    const a = document.createElement("a");

    a.setAttribute("download", "reactflow.svg");
    a.setAttribute("href", dataUrl);
    a.click();
}


function DownloadButton() {
    const savedTheme = localStorage.getItem('theme');
    const bgColor = savedTheme === 'dark' ? '#0F172A' : '#94A3B8';

    const onClick = () => {
        toSvg(document.querySelector(".react-flow__viewport"), {
            backgroundColor: bgColor,
        }).then(downloadImage);
    };

    return (
        <Button animate className={"font-semibold text-lg custom-button download-img"}
                layer={"control"}
                onClick={onClick}>
            <FaImage size={"1.2em"}/>
        </Button>
    );
}

export default DownloadButton;
