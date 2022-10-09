import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FormProduto from './components/FormProduto';
import ListaProdutos from './components/ListaProdutos';
function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListaProdutos/>}/>    
                <Route path='/incluir' element={<FormProduto/>}/>    
                <Route path='/editar/:id' element={<FormProduto/>}/>    
            </Routes>   
        </BrowserRouter>
    );
}

export default App;