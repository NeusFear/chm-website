import Image from "next/image";

const BackgroundImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <div className={"relative top-0 bottom-0 right-0 left-0 overflow-hidden w-full h-full " + (className ?? "")}>
            <div className="absolute top-1/2 left-1/2 w-auto h-auto max-h-0 max-w-0 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2">
                <Image alt={ alt } src={src} layout="fill" objectFit="cover" />
            </div>
        </div>
    );
}

export default BackgroundImage;