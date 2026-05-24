import React, { use, useContext } from 'react'
import './Verify.css';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Verify = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const success = searchparams.get('success');
  const orderId = searchparams.get('orderId');
  console.log(success, orderId);
  const {url}=useContext(StoreContext);
  const navigate=useNavigate();

  const verifyPayment=async()=>{

      const response= await axios.post(url+"/api/order/verify",{success,orderId});
      if(response.data.success){
        navigate('/myorders');
      } else{
        navigate('/');
      }
      useEffect(()=>{
        verifyPayment();
      },[])

  };

  verifyPayment();

  return (

    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify