'use server';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation';

export default async function mutateCategory() {
    return revalidatePath('/', 'page')
    // return redirect(search)
}
