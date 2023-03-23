let listProduct =[];
function OnClick(){
    let name = document.getElementById("name").value;

    let user={
        name:name,
    }
    listProduct.push(user);
    document.getElementById('name').value="",
     renderlistProduc();
 
}
function renderlistProduc(){
    let result =
    `
    <tr>
    <td></td>
    </tr>
    `;

    for(let i=0;i<listProduct.length;i++){
        result+=
        `
        <tr>
        <td id="aa">${listProduct[i].name}</td>
        </tr>
        `;
    
    }
    document.getElementById("table").innerHTML=result;
}

    