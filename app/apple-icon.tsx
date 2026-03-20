import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg viewBox="0 0 400 400" width="120" height="120">
          <path d="M130 110 V290 M130 110 H220 C264 110 264 190 220 190 H130 M180 190 L240 290" 
                stroke="#F3F4F6" strokeWidth="44" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="280" cy="90" r="22" fill="#D6FF00"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
