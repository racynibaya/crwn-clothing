import { IoMdClose } from 'react-icons/io';

import styled from 'styled-components';

export const Product = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  align-self: flex-start;
`;

console.log(Product);

export const OrdersDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(202, 202, 202, 0.567);
  width: 100%;
  justify-items: end;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 15px;
`;

export const OrderName = styled.span`
  justify-self: start;
`;

export const Remove = styled(IoMdClose)`
  justify-items: end;
  cursor: pointer;
`;
