import styled from "@emotion/styled";
import { useRouter } from "next/router";
import PhotoDetail from "@/src/views/PhotoDetail";

const PhotoDetailPage = () => {
  const router = useRouter();
  // 페이지용 라우터 id를 받아야 됨
  const { id } = router.query;
  return (
    <Container>
      <PhotoDetail id={id as string} />
    </Container>
  );
};

const Container = styled.div``;

export default PhotoDetailPage;
