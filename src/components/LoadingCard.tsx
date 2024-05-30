import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function LoadingCard() {
  return (
    <div
      className=" absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center
     w-full max-w-96 min-h-36 cursor-pointer border hover:shadow-lg bg-white  rounded-lg p-4"
    >
      <AiOutlineLoading3Quarters size="2rem" className="animate-spin" />
    </div>
  );
}
