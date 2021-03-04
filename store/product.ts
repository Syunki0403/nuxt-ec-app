import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import { SaveProduct } from '@/types/product'
import { db, FirebaseTimeStamp } from '@/plugins/firebase'

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
    async saveProduct({ }, { id, images, name, description, category, gender, price, sizes }): Promise<void> {
        const timestamp = FirebaseTimeStamp.now();

        const data: SaveProduct = {
            images: images,
            category: category,
            description: description,
            gender: gender,
            name: name,
            price: parseInt(price, 10),
            updated_time: timestamp,
            sizes: sizes,
        }

        if (id === '') {
            const ref = productsRef.doc();
            data.created_at = timestamp;
            id = ref.id;
            data.id = id;
        }

        productsRef.doc(id).set(data, { merge: true }).then(() => {
            console.log("save product complete");
            this.$router.push("/");
        }
        ).catch((error) => {
            throw new Error(error)
        })
    },
})