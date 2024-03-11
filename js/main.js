// https://mockapi.io/projects/65e9edc0c9bf92ae3d3aa692

function setCars(e){
    e.preventDefault()
    console.log();
    console.log();
    console.log();
    let book = {
        Image: e.target.Image.value,
        Name: e.target.Image.value,
        Cost: e.target.Cost.value,
    }
    fetch('https://mockapi.io/projects/65e9edc0c9bf92ae3d3aa692',{
        method:'POST',
        headers:{'control-type': 'application/json'},
        body:JSON.stringify(book)
    })
    .then((res)=> res.json)
    .then((data)=> console.log(data));
}