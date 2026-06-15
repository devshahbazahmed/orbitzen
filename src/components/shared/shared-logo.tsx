import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center mt-2">
        <Image src="/orbitzen.svg" alt="orbitzen" width={60} height={60} />
      </div>

      <h1 className="text-4xl mt-[-10] font-semibold tracking-tight text-[#2E62FF]">
        Orbitzen
      </h1>
    </Link>
  );
}
