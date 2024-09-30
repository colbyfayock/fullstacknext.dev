interface VideoProps {
  title: string;
  width?: number;
  height?: number;
  src: string;
}

export const Video = ({
  title,
  width = 560,
  height = 315,
  src,
}: VideoProps) => {
  return (
    <figure className="mx-auto">
      <div
        className="relative overflow-hidden rounded"
        style={{
          paddingTop: `${(height / width) * 100}%`,
        }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          title={title}
          width={width}
          height={height}
          src={src.replace('watch?v=', 'embed/')}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </figure>
  );
};

export default Video;