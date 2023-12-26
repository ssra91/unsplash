import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SearchHeader from "@/src/views/Search/components/SearchHeader";
import ContentContainer from "@/src/components/ContantContainer";
import SearchCollections from "@/src/views/Search/components/SearchCollections";
import SearchUsers from "@/src/views/Search/components/SearchUsers";
import SearchPhotos from "@/src/views/Search/components/SearchPhotos";
import React from "react";

const SearchListMap: Record<string, React.FC> = {
  photos: SearchPhotos,
  collections: SearchCollections,
  users: SearchUsers,
};

const Search = () => {
  const router = useRouter();
  const { keyword = "", category = "" } = router.query;
  const SearchList = SearchListMap[category as string] ?? (() => null);

  return (
    <Container>
      <ContentContainer>
        {/* 검색어 */}
        <SearchHeader keyword={keyword as string} />
        {/* 연관 검색어 */}
        {/* 리스트 */}
        <SearchList />
        {/* {category === "photos" && <SearchPhotos />} */}
        {/* {category === "collections" && <SearchCollections />} */}
        {/* {category === "users" && <SearchUsers />} */}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div``;

export default Search;
