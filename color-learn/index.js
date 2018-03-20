document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("next").style.display = "none";
    obj = new Array();

    let update = updatenewcolor();
    let r = update.r;
    let g = update.g;
    let b = update.b;

    //document.getElementById("colorbox").style.backgroundColor =`rgb(${r},${g},${b})`;

    document.getElementById("submit").addEventListener("click", function () {
        let radios = document.getElementsByName('answer');
        for(let i=0; i<radios.length; i++) {
            if(radios[i].checked) {
                //alert(radios[i].value);
                obj.push({ input: { r: r/255, g: g/255, b: b/255 }, output: { [radios[i].value]: 1 } });
                //document.getElementById("json").innerText = JSON.stringify(obj);
                update = updatenewcolor();
                r = update.r;
                g = update.g;
                b = update.b;
                break;
            }
        }
    });

    document.getElementById("result").addEventListener("click", function () {
        document.getElementById("colorchoose").style.display = "none";
        document.getElementById("submit").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("next").style.display = "block";
        var net = new brain.NeuralNetwork();
        net.train(obj);
        update = updatenewcolor();
        r = update.r;
        g = update.g;
        b = update.b;
        let output = net.run({ r: r / 255, g: g / 255, b: b / 255 });
        let outputstr = "";
        for(key in output) {
            outputstr += `${key}: ${Number(output[key] * 100).toFixed(2)}% <br>`;
        }
        document.getElementById("guess").innerHTML = outputstr;
        document.getElementById("next").addEventListener("click", function () {
            update = updatenewcolor();
            r = update.r;
            g = update.g;
            b = update.b;
            output = net.run({ r: r / 255, g: g / 255, b: b / 255 });
            outputstr = "";
            for (key in output) {
                outputstr += `${key}: ${Number(output[key] * 100).toFixed(2)}% <br>`;
            }
            document.getElementById("guess").innerHTML = outputstr;
        });
    });
});

function updatenewcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);


    document.getElementById("colorbox").style.backgroundColor = `rgb(${r},${g},${b})`;

    return ({r: r, g: g, b: b});
}