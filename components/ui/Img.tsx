import Image from "next/image";
import { cn } from "@/lib/utils";

/** Fill-mode next/image with object-cover. The parent must be positioned and sized. */
export function Img({
  src,
  alt,
  sizes = "100vw",
  priority,
  className,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", className)} />;
}

/** Image with hover zoom inside an overflow-hidden frame. */
export function ZoomImg({
  src,
  alt,
  sizes,
  className,
  frameClassName,
  style,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  frameClassName?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div data-reveal className={cn("zoom-host relative overflow-hidden bg-img-bg", frameClassName)} style={style}>
      <div className={cn("zoom", className)}>
        <Img src={src} alt={alt} sizes={sizes} />
      </div>
    </div>
  );
}

/** Parallax image layer. Place inside a `relative overflow-hidden` parent. */
export function ParallaxImg({
  src,
  alt,
  speed = 0.3,
  sizes = "100vw",
  priority,
  extra = 15,
  className,
}: {
  src: string;
  alt: string;
  speed?: number;
  sizes?: string;
  priority?: boolean;
  /** Overscan in % above and below (top: -extra%, height: 100 + 2*extra%). */
  extra?: number;
  className?: string;
}) {
  return (
    <div
      data-parallax={speed}
      className={cn("absolute inset-x-0 will-change-transform", className)}
      style={{ top: `-${extra}%`, height: `${100 + extra * 2}%` }}
    >
      <Img src={src} alt={alt} sizes={sizes} priority={priority} />
    </div>
  );
}
