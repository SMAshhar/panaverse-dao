import DynamicBlock from "components/dynamicblock/dynamicblock";
import Footer from "components/footer";
import { Header } from "components/header";
import { useRouter } from "next/router";





export default function DynamicPage() {
  const router = useRouter();
  const { fileURL } = router.query;

  return (
    <>
      <Header />
      <DynamicBlock fileURL={fileURL as string} />
      <Footer />
    </>
  );
}
