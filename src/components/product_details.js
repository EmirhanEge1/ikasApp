
import  React ,{useEffect,useState} from "react";
import Image from "next/image";
import id from "../data.json"

console.log("iddd",id)
   
 /*
const [filterData,setFilterData]= useState();

useEffect(async()=>{
if(data){
    const filter=data.filter(item=>item.id==id);
    setFilterData(filter);
    console.log("iddd",filter);
}
})
*/



/*
const Product_details = ({ title ,brand,image, price,alt, stockCode, categories ,description}) => {
    console.log(image) 
    return(
  
        <div >
        <div>
           <span class="image Image-magnifier-container">
             {/* <Image src={image} alt={alt} width={600} height={600} /> }
            <div class="boxslide">
                <div class="boxes">
                    <div class="box">
                        <div class="track">
                            <div style={{width:240}}>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
       
        </span>
        </div>
        
        <div class="infobox">
        <div class="brand">
            { {brand}}
        </div>
         { <div class="head"> {title} </div> }
         
         <div class="details">
                <div>
                    <div class="heart">
                        <div class="icon"> <Image src={"https://cdn.myikas.com/images/theme-images/3f2994ce-0396-4173-8167-2b9dec09f1bc/image_180.webp"} alt={""} width={45} height={45} /></div>
                        <div class="product_ori">
                            ORJİNAL ÜRÜN
                        </div>
                    </div>
                    <div class="flex">
                       <div  class="icon">
                        <Image src={"https://cdn.myikas.com/images/theme-images/1bbf9c0c-8bbf-40da-a02f-a9d5fa4c739b/image_180.webp"} alt={""}  width={45} height={45}  />
                      </div>
                      <div class="card">
                        500TL VE ÜZERİ ALIŞVERİŞLERDE KARGO ÜCRETSİZ
                      </div>
                    </div >
                   
                    
                </div>
                <div class="price">
                    {/*price}
            </div>
        </div>
    
        <div class="addcart">
            Sepete Ekle
        </div>
        <p class="product_code">{/*stockCode}</p>
        <div class="descript">
            {/*description}            
    
        </div>
    </div>
    </div>
  
   );
};
export default Product_details;*/