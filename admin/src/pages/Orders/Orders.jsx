import React from 'react';
import './Orders.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + '/api/order/list');
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error('Error');
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + '/api/order/updatestatus', {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order page</h3>
      <div className="order-list">
        {orders.map((order, index) => {
          return (
            // ← return add kiya
            <div className="order-item" key={index}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className="order-item-food">
                  {order.items.map((item, index) => {
                    // ← parameters fix kiye
                    if (index === order.items.length - 1) {
                      return item.name + ' x ' + item.quantity;
                    } else {
                      return item.name + ' x ' + item.quantity + ', ';
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstname} {order.address.lastname}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city +
                      ', ' +
                      order.address.state +
                      ', ' +
                      order.address.country +
                      ', ' +
                      order.address.zip}
                  </p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
