
import video from "../assets/videos/video.mp4";


const NikeVideo = () => {
  return (
    <section className="nikeVideo">
      <div className="video">
        <video width="750" height="500" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default NikeVideo;
