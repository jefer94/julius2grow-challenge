import css from './Cards.module.css'

export default function Cards({ children, id }) {
  return (
    <div id={id} className={css.container}>
      {children}
    </div>
  )
}
