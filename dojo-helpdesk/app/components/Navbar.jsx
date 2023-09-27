import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Dojo helpdesk Logo'
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h2>Dojo Helpdesk</h2>
      <Link href='/'>Dashboards</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}
