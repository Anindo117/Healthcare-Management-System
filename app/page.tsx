import PatientForm from "@/components/Forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between min-h-screen font-[family-name:var(--font-geist-sans)]">
      <section className="flex-1 p-8 pb-20 sm:p-20">
        <div className="flex items-center gap-1 mb-12">
          <Image
            src="/assets/images/logo.png"
            height={1000}
            width={1000}
            alt="Logo"
            className="h-8 w-fit"
          />
          <h1 className="text-2xl fotn-bold">BodyCure</h1>
        </div>
        <PatientForm />
        <div className="flex justify-between text-[#76828D] text-sm mt-20">
          <p className=" ">@carepulse copyright</p>
          <Link href="/?admin=true" className="text-green-300">
            Admin
          </Link>
        </div>
      </section>
      <section className="min-h-screen">
        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={700}
          alt="patient"
          className="w-full min-h-[90vh] object-cover rounded-lg"
        />
      </section>
    </div>
  );
}
