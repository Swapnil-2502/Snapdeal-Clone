import { useEffect, useState } from "react";
import type { ProductData } from "../../types/types";

interface AddProductFormProps {
    onClose: () => void;
    isOpen: boolean;
    onSubmit: (formData: ProductData) => Promise<void>;
    isEdit?: boolean;
    initialData?: ProductData | null;
}

export const AddProductForm: React.FC<AddProductFormProps> = ({onClose, isOpen, onSubmit, isEdit, initialData}) => {
    const [formData, setFormData] = useState<Omit<ProductData, "_id">>(initialData || {
        title: '',
        type: '',
        category: '',
        subcategory: '',
        price: 0,
        mrp: 0,
        stars: '',
        avgRating: '',
        totalRatings: '',
        totalReviews: '',
        images: [],
        sizes: [],
        highlights: [],
        otherSpecifications: {
            countryOfOrigin: '',
            genericName: '',
            manufacturerAddress: '',
            packerAddress: '',
            marketerAddress: '',
            importerAddress: '',
        },
        description: '',
        termsAndConditions: '',
        quickLinks: {
            productType: '',
            brand: '',
        },
        sellerDetails: {
            manufacturer: '',
            stars: '',
            totalReviews: '',
        }
    })

    useEffect(() => {
      if(initialData){
          setFormData(initialData)
      }
    },[initialData])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayInputChange = (field: string, index: number, value: string) => {
        setFormData(prev => ({
        ...prev,
        [field]: prev[field].map((item: string, i: number) => i === index ? value : item)
        }));
    };

    const addArrayField = (field: string) => {
        setFormData(prev => ({
        ...prev,
        [field]: [...prev[field], '']
        }));
    };

    const handleNestedInputChange = (section: string, field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
            ...prev[section],
            [field]: value
            }
        }));
    }

    const removeArrayField = (field: string, index: number) => {
        setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_: string, i: number) => i !== index)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };
    
    if(!isOpen) return null 

  return (
    <div style={{position: 'fixed',top: 0,left: 0,right: 0,bottom: 0,backgroundColor: 'rgba(0, 0, 0, 0.5)',display: 'flex',justifyContent: 'center',alignItems: 'center',zIndex: 1000}}>
      <div style={{backgroundColor: 'white',padding: '2rem',borderRadius: '10px', width: '90%',maxWidth: '600px',maxHeight: '80vh',overflowY: 'auto'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0 }}>Add New Product</h2>
          <button onClick={onClose}style={{background: 'none',border: 'none',fontSize: '1.5rem',cursor: 'pointer',color: '#666'}}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Title *</label>
            <input type="text"name="title"value={formData.title}onChange={handleInputChange} required style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Type *</label>
            <input type="text" name="type" value={formData.type} onChange={handleInputChange} required style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Category</label>
            <input type="text" name="category" value={formData.category} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Subcategory</label>
            <input type="text" name="subcategory" value={formData.subcategory} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
          </div>

          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Price *</label>
              <input type="number" name="price" value={formData.price} onChange={handleInputChange} required style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>MRP *</label>
              <input type="number" name="mrp" value={formData.mrp} onChange={handleInputChange} required style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem' }}>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Stars</label>
                <input type="text" name="stars" value={formData.stars || ''} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>AvgRating</label>
                <input type="text" name="avgRating" value={formData.avgRating || ''} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>TotalRatings</label>
                <input type="text" name="totalRatings" value={formData.totalRatings || ''} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>TotalReviews</label>
                <input type="text" name="totalReviews" value={formData.totalReviews || ''} onChange={handleInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
            </div>
          </div>  

          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Image URL</label>
            {formData.images.map((image, index) => (
              <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input type="text" value={image} onChange={(e) => handleArrayInputChange('images', index, e.target.value)} placeholder="Enter image URL" style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
                <button type="button" onClick={() => removeArrayField('images', index)} style={{ padding: '0.5rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px' }}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayField('images')} style={{ marginTop: '0.5rem', padding: '0.5rem', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px' }}>
              Add Another Image
            </button>
          </div>

          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Sizes</label>
            {formData.sizes.map((size, index) => (
              <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input type="text" value={size} onChange={(e) => handleArrayInputChange('sizes', index, e.target.value)} placeholder="Enter size (e.g., S, M, L) or (e.g., 38, 39, 40, 42)" style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
                <button type="button" onClick={() => removeArrayField('sizes', index)} style={{ padding: '0.5rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px' }}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayField('sizes')} style={{ marginTop: '0.5rem', padding: '0.5rem', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px' }}>
              Add Another Size
            </button>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Highlights</label>
            {formData.highlights?.map((highlight, index) => (
              <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input type="text" value={highlight} onChange={(e) => handleArrayInputChange('highlights', index, e.target.value)} placeholder="Enter heighlights" style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
                <button type="button" onClick={() => removeArrayField('highlights', index)} style={{ padding: '0.5rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px' }}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayField('highlights')} style={{ marginTop: '0.5rem', padding: '0.5rem', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px' }}>
              Add Highlights
            </button>
          </div>

          <div>
            <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Other Specifications</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Country of Origin</label>
                    <input type="text" value={formData.otherSpecifications?.countryOfOrigin}
                        onChange={(e) => handleNestedInputChange('otherSpecifications', 'countryOfOrigin', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>genericName</label>
                    <input type="text" value={formData.otherSpecifications?.genericName}
                        onChange={(e) => handleNestedInputChange('otherSpecifications', 'genericName', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>manufacturerAddress</label>
                    <input type="text" value={formData.otherSpecifications?.manufacturerAddress}
                        onChange={(e) => handleNestedInputChange('otherSpecifications', 'manufacturerAddress', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>packerAddress</label>
                    <input type="text" value={formData.otherSpecifications?.packerAddress}
                        onChange={(e) => handleNestedInputChange('otherSpecifications', 'packerAddress', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>marketerAddress</label>
                    <input type="text" value={formData.otherSpecifications?.marketerAddress}
                        onChange={(e) => handleNestedInputChange('otherSpecifications', 'marketerAddress', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>importerAddress</label>
                    <input type="text" value={formData.otherSpecifications?.importerAddress}
                        onChange={(e) => handleNestedInputChange('otherSpecifications', 'importerAddress', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
            </div>
          </div>

         
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Description</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} rows={3} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Terms & Conditions</label>
            <textarea name="termsAndConditions" value={formData.termsAndConditions || ''} onChange={handleInputChange} rows={3} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}/>
          </div>

          <div>
            <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Quick Links</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>productType</label>
                    <input type="text" value={formData.quickLinks.productType}
                        onChange={(e) => handleNestedInputChange('quickLinks', 'productType', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>brand</label>
                    <input type="text" value={formData.quickLinks.brand}
                        onChange={(e) => handleNestedInputChange('quickLinks', 'brand', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>

            </div>

          </div>

          <div>
            <h2 style={{ marginBottom: '1rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Quick Links</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>manufacturer</label>
                    <input type="text" value={formData.sellerDetails?.manufacturer}
                        onChange={(e) => handleNestedInputChange('sellerDetails', 'manufacturer', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>stars</label>
                    <input type="text" value={formData.sellerDetails?.stars}
                        onChange={(e) => handleNestedInputChange('sellerDetails', 'stars', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>totalReviews</label>
                    <input type="text" value={formData.sellerDetails?.totalReviews}
                        onChange={(e) => handleNestedInputChange('sellerDetails', 'totalReviews', e.target.value)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button type="button" onClick={onClose} style={{ padding: '0.75rem 1.5rem', background: '#95a5a6', color: 'white', border: 'none', borderRadius: '4px' }}>
              Cancel
            </button>
            <button type="submit" style={{ padding: '0.75rem 1.5rem', background: isEdit ? '#f39c12' : '#27ae60', color: 'white', border: 'none', borderRadius: '4px' }}>
              {isEdit ? "Edit Product" : "Add Product"}  
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
