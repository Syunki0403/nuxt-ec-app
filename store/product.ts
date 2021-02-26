import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import { SaveProduct } from '@/types/product'
import { auth, db, FirebaseTimeStamp } from '@/plugins/firebase'

const productsRef = db.collection('products');

export const state = () => ({
    product: {
        list: [] as Array<string>,
    }
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {

})

export const mutations = mutationTree(state, {

})

export const actions = actionTree({ state, getters, mutations }, {
    async saveProduct({ }, { images, name, description, category, gender, price }): Promise<void> {
        const timestamp = FirebaseTimeStamp.now();

        const data: SaveProduct = {
            images: images,
            category: category,
            description: description,
            gender: gender,
            name: name,
            price: parseInt(price, 10),
            updated_time: timestamp,
        }

        const ref = productsRef.doc();
        const id = ref.id;
        data.id = id;
        data.created_at = timestamp;

        productsRef.doc(id).set(data).then(() => {
            console.log("save product complete");
            this.$router.push("/");
        }
        ).catch((error) => {
            throw new Error(error)
        })
    },
})