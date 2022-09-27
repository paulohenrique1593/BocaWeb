export const Lista = ({odas})=>{
    return(
        <div>
        <p className="odas"> {odas.length} ODAS encontradas </p>
        
        <div className="lista">
          {odas.map(oda => (
          <div key={oda._id}>
            <h1 className="nome_lista">Nome: {oda.nome}</h1>
            <p className="usuario_lista">Usuario: {oda.usuario}</p>
            <p className="desc_lista">Descrição: {oda.descricao}</p>
          </div>
        
        ))}
    </div>
    </div>
    )
}