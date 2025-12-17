import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  invert?: "invert";
}

const Logo: React.FC<IProps> = ({ invert }) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo.svg"}
        alt="Time to stay logo"
        height={115}
        width={466}
        className={`${invert} w-28 sm:w-32`}
      />
    </Link>
  );
};

export default Logo;
