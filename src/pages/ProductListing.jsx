import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import Filter from '../components/Filter'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProductListing = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
    useEffect(()=>{
        fetchAllProducts();
    }, [])
    useEffect(()=>{
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    const fetchAllProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setAllProducts(data);
        } catch (err) {
            setError(err.message);
        }
    }
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
    }
  return (
    <div className='flex flex-col gap-8'>
        <Header />
        <div className='flex gap-5 min-h-[70vh] sm:min-h-[60vh]'>
            {error && <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 text-xl'>{error}</p>}
            {
                !error && allProducts?.length === 0 ? (
                    <img src='loading.gif' alt="Loading..." className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                ) : (
                    !error && <>
                        <Filter />
                        <div className='flex flex-col sm:absolute sm:top-[calc(20vh+208px)]'>
                            <div className='flex flex-wrap gap-1 justify-evenly sm:mt-8'>
                                {allProducts?.map(product => <ProductCard key={product.id} data={product} /> )}
                            </div>
                            {isSmallScreen && <Footer />}
                        </div>
                    </>
                )
            }
        </div>
        {!isSmallScreen && <Footer />}
        {isSmallScreen && error && <Footer />}
    </div>
  )
}

export default ProductListing