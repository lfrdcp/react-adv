import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppinggPage = () => {
    return (
        <div>
            <h1>ShoppinggPage</h1>
            <hr />
            <ProductCard product={product} >
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={product} >
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
        </div>
    )
}
