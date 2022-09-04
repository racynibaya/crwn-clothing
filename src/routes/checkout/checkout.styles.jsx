import styled from 'styled-components';

export const OrdersContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckoutNavigation = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(202, 202, 202, 0.567);
  padding: 10px 0;
`;

export const Orders = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const H2Container = styled.h2`
  text-align: center;
  margin: 11rem 5rem;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.578);
`;

export const Total = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
`;
