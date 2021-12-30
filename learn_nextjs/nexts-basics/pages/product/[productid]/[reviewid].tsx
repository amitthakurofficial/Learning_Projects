import { useRouter } from "next/router";

const Review = () => {
    const router = useRouter();
    const productId = router.query.productid;
    
    return (
        <h1>Reveiew For Product</h1>
    )
}

export default Review;