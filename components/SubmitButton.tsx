import Image from "next/image";
import { Button } from "./ui/button";

export default function SubmitButton({
  isLoading,
  className,
  children,
}: {
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <Button
        type="submit"
        disabled={isLoading}
        className={className ?? "w-full bg-green-400 font-semibold"}
      >
        {isLoading ? (
          <div>
            <Image
              src="/assets/icons/loader.svg"
              alt="Loader"
              width={20}
              height={20}
              className="animate-spin"
            />{" "}
            Loading ...
          </div>
        ) : (
          children
        )}
      </Button>
    </div>
  );
}
