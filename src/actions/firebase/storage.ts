'use server';
import { storage } from '@/config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { z } from 'zod';

export async function uploadImage(data: { image: File; userId: string }): Promise<{ data?: string; error?: string }> {
  try {
    const uploadImageSchema = z.object({
      image: z
        .instanceof(File)
        .refine((file) => file.size < 5 * 1024 * 1024, 'Image must be less than 5MB')
        .refine(
          (file) => ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type),
          'Image must be a JPEG, JPG or PNG',
        ),
    });

    const { image } = uploadImageSchema.parse(data);
    const storageRef = ref(storage, `images/${data.userId}/${v4()}`);
    const avatarSnapshot = storageRef && (await uploadBytes(storageRef, image));
    const imageUrl = avatarSnapshot && (await getDownloadURL(storageRef));

    if (!imageUrl) throw new Error('Failed to upload image');

    return { data: imageUrl };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
}
