import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDataContext } from '../context/dataContex';
import ProductList from '../components/ProductList';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { setCategory } = useDataContext();

    useEffect(() => {
        if (categoryName) {
            // Update global state to filter by this category
            setCategory(categoryName);
        }
        
        // Cleanup: when leaving the page, reset category to 'all' if you want,
        // but leaving it as the current category might be fine for state persistence.
        return () => {
            // Optional: setCategory('all');
        }
    }, [categoryName, setCategory]);

    return (
        <div className="w-full min-h-screen bg-primaryBg transition-colors duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 py-12 md:py-16 text-center border-b border-cardBorder">
                <h1 className="text-4xl md:text-5xl font-extrabold capitalize text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 drop-shadow-sm">
                    {categoryName}
                </h1>
                <p className="text-primaryText/70 mt-4 text-lg font-medium max-w-2xl mx-auto">
                    Explore our curated collection of premium {categoryName} products.
                </p>
            </div>
            
            <div className="mt-8">
                <ProductList />
            </div>
        </div>
    );
};

export default CategoryPage;
