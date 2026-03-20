import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
 
export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <svg viewBox="0 0 400 400" width="22" height="22">
          <path d="M130 110 V290 M130 110 H220 C264 110 264 190 220 190 H130 M180 190 L240 290" 
                stroke="#F3F4F6" strokeWidth="48" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="280" cy="90" r="24" fill="#D6FF00"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
