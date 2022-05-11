function d(){
    let punto1 = document.getElementById("x1").value;
    let punto12 = document.getElementById("y1").value;
    let punto2 = document.getElementById("x2").value;
    let punto21 = document.getElementById("y2").value

    d = ((punto2-punto1)**2 + (punto21 - punto12)**2)**(1/2);
     
    let divv = document.getElementById("myp");
    divv.classList.add(alert(d));
}