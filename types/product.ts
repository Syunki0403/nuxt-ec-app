export type SaveProduct = {
    id?: string,
    images: Array<Image>
    category: string,
    description: string,
    gender: string,
    name: string,
    price: number,
    sizes: Array<Size>
    updated_time: unknown,
    created_at?: unknown,
}

export type Image = {
    id: string,
    path: string,
}

export type Size = {
    size: string,
    quantity: number
}