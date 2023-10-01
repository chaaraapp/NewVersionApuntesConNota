import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../apis/apis";

const SignUpWithGoogle = () => {

    return (
        <div className='signUpWithGoogle-container'>
            <GoogleOAuthProvider clientId='1093604284962-17r5sirmj282qbvj1ee53uv1oc1vlp28.apps.googleusercontent.com'>
                <GoogleLogin
                    onSuccess={async (credentialResponse) => {

                        // var decoded = jwt_decode(credentialResponse.credential) // no es necesario decodificar
                        // console.log(decoded); //TODO que se hara con esta info?
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
