
function next() {
    fetch('http://shibe.online/api/shibes?count=50')
        .then((res) => {
            return res.json();
        })
        .then((imgArr) => {
            let data1 = "";
            let data2 = "";
            let data3 = "";
            data1 = `<img class="img1d" src="${imgArr[0]}" alt="img1">`
            document.getElementById("image1").innerHTML = data1;
            data2 = `<img class="img2d"  src="${imgArr[1]}" alt="img2">`
            document.getElementById("image2").innerHTML = data2;
            data3 = `<img class="img3d" src="${imgArr[2]}" alt="img3">`
            document.getElementById("image3").innerHTML = data3;

        })

}
let x=1;
function light() {
    document.body.style.backgroundImage = "url('Wall-images/light01.webp')";
    document.getElementById("title").style.color = "black"
    document.getElementById("item1").style.color = "black"
    document.getElementById("item2").style.color = "black"
    document.getElementById("item3").style.color = "black"
    x=0;

}
function dark() {
    document.body.style.backgroundImage = "url('Wall-images/4dark.jpg')";
    document.getElementById("title").style.color = "white"
    document.getElementById("item1").style.color = "white"
    document.getElementById("item2").style.color = "white"
    document.getElementById("item3").style.color = "white"
    x=1;

}

item1.addEventListener('mouseover', function () {
    document.getElementById("item1").style.backgroundColor = "white"
    document.getElementById("item1").style.color = "black"
})
item1.addEventListener('mouseout', function () {
    document.getElementById("item1").style.backgroundColor = "transparent"
    document.getElementById("item1").style.color = "white"
})
item2.addEventListener('mouseover', function () {
    document.getElementById("item2").style.backgroundColor = "white"
    document.getElementById("item2").style.color = "black"
})
item2.addEventListener('mouseout', function () {
    document.getElementById("item2").style.backgroundColor = "transparent"
    document.getElementById("item2").style.color = "white"
})
item3.addEventListener('mouseover', function () {
    document.getElementById("item3").style.backgroundColor = "white"
    document.getElementById("item3").style.color = "black"
})
item3.addEventListener('mouseout', function () {
    document.getElementById("item3").style.backgroundColor = "transparent"
    document.getElementById("item3").style.color = "white"
})

dark();
next();

