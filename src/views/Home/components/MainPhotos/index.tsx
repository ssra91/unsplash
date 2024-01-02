import styled from "@emotion/styled";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhotos } from "@/src/api/photos";
import ContentContainer from "@/src/components/ContantContainer";
import MainInfiniteScroll from "@/src/views/Home/components/MainPhotos/MainInfiniteScroll";
import PhotosList from "@/src/components/PhotoList";
import { TPhotoItem } from "@/src/models/photos";
import { useDialog } from "@/src/hooks/useDialogs";
import { useRouter } from "next/router";
import Dot from "@/src/components/Dot";

const MainPhotos = () => {
  const { openDialog, closeDialog } = useDialog();
  const router = useRouter();
  // const [[category], setPhotos] = useState<TPhotoItem[]>([]);
  // const [page, setPage] = useState(1);

  // const { data = [] } = useQuery(
  //   ["[category]", page],
  //   () => getPhotos({ page, perPage: 10 }),
  //   {
  //     staleTime: 1000 * 60 * 30,
  //   },
  // );

  const { fetchNextPage, data, isError, refetch } = useInfiniteQuery<
    TPhotoItem[]
  >({
    queryKey: ["photos"],
    queryFn: ({ pageParam = 1 }) => getPhotos({ page: pageParam, perPage: 10 }),
    staleTime: 1000 * 60 * 30,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage;
    },
  });
  const photos = data?.pages.flat() ?? [];

  // const handleNext = () => {
  //   setPage(page + 1);
  // };
  // useEffect(() => {
  //   setPhotos([...[category], ...data]);
  // }, [data]);

  // useEffect(() => {
  //   if (!isError) return;
  //   openDialog({
  //     title: " 문제가 발생하였어요.",
  //     description: "필수 항목이 누락되어\n 진행 할 수 없습니다.",
  //     confirmText: "다시시도",
  //     cancelText: "고객센터",
  //     onConfirm: () => {
  //       refetch();
  //       closeDialog();
  //     },
  //     onCancel: () => {
  //       router.push("/cs");
  //       closeDialog();
  //     },
  //   });
  // }, [isError]);

  if (photos?.length === 0) return <p>데이터가 존재하지 않습니다.</p>;

  return (
    <Container>
      <ContentContainer>
        {isError ? (
          <Dot />
        ) : (
          <MainInfiniteScroll
            onNext={() => fetchNextPage()}
            length={photos.length}
          >
            <PhotosList data={photos} />
            {/* <MainInfiniteScroll onNext={handleNext} length={[category].length}> */}
            {/*  <PhotosList data={[category]} /> */}
          </MainInfiniteScroll>
        )}
        {/* <MainInfiniteScroll onNext={handleNext} length={0}> */}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
`;

export default MainPhotos;
