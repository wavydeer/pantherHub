

import { USER_STATE_CHANGE } from "../constants/index";

export const fetchUser = () => {
  // return dispatch => {
  //   firestore()
  //     .collection("users")
  //     .doc(firebase.auth().currentUser.uid)
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.exists) {
  //         console.log(snapshot.data())
  //         dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
  //       }else{
  //           console.log('does not exist');
  //       }
  //     });
  // }
}
