import styled from 'styled-components';

export const OrdersContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckoutNavigation = styled.nav`
  width: 60%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(202, 202, 202, 0.567);
  padding: 1rem 0;
  font-size: 1.6rem;
`;

export const Orders = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 2rem;
`;

export const H2Container = styled.h2`
  text-align: center;
  margin: 17.6rem 8rem;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.578);
`;

export const Total = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  font-size: 3.2rem;
`;
