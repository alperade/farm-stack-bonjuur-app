import { useGetTokenQuery, useLogOutMutation } from "./app/accountApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal, LOG_IN_MODAL, SIGN_UP_MODAL } from "./app/accountSlice";
import LogInModal from "./Features/Misc/LogInModal";
import SignUpModal from "./Features/Misc/SignUpModal";
import { useEffect } from "react";
import logo from "./media/logo.png";
import { updateItinerary } from "./app/itinerarySlice";

function LoginButtons(props) {
  const dispatch = useDispatch();
  const classNames = `buttons ${props.show ? "" : "is-hidden"}`;

  return (
    <div className={classNames}>
      <button
        onClick={() => dispatch(showModal(SIGN_UP_MODAL))}
        className="button"
        style={{backgroundColor:"#eeeee4"}}
      >
        <strong>Sign up</strong>
      </button>
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
  const dispatch = useDispatch();

  useEffect(() => {
    const actionId = updateItinerary({ itineraryId: "" });
    dispatch(actionId);
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
      <nav className="navbar" style={{backgroundColor: '#eab676'}}>
        <div className="container-fluid" >
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Bonjuur" style={{width: "20vw"}} />
            </a>
            <div className="navbar-end">
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
