import  { useState, useEffect } from 'react';
import type { ProductData } from '../../types/types';
import axios from '../../api/axios';
import { AddProductForm } from '../components/AddProductForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


export const AdminHome = () => {
    const [products, setProducts] = useState<ProductData[] | null>(null);
    const [openForm, setOpenForm] = useState(false)
    const [editingProduct, setEditingProduct] = useState<ProductData | null>(null)
    const [isEdit, setIsEdit] = useState(false)
    const [triggerRefresh, setTriggerRefresh] = useState(0)
    const {logout} = useAuth()
    const navigate = useNavigate();

    const token = localStorage.getItem("Token")
    const headers = {
        Authorization: `Bearer ${token}`,
    }
  
    useEffect(() => {
        const fetchProducts = async() => {
            const res = await axios.get("/product")
            setProducts((res.data.products).reverse())
        }
        
        fetchProducts()
    }, [triggerRefresh]);

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
      navigate(`/admin/product/${productId}`)
    }

    const handleLogout = () => {
      logout()
      navigate('/')
    }

  return (
    <div style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
      <div style={{display:'flex',justifyContent: 'flex-end',}}>
        <button onClick={handleLogout} style={{background: '#e74c3c',color: 'white',border: 'none',padding: '10px 20px',borderRadius: '6px',fontSize: '1rem',fontWeight: '600',cursor: 'pointer',transition: 'background 0.3s',whiteSpace: 'nowrap'}}
          onMouseOver={(e) => e.currentTarget.style.background = '#c0392b'}
          onMouseOut={(e) => e.currentTarget.style.background = '#e74c3c'}
        >
          Logout
        </button>
      </div>

      <div style={{textAlign: 'center', marginBottom: '2rem'}}>
        <h1 style={{color: '#2c3e50', fontSize: '2.5rem', marginBottom: '0.5rem'}}>Admin Product Management </h1>
        <p style={{color: '#7f8c8d', fontSize: '1.1rem'}}>Manage your product inventory</p>
      </div>
      
      
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
        <button style={{background: '#3498db', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer',transition: 'background 0.3s'}}
          onMouseOver={(e) => e.currentTarget.style.background = '#2980b9'}
          onMouseOut={(e) => e.currentTarget.style.background = '#3498db'}
          onClick={() => setOpenForm(true)}
        >
          + Add New Product
        </button>
        <AddProductForm onClose={onClose} isOpen={openForm}  onSubmit={handleFormSubmit} isEdit={isEdit} initialData={editingProduct} />
      </div>
      
      <div style={{display: 'grid',gridTemplateColumns: 'repeat(4, 1fr)',gap: '1.5rem'}}>
        {products?.map((product) => (
          <div key={product._id} style={{background: 'white',borderRadius: '10px',overflow: 'hidden',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',transition: 'transform 0.3s, box-shadow 0.3s'}}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          }}
          onClick={() => handleProductDetails(product._id)}
          >
            <div style={{height: '200px', overflow: 'hidden'}}>
              <img src={product.images[0]} alt={product.title} style={{width: '100%', height: '100%', objectFit: 'cover', padding:'20px'}}/>
            </div>
            <div style={{padding: '1rem'}}>
              <h3 style={{fontSize: '1.1rem', color: '#2c3e50', marginBottom: '0.75rem', lineHeight: '1.4', height: '3em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2,  WebkitBoxOrient: 'vertical'}}>
                {product.title}
              </h3>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                <span style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#e74c3c'}}>₹{product.price}</span>
                <span style={{fontSize: '0.9rem', color: '#95a5a6', textDecoration: 'line-through'}}>₹{product.mrp}</span>
              </div>
            </div>
            <div style={{display: 'flex', padding: '0 1rem 1rem', gap: '0.5rem'}}>
              <button style={{flex: 1,padding: '8px 12px',border: 'none',borderRadius: '4px',fontWeight: '600',cursor: 'pointer',background: '#f39c12',color: 'white',transition: 'background 0.2s'}}
                onMouseOver={(e) => e.currentTarget.style.background = '#e67e22'}
                onMouseOut={(e) => e.currentTarget.style.background = '#f39c12'}
                onClick={() => handleEdit(product)}>
                Edit
              </button>
              <button style={{flex: 1,padding: '8px 12px',border: 'none',borderRadius: '4px',fontWeight: '600',cursor: 'pointer',background: '#e74c3c',color: 'white',transition: 'background 0.2s'}}
                onMouseOver={(e) => e.currentTarget.style.background = '#c0392b'}
                onMouseOut={(e) => e.currentTarget.style.background = '#e74c3c'}
                onClick={() => handleDelete(product._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

