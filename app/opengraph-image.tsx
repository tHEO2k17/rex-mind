import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'RexMind - Cognitive Operating System'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          <svg viewBox="0 0 400 400" width="180" height="180">
            <path d="M130 110 V290 M130 110 H220 C264 110 264 190 220 190 H130 M180 190 L240 290" 
                  stroke="#F3F4F6" strokeWidth="40" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="280" cy="90" r="20" fill="#D6FF00"/>
          </svg>
          <div
            style={{
              display: 'flex',
              fontSize: 140,
              fontWeight: 800,
              letterSpacing: '-0.05em',
            }}
          >
            <div style={{ color: '#F3F4F6' }}>Rex</div>
            <div style={{ color: '#D6FF00' }}>Mind</div>
          </div>
        </div>
        <div style={{ 
          marginTop: 60, 
          color: '#6B7280', 
          fontSize: 32, 
          letterSpacing: '0.1em', 
          fontWeight: 600 
        }}>
          PRECISION COGNITIVE SUPPORT
        </div>
      </div>
    ),
    { ...size }
  )
}
