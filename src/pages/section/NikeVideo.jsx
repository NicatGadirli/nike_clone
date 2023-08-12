//Import Video
import video from "../../assets/videos/video.mp4";

const NikeVideo = () => {
  return (
    <section className="nikeVideo">
      <div className="video">
        <video src={video} width={"100%"} autoPlay controls muted></video>
      </div>
    </section>
  );
};

export default NikeVideo;
