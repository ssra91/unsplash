import styled from "@emotion/styled";
import { useRouter } from "next/router";

const TopicPage = () => {
  const router = useRouter();
  console.log("@@ router", router);
  return (
    <Container>
      <h1>TopicPage</h1>
      {router.query.slug}
    </Container>
  );
};

const Container = styled.div``;

export default TopicPage;
