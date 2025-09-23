import  { useState, useEffect } from 'react';
import type { ProductData } from '../../types/types';
import axios from '../../api/axios';
import { AddProductForm } from '../components/AddProductForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useProductFilters } from '../../contexts/ProductFilterContext';

export const AdminProduct = () => {
    const [products, setProducts] = useState<ProductData[] | null>(null);
    const [openForm, setOpenForm] = useState(false)
    const [editingProduct, setEditingProduct] = useState<ProductData | null>(null)
    const [isEdit, setIsEdit] = useState(false)
    const [triggerRefresh, setTriggerRefresh] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const {logout} = useAuth()
    const navigate = useNavigate();

    const {filters, setFilters} = useProductFilters()

    const token = localStorage.getItem("Token")
    const headers = {
        Authorization: `Bearer ${token}`,
    }
  
    useEffect(() => {
        const fetchProducts = async() => {
          let res
          try{
            if(searchQuery && searchQuery.trim() !== ""){
              const encoded = encodeURIComponent(searchQuery)
              res = await axios.get(`/product/search?q=${encoded}`,{params: filters})
              setProducts((res.data.products))
            }
            else{
              res = await axios.get("/product",{params: filters})
              setProducts((res.data.products).reverse())
            }

          }
          catch(error){
            console.error("Error fetching products:", error);
          }
          
        }
        
        fetchProducts()
    }, [triggerRefresh,searchQuery,filters]);

    const onClose = () => {
        setOpenForm(false)
        setEditingProduct(null);
        setIsEdit(false);
    }

    const handleFormSubmit = async (formData: Omit<ProductData, "_id">) => {
        if(isEdit && editingProduct){
            await axios.patch(`/product/${editingProduct._id}`,formData,{headers})
        }
        else{
          await axios.post("/product",formData,{headers})
        }
        setTriggerRefresh((prev) =>  prev+1)
        onClose()
    }

    const handleEdit = (product: ProductData) => {
        setEditingProduct(product)
        setIsEdit(true)
        setOpenForm(true);
    };

    const handleDelete = async (productId: string) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
          try {
              await axios.delete(`/product/${productId}`, {headers});
              setTriggerRefresh((prev) => prev + 1);
          } catch (error) {
              console.error('Error deleting product:', error);
              alert('Failed to delete product');
          }
        }
    };

    const handleProductDetails = (productId: string) => {
      navigate(`/admin/productdetail/${productId}`)
    }

    const handleLogout = () => {
      logout()
      navigate('/')
    }

    const handleBackToAdmin = () => {
      navigate('/admin')
    }

  return (
    <div style={{minHeight: '100vh',background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',padding: '2rem'}}>
      
      <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',marginBottom: '2rem'}}>
        <button onClick={handleBackToAdmin} style={{background: 'rgba(255, 255, 255, 0.2)',color: 'white',border: '2px solid rgba(255, 255, 255, 0.3)',padding: '10px 20px', borderRadius: '8px', fontSize: '1rem', fontWeight: '600',cursor: 'pointer',transition: 'all 0.3s ease',display: 'flex',alignItems: 'center',gap: '8px'}}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Admin
        </button>

        <button onClick={handleLogout} style={{background: '#e74c3c',color: 'white',border: 'none',padding: '10px 20px',borderRadius: '8px',fontSize: '1rem',fontWeight: '600',cursor: 'pointer',transition: 'all 0.3s ease',display: 'flex',alignItems: 'center',gap: '8px'}}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#c0392b';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#e74c3c';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
          </svg>
          Logout
        </button>
      </div>

     
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h1 style={{color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem',fontWeight: '700',margin: '0 0 0.5rem 0'}}>
          Product Management
        </h1>
        <p style={{color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem',margin: '0'}}>
          Manage your product inventory
        </p>
      </div>
      
      
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3rem'}}>
        <button style={{background: 'white',color: '#667eea',border: 'none',padding: '15px 30px',borderRadius: '12px',fontSize: '1.1rem',fontWeight: '600',cursor: 'pointer',transition: 'all 0.3s ease',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',display: 'flex',alignItems: 'center',gap: '10px'}}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          }}
          onClick={() => setOpenForm(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add New Product
        </button>
        <AddProductForm onClose={onClose} isOpen={openForm} onSubmit={handleFormSubmit} isEdit={isEdit} initialData={editingProduct} />
      </div>

      <div style={{display:'flex', justifyContent: 'center', alignContent: 'center', gap:'1rem',marginBottom: '2rem', flexWrap: 'wrap'}}>
          <div style={{display: 'flex',justifyContent: 'center',alignItems:'flex-start', gap:'2rem', marginBottom: '2rem', flexWrap:'wrap'}}>
              <div style={{ background: 'rgba(255, 255, 255, 0.95)',  borderRadius: '15px',  padding: '1.5rem',  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',  minWidth: '280px', backdropFilter: 'blur(10px)'}}>
                  <h3 style={{margin: '0 0 1.5rem 0',color: '#2c3e50',fontSize: '1.2rem',fontWeight: '600',textAlign: 'center'}}>Filters</h3>
              

                  <div style={{marginBottom: '1.5rem'}}>
                      <label style={{ display: 'block',marginBottom: '0.5rem', color: '#34495e', fontWeight: '600', fontSize: '0.9rem'}}>Price Range</label>
                      <div style={{display: 'flex',gap: '0.5rem',alignItems: 'center'}}>
                          <input type="number" placeholder='Min' value={filters.minPrice} onChange={(e) => setFilters(prev => ({...prev, minPrice: Number(e.target.value)}))} 
                            style={{ flex: 1,padding: '8px 12px',border: '2px solid #ecf0f1', borderRadius: '8px',fontSize: '0.9rem',outline: 'none',transition: 'border-color 0.3s'}}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                          />
                          <span style={{color: '#7f8c8d', fontWeight: '600'}}>to</span>
                          <input type="number" placeholder='Min' value={filters.maxPrice} onChange={(e) => setFilters(prev => ({...prev, maxPrice: Number(e.target.value)}))} 
                            style={{ flex: 1,padding: '8px 12px',border: '2px solid #ecf0f1', borderRadius: '8px',fontSize: '0.9rem',outline: 'none',transition: 'border-color 0.3s'}}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                          />
                      </div>
                  </div>

                  <div style={{marginBottom: '1.5rem'}}>
                      <label style={{ display: 'block',marginBottom: '0.5rem', color: '#34495e', fontWeight: '600', fontSize: '0.9rem'}}>Sort By</label>
                      <select  value={filters.sortby || ''} onChange={(e) => setFilters(prev => ({...prev, sortby: e.target.value}))} 
                        style={{ width: '100%', padding: '8px 12px', border: '2px solid #ecf0f1',  borderRadius: '8px', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s', background: 'white'}}
                          onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                          onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                        >
                          <option value="">Default</option>
                          <option value="priceHighLow">Price: Low to High</option>
                          <option value="priceLowHigh">Price: High to Low</option>
                          <option value="discount">Best Discount</option>

                      </select>
                  </div>

                  <div style={{marginBottom: '1.5rem'}}>
                      <label style={{ display: 'block',marginBottom: '0.5rem', color: '#34495e', fontWeight: '600', fontSize: '0.9rem'}}>Minimum Rating</label>
                      <select value={filters.minStars || ''} onChange={(e) => setFilters(prev => ({...prev, minStars: e.target.value}))} 
                        style={{ width: '100%', padding: '8px 12px', border: '2px solid #ecf0f1',  borderRadius: '8px', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s', background: 'white'}}
                          onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                          onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                        >
                          <option value="">Any Rating</option>
                          <option value="4">4+ Stars</option>
                          <option value="3">3+ Stars</option>
                          <option value="2">2+ Stars</option>
                          <option value="1">1+ Stars</option>

                      </select>
                  </div>

                  <button onClick={() => setFilters({type:"",color:"", minPrice:100, maxPrice: 10000, sortby:"", minStars:""})}
                      style={{ width: '100%',padding: '10px', background: '#e74c3c',color: 'white', border: 'none', borderRadius: '8px', fontSize: '0.9rem',fontWeight: '600',cursor: 'pointer',transition: 'all 0.3s ease'}}
                      onMouseOver={(e) => {
                          e.currentTarget.style.background = '#c0392b';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                          e.currentTarget.style.background = '#e74c3c';
                          e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Clear All Filters
                  </button>

              </div>  

          </div>

          <div style={{position: 'relative', display: 'flex', alignItems: 'center', gap:'2rem'}}>
            <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
              style={{padding:'12px 20px 12px 45px', border: 'none',  borderRadius: '25px', fontSize: '1rem', width: '300px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', outline: 'none', transition: 'all 0.3s ease', background: 'white'}}
                onFocus={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onBlur={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{position: 'absolute',left: '15px',color: '#95a5a6'}}>
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
              </svg>
              
              <div style={{marginTop: '6px',background: 'rgba(255, 255, 255, 0.2)',color: 'white',padding: '8px 16px',borderRadius: '20px',fontSize: '0.9rem',fontWeight: '600',border: '1px solid rgba(255, 255, 255, 0.3)',backdropFilter: 'blur(10px)',whiteSpace: 'nowrap'}}>
              {searchQuery ? 
                products?.length === 1 ? "1 product" :
                  `${products?.length || 0} products`
               : 
                  `${products?.length} products`
              }
          </div>
          </div>
          
      </div>
      
     
      <div style={{display: 'grid',gridTemplateColumns: 'repeat(4, 1fr )',gap: '2rem',maxWidth: '1400px',margin: '0 auto'}}>
        {products?.map((product) => (
          <div key={product._id} style={{background: 'white',borderRadius: '15px',overflow: 'hidden',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',transition: 'all 0.3s ease'}}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{position: 'relative',height: '220px', overflow: 'hidden',cursor: 'pointer'}} onClick={() => handleProductDetails(product._id)}>
              <img src={product.images[0]} alt={product.title} style={{width: '100%', height: '100%', objectFit: 'cover',padding: '20px', filter: product.stockAvailable === 0 ? 'grayscale(100%)': 'none'}}/>
              {product.stockAvailable === 0 && (
                  <div style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',backgroundColor: 'rgba(0, 0, 0, 0.7)',color: 'white',padding: '8px 16px',fontSize: '1.2rem',fontWeight: 'bold',letterSpacing: '2px',borderRadius: '4px',zIndex: 10,}}>
                    OUT OF STOCK
                  </div>
                )}
            </div>
            <div style={{padding: '1.5rem'}} onClick={() => handleProductDetails(product._id)}>
              <h3 style={{fontSize: '1.2rem', color: '#2c3e50', marginBottom: '1rem', lineHeight: '1.4', height: '3em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2,  WebkitBoxOrient: 'vertical',fontWeight: '600'}}>
                {product.title}
              </h3>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem',marginBottom: '1rem'}} onClick={() => handleProductDetails(product._id)}>
                <span style={{fontSize: '1.4rem', fontWeight: 'bold', color: '#e74c3c'}}>
                  ₹{product.price}
                </span>
                <span style={{fontSize: '1rem', color: '#95a5a6', textDecoration: 'line-through'}}>
                  ₹{product.mrp}
                </span>
              </div>
            </div>
            <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between',marginBottom: '1rem', padding: '0 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <span style={{}}>
                    Stock:
                  </span>
                  <span style={{}}>
                    {product.stockAvailable || 0}
                  </span>
                </div>
                <div style={{padding: '4px 12px', borderRadius: '12px',fontSize: '0.8rem', fontWeight: '600',textTransform: 'uppercase',letterSpacing: '0.5px', 
                    ...(product.stockAvailable === 0 ? {
                      background: '#e74c3c',
                      color: 'white'
                    }: product.stockAvailable <= 10 ? {
                      background: '#f39c12',
                      color: 'white'
                    }: {
                      background: '#27ae60',
                      color: 'white'
                    })}}>
                </div>
            </div>
            <div style={{display: 'flex', padding: '0 1.5rem 1.5rem', gap: '0.75rem'}}>
              <button style={{flex: 1, padding: '12px 16px', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', background: '#f39c12', color: 'white', transition: 'all 0.3s ease', fontSize: '0.95rem'}}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#e67e22';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f39c12';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>
              <button style={{ flex: 1, padding: '12px 16px', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', background: '#e74c3c', color: 'white', transition: 'all 0.3s ease',fontSize: '0.95rem'}}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#c0392b';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#e74c3c';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        
      </div>
      {(products?.length === 0 || searchQuery) && 
          <div style={{textAlign:'center', padding: '3rem', color: 'white'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>No products found</h3>
            <p style={{opacity: 0.8}}>Try adjusting your search terms or filters</p>
          </div>
        }
    </div>
  );
};