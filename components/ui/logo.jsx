import Image from 'next/image'
import Link from 'next/link'
import { SITE_NAME, LOGO_WIDTH, LOGO_HEIGHT } from '@/lib/constants'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/touanapnghires.png"
        alt={`${SITE_NAME} Logo`}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className=" w-60 h-12"
      />
      <span className="font-bold text-xl">{SITE_NAME}</span>
    </Link>
  )
}