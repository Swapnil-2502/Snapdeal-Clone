import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from '../../api/axios';
import type { OrderType } from '../../types/types';


export const AdminOrderDetails = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const [order, setOrder] = useState<OrderType | null>(null);
    
   
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const res = await axios.get(`/order/orderbyId/${orderId}`);
                setOrder(res.data.order);
            } catch (error) {
                console.error("Error fetching order details:", error);
                alert("Failed to fetch order details");
            } 
        };
        
        if (orderId) {
            fetchOrderDetails();
        }
    }, [orderId]);

    const handleBackToOrders = () => {
        navigate('/admin/order');
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'placed': return '#3498db';
            case 'packed': return '#f39c12';
            case 'shipped': return '#9b59b6';
            case 'out for delivery': return '#e67e22';
            case 'delivered': return '#27ae60';
            case 'cancelled': return '#e74c3c';
            default: return '#95a5a6';
        }
    };

    if (!order) {
        return (
            <div style={{minHeight: '100vh',background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <div style={{color: 'white',fontSize: '1.2rem',fontWeight: '600'}}>
                    Order not found
                </div>
            </div>
        );
    }

    return (
        <div style={{minHeight: '100vh',background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',padding: '2rem'}}>
            
            <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center',marginBottom: '2rem'}}>
                <button onClick={handleBackToOrders} style={{background: 'rgba(255, 255, 255, 0.2)',color: 'white',border: '2px solid rgba(255, 255, 255, 0.3)',padding: '10px 20px',borderRadius: '8px',fontSize: '1rem',fontWeight: '600',cursor: 'pointer',transition: 'all 0.3s ease',display: 'flex',alignItems: 'center',gap: '8px'}}
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
                    Back to Orders
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

            
            <div style={{maxWidth: '1000px',margin: '0 auto'}}>
                
                <div style={{background: 'white',borderRadius: '15px',padding: '2rem',marginBottom: '2rem',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',textAlign: 'center'}}>
                    <h1 style={{margin: '0 0 0.5rem 0',color: '#2c3e50',fontSize: '2rem',fontWeight: '700'}}>
                        Order #{order._id.toUpperCase()}
                    </h1>
                    <div style={{display: 'inline-block',padding: '6px 16px',borderRadius: '20px',fontSize: '0.9rem',fontWeight: '600',textTransform: 'uppercase',letterSpacing: '0.5px',background: getStatusColor(order.status),color: 'white'
                    }}>
                        {order.status}
                    </div>
                    <p style={{margin: '1rem 0 0 0',color: '#7f8c8d',fontSize: '1rem'
                    }}>
                        Order placed on {order.createdAt ? formatDate(order.createdAt.toString()) : 'N/A'}
                    </p>
                </div>

                
                <div style={{background: 'white',borderRadius: '15px',padding: '2rem',marginBottom: '2rem',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'}}>
                    <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr 1fr',gap: '2rem',alignItems: 'center'}}>
                        
                        <div>
                            <h3 style={{margin: '0 0 1rem 0',color: '#2c3e50',fontSize: '1.2rem',fontWeight: '600'}}>
                                Customer Information
                            </h3>
                            <p style={{margin: '0 0 0.5rem 0',color: '#7f8c8d',fontSize: '1rem'}}>
                                <strong>Name:</strong> {order.address.name}
                            </p>
                            <p style={{margin: '0',color: '#7f8c8d',fontSize: '1rem'}}>
                                <strong>Phone:</strong> {order.address.mobileNumber}
                            </p>
                        </div>

                        
                        <div style={{textAlign: 'center'}}>
                            <h3 style={{margin: '0 0 1rem 0',color: '#2c3e50',fontSize: '1.2rem',fontWeight: '600'}}>
                                Payment Mode
                            </h3>
                            <div style={{display: 'inline-block',padding: '12px 24px',borderRadius: '25px',fontSize: '1.1rem',fontWeight: '600',background: '#27ae60',color: 'white'}}>
                                UPI
                            </div>
                        </div>

                        
                        <div>
                            <h3 style={{margin: '0 0 1rem 0',color: '#2c3e50',fontSize: '1.2rem',fontWeight: '600'}}>
                                Bill Summary
                            </h3>
                            <div style={{background: '#f8f9fa',padding: '1rem',borderRadius: '10px',border: '1px solid #ecf0f1'}}>
                                <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '0.5rem'}}>
                                    <span style={{color: '#7f8c8d'}}>Total:</span>
                                    <span style={{fontWeight: '600'}}>₹{order.totalAmount}</span>
                                </div>
                                <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '0.5rem'}}>
                                    <span style={{color: '#7f8c8d'}}>Delivery Charges:</span>
                                    <span style={{color: '#27ae60', fontWeight: '600'}}>FREE</span>
                                </div>
                                <hr style={{border: 'none',borderTop: '1px solid #ecf0f1',margin: '0.5rem 0'}} />
                                <div style={{display: 'flex',justifyContent: 'space-between',fontSize: '1.5rem',fontWeight: '700',color: '#2c3e50'}}>
                                    <span>Payable Amount:</span>
                                    <span>₹{order.totalAmount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div style={{background: 'white',borderRadius: '15px',padding: '2rem',marginBottom: '2rem',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'}}>
                    <h3 style={{margin: '0 0 1.5rem 0',color: '#2c3e50',fontSize: '1.3rem',fontWeight: '600'}}>
                        Order Items ({order.items.length})
                    </h3>
                    
                    {order.items.map((item, index) => (
                        <div key={index} style={{display: 'flex',alignItems: 'center',gap: '1.5rem',padding: '1rem 0',borderBottom: index < order.items.length - 1 ? '1px solid #ecf0f1' : 'none'
                        }}>
                           
                            <div style={{width: '80px',height: '80px',borderRadius: '10px',overflow: 'hidden',border: '2px solid #ecf0f1',flexShrink: 0}}>
                                <img src={item.imageURL} alt={item.title} style={{width: '100%',height: '100%',objectFit: 'cover'}}/>
                            </div>

                           
                            <div style={{flex: 1}}>
                                <h4 style={{margin: '0 0 0.5rem 0',color: '#2c3e50',fontSize: '1.1rem',fontWeight: '600',lineHeight: '1.4'}}>
                                    {item.title}
                                </h4>
                                {item.size && (
                                    <span style={{margin: '0 0 0.5rem 0',color: '#7f8c8d',fontSize: '0.9rem'}}>Size: {item.size}</span>
                                )}
                                { item.color && (
                                    <>
                                        <span style={{margin: '0 0.5rem 0.5rem 0.5rem',color: '#7f8c8d',fontSize: '0.9rem'}}> | </span>
                                        <span style={{margin: '0 0 0.5rem 0',color: '#7f8c8d',fontSize: '0.9rem'}}>Color: {item.color[0]}</span>
                                    </>
                                )

                                }
                                <div style={{display: 'flex',gap: '2rem',alignItems: 'center'}}>
                                    <span style={{color: '#7f8c8d',fontSize: '0.9rem'}}>
                                        Quantity: <strong>{item.quantity}</strong>
                                    </span>
                                    <span style={{color: '#7f8c8d',fontSize: '0.9rem'}}>
                                        Unit Price: <strong>₹{item.price}</strong>
                                    </span>
                                </div>
                            </div>

                            
                            <div style={{textAlign: 'right',minWidth: '120px'}}>
                                <div style={{fontSize: '1.4rem',fontWeight: '700',color: '#2c3e50'}}>
                                    ₹{item.price * item.quantity}
                                </div>
                                <div style={{fontSize: '0.85rem',color: '#7f8c8d'
                                }}>
                                    ₹{item.price} × {item.quantity}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div style={{background: 'white',borderRadius: '15px',padding: '2rem',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'}}>
                    <h3 style={{margin: '0 0 1.5rem 0',color: '#2c3e50',fontSize: '1.3rem',fontWeight: '600'}}>
                        Delivery Address
                    </h3>
                    
                    <div style={{background: '#f8f9fa',padding: '1.5rem',borderRadius: '10px',border: '1px solid #ecf0f1'}}>
                        <h4 style={{margin: '0 0 1rem 0',color: '#2c3e50',fontSize: '1.1rem',fontWeight: '600'}}>
                            {order.address.name}
                        </h4>
                        <p style={{margin: '0 0 0.5rem 0',color: '#7f8c8d',fontSize: '1rem',lineHeight: '1.5'}}>
                            {order.address.address}
                        </p>
                        <p style={{margin: '0 0 0.5rem 0',color: '#7f8c8d',fontSize: '1rem'}}>
                            {order.address.city}, {order.address.state} - {order.address.pincode}
                        </p>
                        <p style={{margin: '0',color: '#7f8c8d',fontSize: '1rem'}}>
                            <strong>Phone:</strong> {order.address.mobileNumber}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};