import Header from "../../../components/Header.jsx";

function HeroPage() {
  return (
    <div className={"h-screen"}>
      <Header/>
      <div className={"p-4 text-center mt-[calc(100dvh/4)] poppins-regular"}>
        <div className={"text-5xl poppins-bold mb-4"}>Some Big Text to attract people</div>
        <div className={"poppins-light"}>some text to explain the objectives of our prgramme</div>
        <div className={'mt-12'}>
          CTA
        </div>
      </div>
    </div>
  )
}

export default HeroPage;
