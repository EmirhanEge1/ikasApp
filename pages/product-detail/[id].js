
import { useRouter } from 'next/router';
/*import Product_details from "../../src/components/product_details" ;*/
export default function Home() {

    const router = useRouter();
    const {id} = router?.query
;  return (
    <div>
  
            <Product_details id={id} />
            </div>
 



  )
}


