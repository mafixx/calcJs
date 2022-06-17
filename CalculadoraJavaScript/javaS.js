function sum(){
    var s1 = document.getElementById('input1').value;
    var s2 = document.getElementById('input2').value;
    var s3 = parseInt(s1) + parseInt(s2);
    // alert(s3); 
    if(!isNaN(s1) && !isNaN(s2) && s1 != "" && s2 != ""){
        console.log(sum = s1 + "+" + s2 + "=" + s3);
        document.getElementById('result').value=s3;
        document.getElementById('scrresult').innerHTML = (s1 + "+" + s2);
        clearall();
    }else{
        alert('Digite todos os valores!');
    }
}


function minus(){
    var s1 = document.getElementById('input1').value;
    var s2 = document.getElementById('input2').value;
    var s3 = s1 - s2;
    // alert(s3);
    if(!isNaN(s1) && !isNaN(s2) && s1 != "" && s2 != ""){
        console.log(minus = s1 + "-" + s2 + "=" + s3);
        document.getElementById('result').value=s3;
        document.getElementById('scrresult').innerHTML = (s1 + "-" + s2);
        clearall();
    }else{
        alert('Digite todos os valores!');
    }
}


function divisao(){
    var s1 = document.getElementById('input1').value;
    var s2 = document.getElementById('input2').value;
    var s3 = s1 / s2;
    // alert(s3);
    if(!isNaN(s1) && !isNaN(s2) && s1 != "" && s2 != "" && s2 != 0){
        console.log(divisao = s1 + "÷" +  s2 + "=" + s3);
        document.getElementById('result').value=s3;
        document.getElementById('scrresult').innerHTML = (s1 + "÷" + s2);
        clearall();
    }else{
        window.document.getElementById('input2').style.background= 'red';
        alert('Digite todos os valores e, não divida por 0!');
    }
}
function clearall() {
    window.document.getElementById('input2').style.background= 'white';
}

function money(){
    var s1 = document.getElementById('input1').value;
    var s2 = document.getElementById('input2').value;
    var s3 = s1 * s2;
    // alert(s3);
    if(!isNaN(s1) && !isNaN(s2) && s1 != "" && s2 != ""){
        console.log(money = s1 + "x" + s2 + "=" + s3);
        document.getElementById('result').value=s3;
        document.getElementById('scrresult').innerHTML = (s1 + "x" + s2);
        clearall();
    }else{
        alert('Digite todos os valores!');
    }
}