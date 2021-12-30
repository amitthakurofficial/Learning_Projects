import { useRouter } from "next/router";

function ProductDetails() {
    const router = useRouter();
    const productId = router.query.productid;
    return <div>Product Details Page{productId}</div>
  }
  
  export default ProductDetails