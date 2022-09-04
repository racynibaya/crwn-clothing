import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from './directory-item.styles';
const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const categoryLinkHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={categoryLinkHandler}>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
