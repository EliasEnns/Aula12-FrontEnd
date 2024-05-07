import React, { useState } from 'react';
import './FormularioProdutos.css';

const FormularioProdutos = ({ produtos, setProdutos }) => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState('');

    const saveForm = (event) => {
        event.preventDefault();
        const novoProduto = {
            id: produtos.length + 1,
            nome: nome,
            preco: preco,
            estoque: estoque
        };
        setProdutos([...produtos, novoProduto]);
        setNome('');
        setPreco('');
        setEstoque('');
    }

    return (
        <div className="container">
            <h2>Cadastro de Produtos</h2>
            <form onSubmit={saveForm}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" required value={nome} onChange={(event) => setNome(event.target.value)} />
                <label htmlFor="preco">Preço:</label>
                <input type="number" name="preco" required value={preco} onChange={(event) => setPreco(event.target.value)} />
                <label htmlFor="estoque">Estoque:</label>
                <input type="number" name="estoque" required value={estoque} onChange={(event) => setEstoque(event.target.value)} />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
};

export default FormularioProdutos;
