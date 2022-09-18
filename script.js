
function next() {
    fetch('http://shibe.online/api/shibes?count=50')
        .then((res) => {
            return res.json();
        })
        .then((imgArr) => {
            console.log(imgArr[0]);
            let data1 = "";
            data1 = `<img class="image1" src="${imgArr[0]}" alt="img1">`
            document.getElementById("image1").innerHTML = data1;
            data2 = `<img class="image2" src="${imgArr[1]}" alt="img2">`
            document.getElementById("image2").innerHTML = data2;
            data3 = `<img class="image3" src="${imgArr[2]}" alt="img3">`
            document.getElementById("image3").innerHTML = data3;

        })

}

function light() {
    document.body.style.backgroundImage = "url('Wall-images/light03.jpg')";
    
}
function dark() {
    document.body.style.backgroundImage = "url('Wall-images/dark01.jpg')";
   
}
dark();
next();