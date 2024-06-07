import PageHeader from "@/components/common/page-header";
import Image from "next/image";
import React from "react";


export const metadata = {
  title: "About",
  description: "Generated by create next app",
};
const AboutPage = () => {
  // throw new Error("test")
  return (
    <>
      <PageHeader title="About" />
      <div
        className="position-relative h-10"
        style={{ height: "100px", width: "100px" }}
      >
        AboutPage
        <Image
          src="https://picsum.photos/100/100"
          fill
          alt="picsum photos "
          style={{ objectFit: "cover", objectPosition: "bottom center" }}
        />
      </div>
    </>
  );
};

export default AboutPage;
