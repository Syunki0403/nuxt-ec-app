export type SaveProduct = {
    id?: string,
    images: Array<Image>
    category: string,
    description: string,
    gender: string,
    name: string,
    price: number,
    updated_time: unknown,
    created_at?: unknown,
}

type Image = {
    id: string,
    path: string,
}