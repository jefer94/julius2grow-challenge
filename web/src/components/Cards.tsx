export default function Cards({ children }) {
  return (
    <div style={{
      // display: 'flex',
      // flexDirection: 'column',
      // padding: '0px',

      // position: 'absolute',
      // width: '1041px',
      // height: '1110px',
      // left: '0px',
      // top: '64px',
    }}>
      <div style={{ width: 398, padding: '0 200px' }}>
        {children}
      </div>
    </div>
  )
}
