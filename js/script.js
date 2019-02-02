document.addEventListener("DOMContentLoaded",() => {disp();})


let c = 0;
let ok =0;

function disp(){

        if (c==0 && ok==0){
            document.getElementById("first").style.visibility = "visible";
            document.getElementById("second").style.visibility = "visible";
            c=1;
        }else if(c==1 && ok==0){
            document.getElementById("first").style.visibility = "hidden";
            document.getElementById("second").style.visibility = "hidden";
            c=0;
        }else{
            document.getElementById("sc").innerHTML='Under construction';
        }


        window.setTimeout(disp, 500);

        try {
            var hue_h1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            document.getElementById("header").style.color=hue_h1;
            var hue_O = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            document.querySelectorAll("span").forEach(el=>{el.style.color=hue_O;});
            
        } catch (error) {
            var hue_h1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            document.getElementById("hh").style.color=hue_h1;
        }

        


        document.querySelector("#sc").addEventListener("mouseover", function(event){ok=1;})

        document.querySelector("#sc").addEventListener("mouseout", function(event){
            ok=0;
            document.getElementById("sc").innerHTML="C<span id='first' style='visibility:hidden'>OO</span>L C<span id='second' style='visibility:visible'>O</span>DERIN";})

}



