import Link from 'next/link'

function Checkout() {
  return (
    <ul>
      <li>
        <Link href="/checkout">
          <a>Checkout</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  )
}

export default Checkout
