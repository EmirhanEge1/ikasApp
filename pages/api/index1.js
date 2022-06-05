import Head from 'next/head'
import Image from 'next/image'
import data from '../src/data.json'
import Product_details from '../src/components/product_details';
export default function Home() {
  
  
        {}
    

    console.log(data) ;
   /* 
    return (    
        
    <>

     
        <div class="type">
            <div class="type1">
            {data.map((item)=><Product_details categories={item.categories}/>)}
        
            </div>
        </div>
        <div class="block">
                {data.map((item) => <Product_details title={item.name} brand={item.brand} image={item.images} price={item.price} alt={item.description} stockCode={item.stockCode} categories={item.categories} description={item.description} />)}
            </div>
            
    </>
    
    )*/
}
