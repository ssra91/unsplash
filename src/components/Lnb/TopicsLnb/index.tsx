import styled from "@emotion/styled";
import { getTopics } from "@/src/api/topics";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ScrollMenu from "@/src/components/ScrollMenu";

const TopicsLnb = () => {
  const { data, isLoading, isError } = useQuery(
    ["topics"],
    () => getTopics(),
    {},
  );
  console.log("@@ data", data);
  return (
    <Container>
      <BaseLinks>
        <NavMenu href="/">Editorial</NavMenu>
        <NavMenu href="/">Following</NavMenu>
        <NavMenu href="/">Unsplash</NavMenu>
      </BaseLinks>
      <Divider />
      {data && <ScrollMenu data={data} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const Divider = styled.div`
  width: 1px;
  height: 18px;
  margin: 0 24px;
  background-color: #d1d1d1;
`;
const BaseLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const NavMenu = styled(Link)``;

export default TopicsLnb;
