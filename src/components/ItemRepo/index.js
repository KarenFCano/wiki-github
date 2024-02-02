import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.fullname}</p>
      <a href={repo.html_url} target='blank'>Ver repositório</a> 
      <br/>
      <a href='' className='remover' onClick={handleRemove}>Remover</a> <br/>
      <hr />
    </ItemContainer>

  )
}
