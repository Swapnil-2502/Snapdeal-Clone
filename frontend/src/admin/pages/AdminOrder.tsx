import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from '../../api/axios';
import {type OrderStatus, type OrderType } from '../../types/types';


export const AdminOrder = () => {
    const {logout} = useAuth()
    const [orders, setOrders] = useState<OrderType[]>([])
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        dateFrom: '',
        dateTo: '',
        status: ''
    })

    useEffect(() => {
        const fetchOrders = async () => {
            const encoded = encodeURIComponent(searchTerm)
            const ResOrders = await axios.get(`/order/allorders?search=${encoded}`,{params: filters})
            setOrders(ResOrders.data.orders)
        }
        fetchOrders()
    },[filters,searchTerm])


    const navigate = useNavigate()

    const handleLogout = () => {
      logout()
      navigate('/')
    }

    const handleBackToAdmin = () => {
      navigate('/admin')
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
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

    const handleOrderDetails = (orderId: string) => {
        navigate(`/admin/orderdetail/${orderId}`)
    }

    const handleStatusChange = async (orderId: string, newStatus: string) => {
        
        const confirmed = window.confirm(
            `Are you sure you want to change this order's status to "${newStatus}"?`
        );

        if(!confirmed) {
            const selectElement = document.querySelector(`select[data-order-id="${orderId}"]`) as HTMLSelectElement;
            if (selectElement) {
                const currentOrder = orders.find(order => order._id === orderId);
                if (currentOrder) {
                    selectElement.value = currentOrder.status;
                }
            }
            return;
        }

        try{
            const response = await axios.patch(`/order/${orderId}`,{ status: newStatus })

            if(response.status === 200){
                setOrders(prev => prev.map(order => 
                    order._id === orderId ? {...order,status: newStatus as OrderStatus} : order
                ))

                alert(`Order status updated to "${newStatus}" successfully!`);
            }
        }
        catch(error){
            console.error("Error updating order status:", error);
            alert("Failed to update order status. Please try again.");
        }
    }

    const getAvailableStatusOptions = (currentStatus: string) => {
        const allStatuses = [
            { value: 'placed', label: 'Placed' },
            { value: 'packed', label: 'Packed' },
            { value: 'shipped', label: 'Shipped' },
            { value: 'out for delivery', label: 'Out for Delivery' },
            { value: 'delivered', label: 'Delivered' },
            { value: 'cancelled', label: 'Cancelled' }
        ];

        const statusOrder = ['placed', 'packed', 'shipped', 'out for delivery', 'delivered'];
        const currentIndex = statusOrder.indexOf(currentStatus);

        if(currentStatus === 'cancelled') {
            return [{value: 'cancelled', label: 'Cancelled', disabled: true}]
        }

        if(currentStatus === 'delivered') {
            return [{value: 'delivered', label: 'Delivered', disabled: true}]
        }

        const availableOptions = [];

        availableOptions.push({
            value: currentStatus,
            label: allStatuses.find(s => s.value === currentStatus)?.label || currentStatus,
            disabled: true
        })

        for (let i = currentIndex + 1; i < statusOrder.length; i++) {
            const status = statusOrder[i];
            availableOptions.push({
                value: status,
                label: allStatuses.find(s => s.value === status)?.label || status,
                disabled: false
            });
        }

        availableOptions.push({
            value: 'cancelled',
            label: 'Cancelled',
            disabled: false
        });

        return availableOptions;

    }

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', padding: '2rem'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
                <button onClick={handleBackToAdmin} style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: '2px solid rgba(255, 255, 255, 0.3)',padding: '10px 20px', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '8px'}}
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

                <button onClick={handleLogout} style={{background: '#e74c3c', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '8px'}}
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
                <h1 style={{color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '700',margin: '0 0 0.5rem 0'}}>
                    Order Management
                </h1>
                <p style={{color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem',margin: '0'}}>
                    Manage customer orders and track their status
                </p>
            </div>

            <div style={{ display: 'flex',  justifyContent: 'start', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap'}}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px', padding: '1.5rem', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', minWidth: '280px',backdropFilter: 'blur(10px)'}}>
                        <h3 style={{margin: '0 0 1.5rem 0', color: '#2c3e50',fontSize: '1.2rem', fontWeight: '600',textAlign: 'center'}}>Filters</h3>
                    

                        <div style={{marginBottom: '1.5rem'}}>
                            <label style={{display: 'block',marginBottom: '0.5rem',color: '#34495e',fontWeight: '600',fontSize: '0.9rem'}}>Amount Range</label>
                            <div style={{ display: 'flex',gap: '0.5rem',alignItems: 'center'}}>
                                <input type="number"
                                    placeholder="Min"
                                    value={filters.minPrice}
                                    onChange={(e) => setFilters(prev => ({...prev, minPrice: e.target.value}))}
                                    style={{ flex: 1,padding: '8px 12px', border: '2px solid #ecf0f1', borderRadius: '8px',fontSize: '0.9rem',outline: 'none',transition: 'border-color 0.3s'}}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                                />
                                <span style={{color: '#7f8c8d', fontWeight: '600'}}>to</span>
                                <input type="number"
                                    placeholder="Max"
                                    value={filters.maxPrice}
                                    onChange={(e) => setFilters(prev => ({...prev, maxPrice: e.target.value}))}
                                    style={{ flex: 1,padding: '8px 12px', border: '2px solid #ecf0f1', borderRadius: '8px',fontSize: '0.9rem',outline: 'none',transition: 'border-color 0.3s'}}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                                />
                            </div>
                        </div>

                        <div style={{marginBottom: '1.5rem'}}>
                            <label style={{display: 'block', marginBottom: '0.5rem',color: '#34495e',fontWeight: '600',fontSize: '0.9rem'}}>
                                Order Status
                            </label>
                            <select value={filters.status} onChange={(e) => setFilters(prev => ({...prev, status: e.target.value}))}
                                style={{width: '100%',padding: '8px 12px',border: '2px solid #ecf0f1',borderRadius: '8px',fontSize: '0.9rem',outline: 'none',transition: 'border-color 0.3s',background: 'white'}}
                                onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                                onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                            >
                                <option value="">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="placed">Placed</option>
                                <option value="packed">Packed</option>
                                <option value="shipped">Shipped</option>
                                <option value="out for delivery">Out for Delivery</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>

                        <div style={{marginBottom: '1.5rem'}}>
                            <label style={{display: 'block',marginBottom: '0.5rem',color: '#34495e',fontWeight: '600',fontSize: '0.9rem'}}>Date Range</label>
                            <div style={{display:'flex', gap: '0.5rem',alignItems: 'center'}}>
                                <input type='date'
                                    value={filters.dateFrom}
                                    onChange={(e) => setFilters(prev => ({...prev, dateFrom:e.target.value}))}
                                    style={{ padding: '8px 12px', border: '2px solid #ecf0f1', borderRadius: '8px',fontSize: '0.9rem',outline: 'none', transition: 'border-color 0.3s'}}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                                />
                                <span style={{color: '#7f8c8d', fontWeight: '600'}}>to</span>
                                <input type='date'
                                    value={filters.dateTo}
                                    onChange={(e) => setFilters(prev => ({...prev, dateTo:e.target.value}))}
                                    style={{ padding: '8px 12px', border: '2px solid #ecf0f1', borderRadius: '8px',fontSize: '0.9rem',outline: 'none', transition: 'border-color 0.3s'}}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                                />
                            </div>
                        </div>
                        <button style={{width: '100%',padding: '10px', background: '#e74c3c',color: 'white',border: 'none',borderRadius: '8px',fontSize: '0.9rem',fontWeight: '600',cursor: 'pointer',transition: 'all 0.3s ease'}}
                            onClick={() => setFilters({
                                minPrice: '',
                                maxPrice: '',
                                dateFrom: '',
                                dateTo: '',
                                status: ''
                            })}
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
                    <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center',justifyContent: 'center',alignSelf: 'center',gap: '1rem'}}>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center'}}>
                            <input type="text" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search Order by OrderId or Customer Name"
                                style={{ padding: '12px 20px 12px 45px',border: 'none',borderRadius: '25px',fontSize: '1rem',width: '300px',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',outline: 'none',transition: 'all 0.3s ease',background: 'white'}}
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
                                style={{position: 'absolute',left: '15px',color: '#95a5a6'}}
                            >
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        </div>

                    </div>
            </div>
            
            

            
            <div style={{maxWidth: '1200px',margin: '0 auto' }}>
                {orders?.map((order) => (
                    <div key={order._id} style={{background: 'white',borderRadius: '15px',padding: '1.5rem',marginBottom: '1.5rem',boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',transition: 'all 0.3s ease'}}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 200px 80px', gap: '2rem', alignItems: 'center'}}>
                            
                            <div>
                                <h3 style={{margin: '0 0 0.5rem 0', color: '#2c3e50', fontSize: '1.2rem', fontWeight: '600'}}>
                                    #{order._id.toUpperCase()}
                                </h3>
                                <p style={{margin: '0 0 0.25rem 0', color: '#7f8c8d', fontSize: '1.3rem'}}>
                                    <strong>{order.address.name}</strong>
                                </p>
                            </div>

                            
                            <div>
                                <p style={{margin: '0 0 0.5rem 0', color: '#2c3e50', fontSize: '1.5rem', fontWeight: '600'}}>
                                    ₹{order.totalAmount}
                                </p>
                                <p style={{margin: '0 0 0.25rem 0',color: '#7f8c8d',fontSize: '0.9rem'}}>
                                    {order.createdAt ? formatDate(order.createdAt.toString()) : 'N/A'}
                                </p>
                                <p style={{margin: '0', color: '#7f8c8d', fontSize: '0.85rem'}}>
                                    {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                                </p>
                            </div>

                            
                            <div>
                                <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                                    {order.items.slice(0, 4).map((item, index) => (
                                        <div key={index} style={{width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', border: '2px solid #ecf0f1'}}>
                                            <img src={item.imageURL} alt={item.title} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                        </div>
                                    ))}
                                    {order.items.length > 4 && (
                                        <div style={{width: '45px', height: '45px', borderRadius: '8px', background: '#ecf0f1',display: 'flex',alignItems: 'center',justifyContent: 'center', color: '#7f8c8d', fontSize: '0.7rem', fontWeight: '600'}}>
                                            +{order.items.length - 4}
                                        </div>
                                    )}
                                </div>
                            </div>

                            
                            <div>
                                <p style={{ margin: '0 0 0.25rem 0', color: '#7f8c8d', fontSize: '0.9rem', fontWeight: '600'}}>
                                    Delivery Address
                                </p>
                                <p style={{ margin: '0', color: '#7f8c8d', fontSize: '0.85rem', lineHeight: '1.3'}}>
                                    {order.address.address.length > 30 
                                        ? `${order.address.address.substring(0, 30)}...` 
                                        : order.address.address
                                    }
                                </p>
                                <p style={{ margin: '0', color: '#7f8c8d', fontSize: '0.85rem'}}>
                                    {order.address.city}, {order.address.pincode}
                                </p>
                            </div>

                            
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem'}}>
                                
                                <div style={{ padding: '6px 12px',borderRadius: '20px', fontSize: '0.8rem',fontWeight: '600',textTransform: 'uppercase',letterSpacing: '0.5px', background: getStatusColor(order.status),color: 'white'
                                }}>
                                    {order.status}
                                </div>

                               
                                <select
                                    value={order.status}
                                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                    data-order-id={order._id}
                                    style={{padding: '8px 12px',border: '2px solid #ecf0f1',borderRadius: '8px',fontSize: '0.9rem',outline: 'none',transition: 'border-color 0.3s',background: 'white',minWidth: '150px'}}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#3498db'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ecf0f1'}
                                >
                                    {getAvailableStatusOptions(order.status).map((option) => (
                                        <option
                                            key={option.value} 
                                            value={option.value}
                                            disabled={option.disabled}
                                            style={{
                                                color: option.disabled ? '#95a5a6' : '#2c3e50',
                                                backgroundColor: option.disabled ? '#f8f9fa' : 'white'
                                            }}
                                        >
                                            {option.label} {option.disabled ? '(Current)' : ''}
                                        </option>
                                    ))}
                                    
                                </select>
                            </div>
                            <div onClick={() => handleOrderDetails(order._id)}>    
                                <button style={{width: '100%',padding: '10px', background: '#e74c3c',color: 'white',border: 'none',borderRadius: '8px',fontSize: '0.9rem',fontWeight: '600',cursor: 'pointer',transition: 'all 0.3s ease'}} >
                                    Order Detail</button>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};