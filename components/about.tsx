import Image from 'next/image';

// components/AboutUs.tsx
const AboutUs = () => {
  return (
    <section className="about bg-black opacity-90 text-center py-10 px-5 ">
      <h2 className="text-5xl font-semibold text-red-600 mb-5">About Us</h2>
      <div className="about-content flex flex-wrap items-center justify-center pt-2">
        <Image
          src={'/images/faraz-fiverr.png'}
          alt="About Us"
          width={400} // Specify the width of the image
          height={300} // Specify the height of the image
          className="rounded-custom-1 m-5"
        />
        <div className="about-text max-w-xl m-5 text-left text-lg font-medium text-white">
          <p className="mb-4">
            Hello! I’m Faraz Alam frontend developer with expertise in React,
            Next.js, HTML, CSS, and Tailwind CSS. I specialize in crafting
            visually appealing and responsive web applications that offer a
            seamless user experience. By leveraging React and Next.js, I build
            dynamic, high-performance solutions, while HTML and CSS form the
            foundation of my design approach. Tailwind CSS enhances my workflow,
            enabling me to create custom, scalable designs efficiently.
            Passionate about clean code and modern design principles, I’m
            dedicated to delivering high-quality, user-centric websites that
            stand out. Let’s collaborate to bring your digital projects to life!
          </p>
          <p>
            We hope you enjoy our services as much as we enjoy offering them to
            you. If you have any questions or comments, please dont hesitate to
            contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
