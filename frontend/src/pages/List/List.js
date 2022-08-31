import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import Searchbar from '../../components/SearchBar/Searchbar';
import Table from '../../components/Table/Table';
import { tableData } from '../../data/table';

function List() {

  const [ data, setData ] = useState(tableData)
  return (
    <>
      <Header />
        <section className='container'>
        < Title />          
        </section>   
        <Searchbar  list={data} setList={setData}/>
          <Table />   
    </>
  )
}

export default List