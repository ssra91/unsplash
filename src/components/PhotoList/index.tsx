import styled from "@emotion/styled";
import { TPhotoItem } from "@/src/models/photos";
import { getPhotosGroup } from "@/src/utils/photos";
import { useModal } from "@/src/components/Modal/ModalProvider";
import PhotoDetail from "@/src/views/PhotoDetail";

interface Props {
  data: TPhotoItem[];
}

const PhotosList = ({ data }: Props) => {
  const photosGroups = getPhotosGroup(data);
  const { openModal } = useModal();

  const handlePhotoClick = (id: string) => {
    openModal(<PhotoDetail id={id} />);
  };
  return (
    <Container>
      {photosGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {group.map(({ id, urls, alt_description }) => (
            <div key={id} onClick={() => handlePhotoClick(id)}>
              <img src={urls.regular} alt={alt_description} />
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

export default PhotosList;
