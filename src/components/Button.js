export function Button({ title, onClick }) {
  console.log('in button')
  console.log(onClick)
  return (
    <div className="container">
      <button type="button" className="my-2 btn btn-primary">{title}</button>
    </div>
  )
}
