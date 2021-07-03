function insertNumber(number){
    var existingNumber = $("#result").val()
    $("#result").val(existingNumber + number)
}

function clearResult(){
    $("#result").val('')
}

function calculate(){
    var result = eval($("#result").val()) 
    $("#result").val(result);
}

function deleteNumber(){
    var lastNumber = $("#result").val()
    if(lastNumber != ''){
        $("#result").val(lastNumber.slice(0,-1))
    }
}