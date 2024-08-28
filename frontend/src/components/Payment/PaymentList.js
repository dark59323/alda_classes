// src/components/Payment/PaymentList.js
import React, { useEffect, useState } from 'react';
import { getPayments } from '../../api/paymentApi';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await getPayments();
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };
    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Payments List</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>{payment.amount} - {payment.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
