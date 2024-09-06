import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import CardProdutos from "../cardprodutos/CardProdutos";
import Produto from "../../../models/Produto";
import { toastAlerta } from "../../../utils/ToastAlerta";

function ListaProdutos() {
   const [produtos, setProdutos] = useState<Produto[]>([]);

   async function buscarProdutos() {
      try {
         await buscar('/produtos', setProdutos);
      } catch (error: any) {
         toastAlerta('Erro ao buscar produtos!', "Erro")
      }
   }

   useEffect(() => {
      buscarProdutos();
   }, [produtos.length]);

   return (
      <>
         <div className="bg-cyan-600 min-h-[80vh]">
            {produtos.length === 0 && (
               <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className='container mx-auto py-4 grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4'>
               {produtos.map((produto) => (
                  <CardProdutos key={produto.id} produto={produto} />
               ))}
            </div>
         </div>
      </>
   );
}

export default ListaProdutos;