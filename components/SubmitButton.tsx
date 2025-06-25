import Image from "next/image";
import { Button } from "./ui/button";

export default function SubmitButton({
  isLoading,
  className,
  children,
}: {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={
        className ??
        "w-full bg-green-400 hover:bg-green-500 font-semibold cursor-pointer"
      }
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="Loader"
            width={24}
            height={24}
            className="animate-spin"
          />{" "}
          Loading ...
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
