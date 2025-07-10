import React from 'react'
import Image from 'next/image'

const LoginLogo = () => {
  return (
    <>
      <Image
        src="/avya.png" // adjust filename if needed
        alt="NSFL Logo"
        width={180}
        height={60}
      />
    </>
  )
}

export default LoginLogo
