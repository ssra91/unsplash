import styled from "@emotion/styled";
import { getTopics } from "@/src/api/topics";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ScrollMenu from "@/src/components/ScrollMenu";

const TopicsLnb = () => {
  const { data, isLoading, isError } = useQuery(
    ["topics"],
    () => getTopics({ perPage: 30 }),
    {},
  );

  console.log("@@ data", data);
  return (
    <Container>
      <BaseLinks>
        <NavLink href="/">Editorial</NavLink>
        <NavLink href="/following">following</NavLink>
        <NavLink href="/plus/new">Unsplash</NavLink>
      </BaseLinks>
      <Divider />
      {data && <ScrollMenu data={data} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  background: #d1d1d1;
  margin: 0 24px;
`;

const BaseLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 56px;
  font-size: 14px;
`;

export default TopicsLnb;
