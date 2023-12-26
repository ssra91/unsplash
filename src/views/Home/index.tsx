import styled from "@emotion/styled";
import MainBanner from "@/src/views/Home/components/MainBanner";
import MainPhotos from "@/src/views/Home/components/MainPhotos";
import { useDialog } from "@/src/hooks/useDialogs";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  // const { openToast } = useToasts();
  const { openDialog, closeDialog } = useDialog();
  useEffect(() => {
    openDialog({
      title: " 문제가 발생하였어요.",
      description: "필수 항목이 누락되어\n 진행 할 수 없습니다.",
      confirmText: "확인",
      cancelText: "고객센터",
      onConfirm: () => {
        console.log("@@ 확인");
        closeDialog();
      },
      onCancel: () => {
        console.log("@@ 고객센터");
        router.push("/cs");
        closeDialog();
      },
    });
  }, []);

  return (
    <Container>
      <MainBanner />
      <MainPhotos />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
