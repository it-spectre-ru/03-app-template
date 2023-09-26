import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h2>Dojo Helpdesk</h2>
      <Link href='/'>Dashboards</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}
