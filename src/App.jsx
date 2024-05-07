import React, { useState } from 'react';

import TabelaProdutos from './components/TabelaProdutos'
import FormularioProdutos from './components/FormularioProdutos';


function App() {
 

    const [produtos, setProdutos] = useState([
        { id: 1, nome: 'Maçã muito bonita', preco: 'R$ 79,80', estoque: 12 },
        { id: 2, nome: 'Banana', preco: 'R$ 2,30', estoque: 37 },
        // ... outros produtos ...
    ]);

  return (
<>
  <TabelaProdutos idProdutos={idProdutos} produtos={produtos} setProdutos={setProdutos}/>
    </>
  )
}

export default App
