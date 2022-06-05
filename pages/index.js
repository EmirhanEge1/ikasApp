import Head from 'next/head'
import Image from 'next/image'
import data from '../src/data.json'
import Product from '../src/components/product';


export default function Home() {
 console.log(data);
  return (
    <div>
    <div className="head" key={data.id}> Yeni Ürünler
        <div className="container ">
            <div className="navbar"> 
               {data.map((item) => <Product key={Product.key} imageA={item.images[1]} title={item.name} brand={item.brand} image={item.images[0]} price={item.price} alt={item.description} salePrice={item.salePrice}/>  )} 
           
            </div>

        </div>
    </div>
</div>
   



  )
}


