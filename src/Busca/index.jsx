export const Busca = ({busca,buscaODA}) =>{
    return(
        <div >
            <input className="busca"
            name='busca'
            type='text'
            value={busca}
            placeholder="O que deseja pesquisar"
            onChange={buscaODA}
            />
            </div>
    )
}