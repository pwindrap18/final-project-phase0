var pesanan = document.getElementById("pesanan")
var listPesanan = pesanan.children[0]

function addListAyamGr(){
    var list = document.createElement('li')
    var x = document.getElementById("Ayam goreng").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListAyamBkr(){
    var list = document.createElement('li')
    var x = document.getElementById("Ayam bakar").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListAyamGprk(){
    var list = document.createElement('li')
    var x = document.getElementById("Ayam geprek").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListEtm(){
    var list = document.createElement('li')
    var x = document.getElementById("Es teh manis").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListEj(){
    var list = document.createElement('li')
    var x = document.getElementById("Es jeruk").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListTt(){
    var list = document.createElement('li')
    var x = document.getElementById("Teh tawar").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

function addListAyamGr(){
    var list = document.createElement('li')
    var x = document.getElementById("Ayam goreng").value;
    list.innerHTML = x
    listPesanan.appendChild(list)
}

