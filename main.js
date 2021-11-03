const Form = document.querySelector('.container:nth-child(2)');
const container = document.querySelector('.container:nth-child(3)');
const btn = Form.querySelector('#btn');
let text = document.getElementsByTagName('input');
let thue = 0;
let luong = 0;
btn.addEventListener('click',function(){
    if(Number(text[0].value) >= 15){
        thue = 0.3*Number(text[0].value);
        luong = Number(text[0].value) - thue;
        container.classList.add('active');
        container.innerHTML = "<div class='container__thue'><h3>Thuế</h3><p>" +`${thue}`+
        "triệu</p></div><div class='container__luong'><h3>Lương ròng</h3><p>"+`${luong}` +" triệu</p></div>";
    } else if(Number(text[0].value) >= 7 && Number(text[0].value) < 15 ){
        thue = 0.2*Number(text[0].value);
        luong = Number(text[0].value) - thue;
        container.classList.add('active');
        container.innerHTML = "<div class='container__thue'><h3>Thuế</h3><p>" +`${thue}`+
        "triệu</p></div><div class='container__luong'><h3>Lương ròng</h3><p>"+`${luong}` +" triệu</p></div>";
    } else{
        thue = 0.1*Number(text[0].value);
        luong = Number(text[0].value) - thue;
        container.classList.add('active');
        container.innerHTML = "<div class='container__thue'><h3>Thuế</h3><p>" +`${thue}`+
        "triệu</p></div><div class='container__luong'><h3>Lương ròng</h3><p>"+`${luong}` +" triệu</p></div>";
    }
})


