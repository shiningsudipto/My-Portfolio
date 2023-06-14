import SectionTitle from "../components/SectionTitle";
import image from '../assets/sudiptadas.png'
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={"About me and my skill"}
                    heading={"About"}
                ></SectionTitle>
            </div>
            <div>
                <div className="flex justify-between lg:flex-row flex-col-reverse items-center">
                    <div className="space-y-1 me-6 text-[18px]">
                        <p>
                            Hey there! <br /> My name is <span className="font-semibold">Sudipta Das</span>, and I'm thrilled to welcome you to my portfolio website. As a non-CS student, I've found my true passion in programming, and I absolutely love it. I consider myself a fast learner and have been honing my skills as a junior MERN stack developer.</p>
                        <p>One thing that sets me apart is my knowledge of graphic design, particularly in Adobe Photoshop and Illustrator. I believe that combining technical expertise with a touch of artistry can result in truly remarkable projects. So, you can expect my work to be visually appealing and thoughtfully designed.</p>
                        <p>For me, programming is not just a job; it's a journey of constant exploration. I have an insatiable curiosity when it comes to new technologies and emerging trends. I'm always excited to dive into unfamiliar territories and embrace the challenges that come with them.</p>
                        <p>My ultimate goal is to build a successful career in programming, leveraging my MERN stack skills and continuously pushing myself to grow. I believe that learning is a lifelong process, and I'm committed to expanding my knowledge and staying up-to-date with the latest advancements in the field.</p>
                        <p>I invite you to explore my portfolio website, where you'll find a showcase of my projects, a glimpse into my graphic design abilities, and a testament to my dedication to personal and professional growth. Thank you for stopping by, and I hope you enjoy your time here!</p>
                    </div>
                    <div>
                        <img src={image} className="rounded-xl myBtnShadow" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h3 className="text-2xl font-semibold uppercase mt-6 mb-4">skill set:</h3>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6">
                        <div>
                            <ProgressBar
                                completed={98}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="HTML5"
                            />
                            <ProgressBar
                                className="my-5"
                                completed={94}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="CSS3"
                            />
                            <ProgressBar
                                completed={100}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="BOOTSTRAP5"
                            />
                            <ProgressBar
                                className="my-5"
                                completed={95}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="TailwindCSS"
                            />
                            <ProgressBar
                                className="my-5"
                                completed={80}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="FIGMA"
                            />
                            <ProgressBar
                                className="my-5"
                                completed={85}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="GIT & GITHUB"
                            />
                        </div>
                        <div>
                            <ProgressBar
                                completed={80}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="JAVASCRIPT"
                            />
                            <ProgressBar
                                className="my-5"
                                completed={90}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="REACT JS"
                            />
                            <ProgressBar
                                className="my-5"
                                completed={74}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="FIREBASE"
                            />
                            <ProgressBar
                                completed={75}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="EXPRESS JS"
                            />
                            <ProgressBar
                                className="my-5"
                                completed={78}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="MongoDB"
                            />
                            <ProgressBar
                                className="my-4"
                                completed={70}
                                bgColor="#CA0945"
                                height="20px"
                                labelColor="#fdfafa"
                                animateOnRender
                                maxCompleted={100}
                                customLabel="NODE JS"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;