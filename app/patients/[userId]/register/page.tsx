import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex justify-between min-h-screen font-[family-name:var(--font-geist-sans)]">
      <section className="flex-1 p-8 pb-20 sm:p-20 max-w-1/2">
        <div className="flex items-center gap-1 mb-20">
          <Image
            src="/assets/images/logo.png"
            height={1000}
            width={1000}
            alt="Logo"
            className="h-7 w-fit"
          />
          <h1 className="text-xl fotn-bold">BodyCure</h1>
        </div>

        <div className="flex justify-between text-[#76828D] text-sm mt-20 max-w-[496px]">
          <p className=" ">@carepulse copyright</p>
          <Link href="/?admin=true" className="text-green-300">
            Admin
          </Link>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="max-w-1/2 max-h-screen bg-no-repeat bg-cover rounded-lg"
      />
    </div>
  );
};

export default Register;
