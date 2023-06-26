import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex items-center gap-3 border px-5 py-3 shadow-md">
      <Image src="/logo.png" width={45} height={45} alt="Logo" />
      <span>Next Template Starter</span>
    </div>
  )
}

export default Header
