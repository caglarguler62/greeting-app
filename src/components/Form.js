

function Form(props){
  function handleInput (e){
   props.onInput(e.target.value)
  }
  return (
    <form action="">
      <label htmlFor="user_name">enter your name</label><br/>
      <input id="user_name"type="text" onInput={handleInput}/>
    </form>
  )
}

export default Form;