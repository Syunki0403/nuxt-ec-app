import { Context } from '@nuxt/types'
import { auth, db } from "@/plugins/firebase";

export default async ({ redirect, route, app: { $accessor } }: Context) => {
    if (route.path === '/') {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const uid = user.uid;

                db.collection("users")
                    .doc(uid)
                    .get()
                    .then((snapshot) => {
                        const data = snapshot.data();

                        if (data) {
                            $accessor.user.setUser({
                                isSignedIn: true,
                                role: data.role,
                                uid: uid,
                                username: data.username,
                            });
                            console.log("listenAuthState complete");
                        }
                    });
            } else {
                console.log("listenAuthState non_complete");
                redirect('/signin')
            }
        });
    }

}