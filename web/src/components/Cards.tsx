export default function Cards({ children, id }) {
  return (
    <div id={id} style={{ width: 398, padding: '0 200px' }}>
      {children}
    </div>
  )
}
