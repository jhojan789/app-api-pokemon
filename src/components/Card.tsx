import { useEffect, useRef, useState } from "react";

export function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className=" flex items-center w-full max-w-96 min-h-36 cursor-pointer border hover:shadow-lg bg-white hover:animate-bounce rounded-lg p-4">
      <LazyImage image={pokemon.image} placeholder="" className="w-full" />
      <h2>{pokemon.name.toUpperCase()}</h2>
    </div>
  );
}

interface LazyImageProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  placeholder: string;
}

function LazyImage({
  image,
  placeholder,
  ...props
}: LazyImageProps): JSX.Element {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
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
    <div {...props}>
      <img
        ref={imageRef}
        src={isIntersecting ? image : placeholder}
        className="w-full"
      />
    </div>
  );
}
