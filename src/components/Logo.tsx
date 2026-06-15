import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center gap-3">
      <div className="flex items-center">
        <Image src="/orbitzen.svg" alt="orbitzen" width={72} height={72} />
      </div>

      <h1 className="text-4xl mt-[-10] font-semibold tracking-tight text-white">
        Orbitzen
      </h1>
    </Link>
  );
}
