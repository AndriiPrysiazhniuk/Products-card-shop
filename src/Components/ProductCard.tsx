type PropsType = {
    title: string
    description: string
    unitPrice: number
    img: string
}
export const ProductCard = ({title, description, unitPrice, img}: PropsType) => {

    return (
        <div>
<h1>{title}</h1>
        <p>{description}</p>
            <img src={img} alt="image of notebooks"/>
            {unitPrice}
        </div>


    );
};

export default ProductCard;