import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate('/admin/product');
    };

    const handleOrderClick = () => {
        navigate('/admin/order');
    };

    return (
        <div style={{ minHeight: '100vh', background: 'rgb(255, 26, 79)', padding: '2rem'}}>
            <div style={{ textAlign: 'center', marginBottom: '3rem', color: 'white'}}>
                <h1 style={{ fontSize: '2.5rem',marginBottom: '0.5rem', fontWeight: '700', margin: '0 0 0.5rem 0'}}>
                    Snapdeal Admin Portal
                </h1>
                <p style={{ fontSize: '1.1rem', opacity: '0.9', margin: '0'}}>
                    Manage your store
                </p>
            </div>
            
            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',minHeight: '60vh'}}>
                
                <div style={{display: 'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',gap: '2rem',maxWidth: '800px',width: '100%'}}>
                    
                    <button style={{background: 'white',border: 'none',borderRadius: '12px',padding: '2rem',cursor: 'pointer',transition: 'all 0.3s ease',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',display: 'flex',alignItems: 'center',gap: '1.5rem',textAlign: 'left'}}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                        }}
                        onClick={handleProductClick}
                    >
                        <div style={{flexShrink: '0',width: '60px',height: '60px',borderRadius: '50%',display: 'flex',alignItems: 'center',justifyContent: 'center',color: 'white',background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                <line x1="3" y1="6" x2="21" y2="6"/>
                                <path d="M16 10a4 4 0 0 1-8 0"/>
                            </svg>
                        </div>
                        <div>
                            <h3 style={{margin: '0 0 0.5rem 0',fontSize: '1.5rem',fontWeight: '600',color: '#333'}}>
                                Products
                            </h3>
                            <p style={{margin: '0',color: '#666',fontSize: '0.95rem'}}>
                                Manage your product inventory
                            </p>
                        </div>
                    </button>

                    <button style={{background: 'white',border: 'none',borderRadius: '12px',padding: '2rem',cursor: 'pointer',transition: 'all 0.3s ease',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',display: 'flex',alignItems: 'center',gap: '1.5rem',textAlign: 'left'}}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                        }}
                        onClick={handleOrderClick}
                    >
                        <div style={{flexShrink: '0',width: '60px',height: '60px',borderRadius: '50%',display: 'flex',alignItems: 'center',justifyContent: 'center',color: 'white',background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                                <path d="M12 11h4"/>
                                <path d="M12 16h4"/>
                                <path d="M8 11h.01"/>
                                <path d="M8 16h.01"/>
                            </svg>
                        </div>
                        <div>
                            <h3 style={{margin: '0 0 0.5rem 0',fontSize: '1.5rem',fontWeight: '600',color: '#333'}}>
                                Orders
                            </h3>
                            <p style={{margin: '0',color: '#666',fontSize: '0.95rem'}}>
                                View and manage customer orders
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;