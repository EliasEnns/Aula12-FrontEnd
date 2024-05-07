import React, { useState } from 'react';
import './TabelaProdutos.css';

const TabelaProdutos = ({ produtos, setProdutos, idProdutos }) => {
    const [produtoEditado, setProdutoEditado] = useState({});
    const [novoProduto, setNovoProduto] = useState({ nome: '', preco: '', estoque: '' });

    const handleDelete = (id) => {
        if (window.confirm('Tem certeza de que deseja excluir este produto?')) {
            setProdutos(produtos.filter(produto => produto.id !== id));
        }
    };

    const handleEdit = (produto) => {
        setProdutoEditado({ ...produtoEditado, [produto.id]: produto });
    };

    const handleSave = (id) => {
        const { [id]: produtoSalvo, ...resto } = produtoEditado;
        setProdutos(produtos.map(produto => produto.id === id ? produtoSalvo : produto));
        setProdutoEditado(resto);
    };

    const handleCancel = (id) => {
        const { [id]: produtoCancelado, ...resto } = produtoEditado;
        setProdutoEditado(resto);
    };

    const handleAdd = () => {
        setProdutos([...produtos, { id: produtos.length + 1, ...novoProduto }]);
        setNovoProduto({ nome: '', preco: '', estoque: '' });
    };

    return (
        <div>
            <h2>Tabela de Produtos</h2>
            <table className="tabela-produtos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (kg)</th>
                        <th className="centralizado">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, index) => (
                        <tr key={produto.id} className={index % 2 === 0 ? 'even-row' : ''}>
                            <td>{produto.id}</td>
                            <td>{produtoEditado[produto.id] ? <input type="text" value={produtoEditado[produto.id].nome} onChange={(event) => setProdutoEditado({ ...produtoEditado, [produto.id]: { ...produtoEditado[produto.id], nome: event.target.value } })}/> : produto.nome}</td>
                            <td>{produtoEditado[produto.id] ? <input type="number" value={produtoEditado[produto.id].preco} onChange={(event) => setProdutoEditado({ ...produtoEditado, [produto.id]: { ...produtoEditado[produto.id], preco: event.target.value } })}/> : produto.preco}</td>
                            <td>{produtoEditado[produto.id] ? <input type="number" value={produtoEditado[produto.id].estoque} onChange={(event) => setProdutoEditado({ ...produtoEditado, [produto.id]: { ...produtoEditado[produto.id], estoque: event.target.value } })} /> : produto.estoque}</td>
                            <td className="actions">
                                {produtoEditado[produto.id] ? (
                                    <>
                                        <button onClick={() => handleSave(produto.id)}>Salvar</button>
                                        <button onClick={() => handleCancel(produto.id)}>Cancelar</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(produto)}>Editar</button>
                                        <button onClick={() => handleDelete(produto.id)}>Excluir</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>{produtos.length + 1}</td>
                        <td><input type="text" value={novoProduto.nome} onChange={(event) => setNovoProduto({ ...novoProduto, nome: event.target.value })} /></td>
                        <td><input type="number" value={novoProduto.preco} onChange={(event) => setNovoProduto({ ...novoProduto, preco: event.target.value })} /></td>
                        <td><input type="number" value={novoProduto.estoque} onChange={(event) => setNovoProduto({ ...novoProduto, estoque: event.target.value })} /></td>
                        <td className="actions">
                            <button onClick={handleAdd}>Salvar</button>
                            <button onClick={() => setNovoProduto({ nome: '', preco: '', estoque: '' })}>Cancelar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TabelaProdutos;
