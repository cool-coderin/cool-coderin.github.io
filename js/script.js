document.addEventListener("DOMContentLoaded",() => {disp();})

let c = 0;

function disp(){

        if (c==0){
            document.getElementById("first").style.visibility = "visible";
            document.getElementById("second").style.visibility = "hidden";
            c=1;
        }else{
            document.getElementById("first").style.visibility = "hidden";
            document.getElementById("second").style.visibility = "visible";
            c=0;
        }


        window.setTimeout(disp, 500);
        
        document.querySelector("#header").onmouseover= ()=>{var hue_h1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            document.getElementById("header").style.color=hue_h1;
            var hue_O = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            document.querySelectorAll("span").forEach(el=>{el.style.color=hue_O;});
        };

}
