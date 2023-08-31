'use client'
import { useTheme } from "next-themes";
import { Oval } from "react-loader-spinner";

export default function Loading() {
  const {theme} = useTheme();
  const color = theme==='light'?'#0c0a09':'#52525b';
  return (
    <>
      <div className="flex justify-center h-[80vh] sm:h-auto w-full sm:w-[calc(100%-12rem)] items-center">
        <Oval
          height={50}
          width={50}
          color={color}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#44403c"
          strokeWidth={1.5}
          strokeWidthSecondary={1}
        />
      </div>
    </>
  );
}