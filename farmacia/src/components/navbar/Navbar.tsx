import { Link} from 'react-router-dom'

function Navbar() {


    let navbarComponent

   
      navbarComponent = (
        <div className='w-full bg-cyan-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/' className='text-2xl font-bold uppercase'>Calm Pharmacy</Link>

            <div className='flex gap-4'>
              <Link to='/Categorias' className='hover:underline'>Categorias</Link>
              <Link to='/FormCategorias' className='hover:underline'>Cadastrar Categoria</Link>
              <Link to='/Produtos' className='hover:underline'>Produtos</Link>
              <Link to='/FormProdutos' className='hover:underline'>Cadastrar Produto</Link>
            </div>
          </div>
        </div>
      )

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar