interface VideoProps {
  video: string;
  capa: string;
}

export function VideoInstitucional(props: VideoProps) {
  return (
    <video src={props.video} controls preload="none" poster={props.capa} />
  )
}

