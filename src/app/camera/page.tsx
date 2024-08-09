'use client';
import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Back from '../../common/components/back';
import { dataURLtoFile, resizeImage } from '@/common/utils/resize-image';
import { analyzeImage } from '@/actions/gemini';
import { uploadImage } from '@/actions/firebase/storage';
import { uploadPokemon } from '@/actions/firebase/firestore';
import { useRouter } from 'next/navigation';
import { useUserProvider } from '@/common/providers/user-provider';

export default function Camera() {
  const router = useRouter();
  const { user } = useUserProvider();
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string>();

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    if (imageSrc) {
      setImgSrc(imageSrc);
    }
  }, [webcamRef]);

  const handleUpload = useCallback(async () => {
    if (!imgSrc || !user || user === 'unlogged') return;
    const resizedImage = await resizeImage(imgSrc);
    const file = dataURLtoFile(resizedImage, 'image.jpg');
    const content = await analyzeImage(file);
    const imageUrl = await uploadImage({ image: file, userId: 'user-id' });

    if (!content.data || !imageUrl.data) {
      return;
    }

    const pokemonId = await uploadPokemon({
      data: {
        ...content.data,
        image: imageUrl.data,
      },
      userId: user.uid,
    });

    if (!pokemonId.data) {
      return;
    }

    router.push(`/pokemon?uid=${pokemonId.data}`);
  }, [imgSrc]);

  return (
    <div className="h-screen relative">
      {imgSrc ? (
        <>
          <img className="h-screen w-screen object-cover" src={imgSrc} alt="captured" />
          <div className="absolute bottom-8 flex justify-center items-center gap-6 w-full font-medium">
            <button className="bg-white p-3 w-32 rounded-3xl" onClick={() => setImgSrc(undefined)}>
              Tirar outra
            </button>
            <button className="bg-primary text-white p-3 w-32 rounded-3xl" onClick={handleUpload}>
              Continuar
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="absolute p-4 top-4 left-4 z-10 drop-shadow-[0px_0px_3px_rgba(0,0,0)]">
            <Back />
          </div>
          <Webcam className="h-screen w-screen object-cover" ref={webcamRef} />
          <div className="rounded-full absolute translate-x-1/2 right-1/2 bottom-8 border-[3px] border-white drop-shadow-[0px_0px_3px_rgba(0,0,0)]">
            <button className="p-6" onClick={capture} />
          </div>
        </>
      )}
    </div>
  );
}
