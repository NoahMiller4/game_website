
function Button(props) {
  return (
    <button className={props.isColor ? 'transp' : 'blue'}>
      <span>{props.text}</span>
    </button>
  )
}

export default Button