import { useRouter } from 'next/router'
import { useState } from 'react'

export default function logout(): void {
  localStorage.setItem('__J2G__', '')
}
