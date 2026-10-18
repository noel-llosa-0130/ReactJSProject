import products from "../data/products.json"
import ProductCard from "../components/ProductCard.jsx"

function Products() {
  return (
    <main className="products-page">
      <section className="products-header">
        <span className="products-eyebrow">OUR COLLECTION</span>
        <h1>Discover Our Products</h1>
        <p>Find the perfect products for your everyday needs.</p>
      </section>

      <section className="products-section">
        <div className="products-toolbar">
          <h2>All Products</h2>
          <span>{products.length} products available</span>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Products