'use strict';

const url = 'http://10.107.142.2:8080/produtos';

const getProdutos = async() => {
    const response = await fetch(url);
    return response.json();
}

const postProduto = (produto) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {
            'content-type':'application/json',
        },
    };
    fetch(url, options);
};

export {getProdutos, postProduto};