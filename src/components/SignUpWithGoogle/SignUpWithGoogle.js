import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../apis/apis";
// import jwt_decode from "jwt-decode";

const SignUpWithGoogle = () => {

    const decodeJwtToken = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const decodedData = JSON.parse(window.atob(base64));

        return decodedData;
    };

    return (
        <div className='signUpWithGoogle-container'>
            <GoogleOAuthProvider clientId='929753219628-eq3noqfonf9535cpg6dipqdk722jesc9.apps.googleusercontent.com'>
                <GoogleLogin
                    onSuccess={async (credentialResponse) => {

                        // var decoded = jwt_decode(credentialResponse.credential) // no es necesario decodificar
                        // console.log(decoded); //TODO que se hara con esta info?
                        const decoded = decodeJwtToken(credentialResponse.credential);

                        const auth = new Auth(null);

                        auth.postLoginGoogle(credentialResponse.credential);

                    }}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default SignUpWithGoogle;
