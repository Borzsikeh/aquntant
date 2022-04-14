import React, { useEffect, useState } from 'react'
import {style} from '../../const/style'
import NewPartner from '../sub/New-partner'

const Partners = () => {
  const token = 'Bearer: '+sessionStorage.token
    const url3 = 'http://localhost:4000/choices/partner'

    const [partners, setPartners] = useState({
        partner: ""
    })

    useEffect(() => {
        partners_list();
      }, []);

    function partners_list() {
        //e.preventDefault()
        fetch(url3, {
          method: 'POST',
          headers: {
            'Authorization': token,
            'Content-type': 'application/json;charset=utf-8'
          } 
        })
        .then((response) => response.json())
        .then(json => setPartners(json))
        .catch(err => console.log(err))
      }
  return (
    <div className='d-flex flex-column align-items-center' style={style.content}>
      <NewPartner updateList={partners_list} />
      <table className='table table-striped table-hover m-2 w-75'>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        {partners && partners.length>0 && partners.map(
            (item)=>
            <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default Partners