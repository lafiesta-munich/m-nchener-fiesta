import eventsImg from "@/assets/silvester.jpeg";
import eventsVideo from "@/assets/silvester_video.mp4";

const SilvesterSection = () => {
  return (
    <section id="happy-hour" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <video
              src={eventsVideo}
              width={800}
              className="rounded-2xl shadow-2xl object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              Sorry, dein Browser unterstützt das Video nicht.
            </video>
          </div>
          <div className="relative">
            <img
              src={eventsImg}
              alt="Silvester Celebration"
              width={700}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilvesterSection;
