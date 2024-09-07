import './Input.css'

function Input() {
  return (
    <div className="w-auto mt-3 mb-3">
      <div className="input-group">
        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
        <input type="text" className="form-control" placeholder='people/1/' id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
        <span className="input-group-text" id="basic-addon2">Get Info</span>
      </div>
    </div>
  );
}

export default Input;