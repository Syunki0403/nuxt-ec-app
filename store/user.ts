import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import { TypeUser, TypeSignup, TypeSignin } from '@/types/user'
import { auth, db, FirebaseTimeStamp } from '@/plugins/firebase'

export const state = () => ({
    user: {
        isSignedIn: false,
        role: '',
        uid: '',
        username: ''
    } as TypeUser
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
    user: state => state.user,
})

export const mutations = mutationTree(state, {
    setUser(state, user: TypeUser): void {
        state.user = user
    }
})

export const actions = actionTree({ state, getters, mutations }, {
    async signout({ commit }): Promise<void> {
        auth.signOut().then(() => {
            commit('setUser', {
                isSignedIn: false,
                role: '',
                uid: '',
                username: '',
            })
            console.log("signout complete");
            this.$router.push("/signin")
        });
    },
    async signin({ commit }, { email, password }): Promise<void> {
        auth.signInWithEmailAndPassword(email, password).then((result) => {
            const user = result.user;
            if (user) {
                const uid = user.uid;

                db.collection("users")
                    .doc(uid)
                    .get()
                    .then((snapshot) => {
                        const data = snapshot.data();

                        if (data) {
                            commit('setUser', {
                                isSignedIn: true,
                                role: data.role,
                                uid: uid,
                                username: data.username,
                            })
                            console.log("signin complete");
                            this.$router.push("/");
                        }
                    });
            }
        });
    },
})