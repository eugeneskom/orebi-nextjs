import React from 'react'
import { getPlaiceholder } from 'plaiceholder'

async function  getBase64({url}:{url:string}) {
  try {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error("Failed to fetch image")
    }
    const buffer = await res.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
  } catch (error) {
    console.log(error)
  }
  return (
    <div>getBase64</div>
  )
}

export default getBase64