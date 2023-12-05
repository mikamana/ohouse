import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function AdminCateList({list,startindex,endindex}) {

  /* const fnSortFirstBtn = (e) => {
    axios.get('http://127.0.0.1:8000/admin/asc')
      .then((result) => {
        setList(result.data)
      })
      .catch(console.err);
  } */

  const handleChange = (e) => {

    const {name, value} = e.target;
    console.log({name, value});
    //setForm({...form, [name] : value});
    //setSortCheckFlag(e.target.value);
    console.log(value);
    axios.get(`http://127.0.0.1:8000/admin/sort/${startindex}/${endindex}/${value}`)
    .then((result)=>{

      // console.log(result.data);
      // setList(result.data);
      list(result.data)
      // setTotalPage(result.data[0].total)

    })

    
  };

  return (
    <>

    </>
  );
}

