import { useEffect, useRef, useState } from "react";
import { LoadingCard } from "./LoadingCard";

export function LazyImage({
  image,
  placeholder,
  loadingComponent,
  ...props
}: LazyImageProps): JSX.Element {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [isLoadedCard, setIsLoadedCard] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            const img = new Image();
            img.src = image;
            img.onload = () => {
              setIsLoadedCard(true);
              if (imageRef.current) {
                observer.unobserve(imageRef.current);
              }
            };
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, [image]);

  return (
    <>
      {!isLoadedCard && (
        <>
          {loadingComponent || (
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white">
              <p>Loading...</p>
            </div>
          )}
        </>
      )}
      <div {...props}>
        <img
          ref={imageRef}
          src={isIntersecting ? image : placeholder}
          className="w-full"
        />
      </div>
    </>
  );
}
