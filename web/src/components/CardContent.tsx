export default function CardContent({ content }) {
  return (
    <p style={{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '14px',
      lineHeight: '130%'
    }}>
      {content}
      <span style={{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '130%',
        color: '#046DE8'
      }}>[read more]</span>
    </p>
  )
}