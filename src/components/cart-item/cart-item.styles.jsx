import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1.5rem;
`;

export const Image = styled.img`
  width: 30%;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
`;

export const Name = styled.span`
  font-size: 1.6rem;
`;

// .cart-item-container {
//   width: 100%;
//   display: flex;
//   height: 80px;
//   margin-bottom: 15px;
//   img {
//     width: 30%;
//   }
//   .item-details {
//     width: 70%;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 10px 20px;
//     .name {
//       font-size: 16px;
//     }
//   }
// }
