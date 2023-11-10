
let btn = document.querySelector("button")

btn.addEventListener("click", pegavalor);

let resumo = "";
let valor = "";
let quantidade = "";
function pegavalor() {
    
    let desc = document.querySelector("#desc");
    let preco = document.querySelector("#preco");
    let qtd = document.querySelector("#qtd");

     resumo = desc.value;
     valor = preco.value;
     quantidade = qtd.value;

    console.log(resumo, valor, quantidade)

}


btn.addEventListener("click",()=>{
    fetch("http://192.168.1.45:3000/produtos/novo",{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "id": 5,
            "desc": resumo,
            "preco": valor,
            "qtd": quantidade
        })
    }).then((resposta)=>{
,        if(resposta.status != 200){
            console.log(resposta.json())
        }
    })
})