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
  const { openModal, closeModal } = useModal();

  const handlePhotoClick = (id: string) => {
    // closeModal은 내부에서 현재 router의 asPath를 pushState로 변경해주기 떄문에 순서를 주의해야한다.
    closeModal();
    // 브라우저의 라우터를 제공해주는 것 ( 넥스트 라우터와 브라우저 라우터는 다름)
    window.history.pushState(null, "", `/photos/${id}`);
    openModal(<PhotoDetail id={id} />);
  };
  return (
    <Container>
      {photosGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {group.map(({ id, urls, alt_description }) => (
            <div
              // href={router.pathname}
              // as={`/[category]/${id}`}
              key={id}
              onClick={() => handlePhotoClick(id)}
            >
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
    cursor: pointer;
  }
`;

export default PhotosList;
