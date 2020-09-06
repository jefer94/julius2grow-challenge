import { useRouter } from 'next/router'
import { useState } from 'react'

export default function isAuth(): boolean {
  return !!localStorage.getItem('__J2G__')
}
