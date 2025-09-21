import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { type ProductData } from '../../types/types';
import axios from '../../api/axios';
import { useEffect } from 'react';

export const AdminProductDetail = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductData | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`/product/${productId}`);
                setProduct(res.data.product);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh',fontSize: '1.2rem',color: '#666'}}>
                Loading product details...
            </div>
        );
    }

    if (!product) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh',flexDirection: 'column',gap: '1rem'}}>
                <h2 style={{ color: '#e74c3c' }}>Product not found</h2>
                <button onClick={() => navigate(-1)} style={{padding: '10px 20px',backgroundColor: '#3498db',color: 'white',border: 'none',borderRadius: '6px',cursor: 'pointer'}}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto',minHeight: '100vh'}}>
            
            <div style={{ marginBottom: '1.5rem' }}>
                <button onClick={() => navigate(-1)} style={{display: 'flex',alignItems: 'center',gap: '0.5rem',background: 'none',border: 'none',color: '#3498db',cursor: 'pointer',fontSize: '1rem'}}>
                    ← Back to Products
                </button>
            </div>

           
            <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr',gap: '3rem',background: 'white',borderRadius: '12px',padding: '2rem',boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}}>
               
                <div>
                    <div style={{width: '100%',height: '400px',borderRadius: '8px',overflow: 'hidden',marginBottom: '1rem'}}>
                        <img src={product.images[selectedImage]} alt={product.title}style={{ width: '100%',height: '100%',objectFit: 'contain'}}/>
                    </div>
                    
                    {product.images.length > 1 && (
                        <div style={{display: 'grid', gridTemplateColumns: `repeat(${Math.min(4, product.images.length)}, 1fr)`, gap: '0.5rem'}}>
                            {product.images.map((image, index) => (
                                <div key={index} style={{height: '80px',borderRadius: '6px',overflow: 'hidden',cursor: 'pointer', border: selectedImage === index ? '3px solid #3498db' : '1px solid #ddd',opacity: selectedImage === index ? 1 : 0.8,transition: 'all 0.2s ease'}}
                                    onClick={() => setSelectedImage(index)}>
                                    <img src={image} alt={`${product.title} ${index + 1}`}style={{width: '100%',height: '100%',objectFit: 'cover'}}/>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                
                <div>
                    <h1 style={{fontSize: '2rem',color: '#2c3e50',marginBottom: '1rem',fontWeight: '600'}}>
                        {product.title}
                    </h1>
                    <h3 style={{paddingBottom: '1rem'}}>
                        Stock Available: {product.stockAvailable}
                    </h3>
                    
                    {product.stars && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem',marginBottom: '1rem'}}>
                            <div style={{display: 'flex',alignItems: 'center',background: '#27ae60',color: 'white',padding: '4px 8px',borderRadius: '4px',fontSize: '0.9rem'}}>
                                ⭐ {product.stars}
                            </div>
                            {product.totalRatings && (
                                <span style={{ color: '#7f8c8d' }}>
                                    ({product.totalRatings} ratings)
                                </span>
                            )}
                        </div>
                    )}

                   
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#e74c3c' }}>
                                ₹{product.price}
                            </span>
                            <span style={{ fontSize: '1.2rem', color: '#95a5a6', textDecoration: 'line-through' }}>
                                ₹{product.mrp}
                            </span>
                            <span style={{ 
                                color: '#27ae60', 
                                fontWeight: '600',
                                background: '#e8f5e8',
                                padding: '2px 8px',
                                borderRadius: '4px'
                            }}>
                                {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off
                            </span>
                        </div>
                    </div>

                    {/* Category & Type */}
                    <div style={{ 
                        display: 'flex', 
                        gap: '1rem', 
                        marginBottom: '1.5rem',
                        flexWrap: 'wrap'
                    }}>
                        {product.category && (
                            <div>
                                <span style={{ fontWeight: '600', color: '#2c3e50' }}>Category: </span>
                                <span>{product.category}</span>
                            </div>
                        )}
                        {product.subcategory && (
                            <div>
                                <span style={{ fontWeight: '600', color: '#2c3e50' }}>Subcategory: </span>
                                <span>{product.subcategory}</span>
                            </div>
                        )}
                        <div>
                            <span style={{ fontWeight: '600', color: '#2c3e50' }}>Type: </span>
                            <span>{product.type}</span>
                        </div>
                    </div>

                    {/* Sizes */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>Available Sizes:</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {product.sizes.map((size, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            padding: '8px 16px',
                                            border: '2px solid #3498db',
                                            borderRadius: '6px',
                                            color: '#3498db',
                                            fontWeight: '600'
                                        }}
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Highlights */}
                    {product.highlights && product.highlights.length > 0 && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>Key Features:</h3>
                            <ul style={{ paddingLeft: '1.5rem' }}>
                                {product.highlights.map((highlight, index) => (
                                    <li key={index} style={{ marginBottom: '0.5rem', color: '#34495e' }}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    
                    {product.description && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>Description:</h3>
                            <p style={{ color: '#34495e', lineHeight: '1.6',textAlign: 'justify'}}>
                                {product.description}
                            </p>
                        </div>
                    )}

                   
                    {product.otherSpecifications && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>Specifications:</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem',background: '#f8f9fa',padding: '1rem',borderRadius: '8px'}}>
                                {product.otherSpecifications.countryOfOrigin && (
                                    <div>
                                        <strong>Country of Origin:</strong> {product.otherSpecifications.countryOfOrigin}
                                    </div>
                                )}
                                {product.otherSpecifications.genericName && (
                                    <div>
                                        <strong>Generic Name:</strong> {product.otherSpecifications.genericName}
                                    </div>
                                )}
                                {product.otherSpecifications.manufacturerAddress && (
                                    <div>
                                        <strong>Manufacturer:</strong> {product.otherSpecifications.manufacturerAddress}
                                    </div>
                                )}
                                {product.otherSpecifications.packerAddress && (
                                    <div>
                                        <strong>Packer:</strong> {product.otherSpecifications.packerAddress}
                                    </div>
                                )}
                                {product.otherSpecifications.marketerAddress && (
                                    <div>
                                        <strong>Marketer:</strong> {product.otherSpecifications.marketerAddress}
                                    </div>
                                )}
                                {product.otherSpecifications.importerAddress && (
                                    <div>
                                        <strong>Importer:</strong> {product.otherSpecifications.importerAddress}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    
                    {product.sellerDetails && (
                        <div style={{ background: '#e8f4f8', padding: '1rem', borderRadius: '8px',marginBottom: '1.5rem'
                        }}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>Seller Information:</h3>
                            {product.sellerDetails.manufacturer && (
                                <div style={{ marginBottom: '0.5rem' }}>
                                    <strong>Manufacturer:</strong> {product.sellerDetails.manufacturer}
                                </div>
                            )}
                            {product.sellerDetails.stars && (
                                <div style={{ marginBottom: '0.5rem' }}>
                                    <strong>Seller Rating:</strong> ⭐ {product.sellerDetails.stars}
                                </div>
                            )}
                            {product.sellerDetails.totalReviews && (
                                <div>
                                    <strong>Total Reviews:</strong> {product.sellerDetails.totalReviews}
                                </div>
                            )}
                        </div>
                    )}

                    
                    {product.termsAndConditions && (
                        <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '8px',border: '1px solid #ffeaa7'}}>
                            <h3 style={{ marginBottom: '0.5rem', color: '#856404' }}>Terms & Conditions:</h3>
                            <p style={{ color: '#856404', margin: 0 }}>
                                {product.termsAndConditions}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};