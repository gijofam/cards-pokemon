import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import CardPokemon from './CardPokemon';

const TestPaginate1 = ({pokemons}) => {
    console.log(pokemons)  
      /******Aqui comienza la paginacion*****/
      // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3
    let endOffset = 0
    useEffect(() => {
      // Fetch items from another resources.
    //   const endOffset = itemOffset + itemsPerPage; *******esto modifique!!!!!
       endOffset = itemOffset + itemsPerPage;
      // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(pokemons?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(pokemons?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, pokemons]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % pokemons?.length;
    //   const newOffset = (event.selected * itemsPerPage) - itemsPerPage;
      // console.log(
      //   `User requested page number ${event.selected}, which is offset ${newOffset}`
      // );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        {/* <Items currentItems={currentItems} /> */}
         <div className='container-cards'>
            {
              currentItems?.map(pokemon => (
                <CardPokemon pokemon={pokemon.url} key={pokemon.url}/>
              ))
            }
         </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          /* */
          containerClassName='container-paginate'
        //   pageClassName='paginate__item'
          pageLinkClassName='paginate__item'
          activeClassName='active-pag'
          previousLinkClassName='previous-pag'
          nextLinkClassName='next-pag'
          previousClassName='previous-container'
          nextClassName='next-container'
          breakClassName='break-pag'
          /**/
        />
      </>
    )
    /******Aqui termina la paginacion*****/


}

 // const [users, setUsers] = useState()
    
    // useEffect(() => {
      //   const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
      //   axios.get(url)
      //     .then(res => console.log(res.data))
      //     .catch(err => console.log(err))
      // }, [])
      
export default TestPaginate1