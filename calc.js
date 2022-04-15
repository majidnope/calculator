

function entered(val){
    var totalText = document.getElementById('input').value;
    document.getElementById('input').value =  totalText + val;
    console.log(totalText);
}

function clearit(){
    document.getElementById('input').value = "";
}

function result(){
    var total = document.getElementById('input').value;
    var res =  
    document.getElementById('input').value = eval(total);
    console.log(res)
}