import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';



export default function Loading() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/Login')
    }, 2000)
  }, [])

  return (
    <div className="main">
      <div className="center_content" >
        <img src="/logo.png" className="logo" />
      </div>
    </div>
  )
}
