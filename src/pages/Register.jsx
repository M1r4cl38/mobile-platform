import style from './Register.module.css';


export function Register() {
    return (
    <div className="app">
      <form className="form">
        <div className="row">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="row">
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
        <div className="row">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
    )
}