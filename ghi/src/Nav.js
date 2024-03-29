import { useGetTokenQuery, useLogOutMutation } from "./app/accountApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal, LOG_IN_MODAL, SIGN_UP_MODAL } from "./app/accountSlice";
import LogInModal from "./Features/Misc/LogInModal";
import SignUpModal from "./Features/Misc/SignUpModal";
import logo from "./media/logo.png";
import { useEffect } from "react";

function LoginButtons(props) {
  const dispatch = useDispatch();
  const classNames = `buttons ${props.show ? "" : "is-hidden"}`;

  return (
    <div className={classNames}>
      {/* <button
        onClick={() => dispatch(showModal(SIGN_UP_MODAL))}
        className="button"
        style={{backgroundColor:"#eeeee4"}}
      >
        <strong>Sign up</strong>
      </button> */}
      <button
        onClick={() => dispatch(showModal(LOG_IN_MODAL))}
        className="button"
        style={{backgroundColor:"#eeeee4"}}
      >
        Log in
      </button>
    </div>
  );
}

function LogoutButton() {
  const navigate = useNavigate();
  const [logOut, { data }] = useLogOutMutation();

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  });

  return (
    <div className="buttons">
      <button onClick={logOut} className="button is-light">
        Log out
      </button>
    </div>
  );
}

function Nav() {
  const { data: token, isLoading: tokenLoading } = useGetTokenQuery();

  return (
    <>
      <nav className="navbar" style={{backgroundImage: "linear-gradient(90deg, #e4c9d6, #ddd7ed)" }}>
        <div className="container-fluid" style={{marginLeft: '10rem'}}>
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Bonjuur" style={{width: "10vw", display:"block", width:"50%", height:"auto"}} />
            </a>
            <div className="navbar-end" style={{marginRight: '10rem'}}>
              <div className="navbar-item">
                {tokenLoading ? (
                  <LoginButtons show={false} />
                ) : token ? (
                  <LogoutButton />
                ) : (
                  <LoginButtons show={true} />
                )}
              </div>
            </div>
        </div>
      </nav>
      <LogInModal />
      <SignUpModal />
    </>
  );
}

export default Nav;
