import Image from "next/image";

export default function DockerPage() {
    return (
        <div className="bg-[#111111] min-h-screen w-full overflow-y-auto transition-all duration-300">
              <div className="flex">
                <Image
                  src="/chaos.gif"
                  alt="Banner 1"
                  width={0}
                  height={0}
                  className="w-[30rem] h-[12rem] object-cover"
                />
                <Image
                  src="/chaos.gif"
                  alt="Banner 2"
                  width={0}
                  height={0}
                  className="w-[30rem] h-[12rem] object-cover max-phone:hidden"
                />
                <Image
                  src="/chaos.gif"
                  alt="Banner 2"
                  width={0}
                  height={0}
                  className="w-[30rem] h-[12rem] object-cover max-phone:hidden"
                />
              </div>

              <div className="absolute left-80 top-[15rem] max-w-3xl pb-20 flex flex-col max-phone:left-4">
                <h2 className="text-zinc-300 text-[2rem] font-semibold mb-4 max-phone:text-[1.5rem] max-phone:-mt-4">Dockerized Chaos: How Containers Revolutionize Creative Development Workflows. ⚔️</h2>
                <div className="flex flex-col gap-4 text-zinc-400 max-phone:w-[96%]">
                <p>
                In the ever-evolving world of software development, chaos is often the norm. Developers juggle different environments, dependencies, and configurations, often resulting in hours lost to debugging and setup woes. Enter Docker—a tool that doesn’t just streamline workflows but also unleashes a level of creativity and experimentation that was once a pipe dream.
                Docker, at its core, is a platform designed to package and run applications in lightweight, portable containers. But beyond its utility, Docker has redefined the way developers think about building, testing, and deploying software. Let’s dive into how Docker brings order to chaos while fostering innovation and creativity.
                </p>
                <Image src = '/docker_pro.png' alt="docker process" width={750} height={300}></Image>
                <h1 className="text-zinc-200 text-[20px] mt-[1rem]">
                    The Problem: Development’s Tower of Babel
                </h1>
                <p>
                In traditional development setups, aligning environments is akin to building a modern-day Tower of Babel. "It works on my machine" becomes the rallying cry of developers frustrated by deployment failures or inconsistencies in testing environments. Different operating systems, dependencies, or configurations—these variables make consistent development and collaboration challenging.
                Creative workflows often add more complexity. Experimenting with new tools, frameworks, or architectures without disrupting existing projects becomes nearly impossible. Developers need a way to compartmentalize their ideas and ensure reproducibility without sacrificing flexibility.
                </p>

                <h1 className="text-zinc-200 text-[20px] mt-[1rem]">
                The Docker Solution: Containers as Creative Playgrounds
                </h1>
                <p>Docker provides a way to isolate applications and their dependencies into containers—self-sufficient, portable units that run consistently across environments. These containers act as creative playgrounds for developers, enabling:</p>

                <ol className="flex flex-col gap-4">
                    <li><span className="text-zinc-200">1. Rapid Experimentation:</span> With Docker, you can spin up containers for different frameworks, languages, or tools without polluting your local machine. Want to test a new database or API? Just pull an image, and you’re good to go.</li>
                    <li><span className="text-zinc-200">2. Reproducibility:</span> Each Docker container captures the entire runtime environment, ensuring that "it works on my machine" translates seamlessly to staging, production, or a collaborator’s setup.</li>
                    <li><span className="text-zinc-200">3. Collaboration:</span> Docker Compose files make it easy to share complex setups. Teams can work on the same environment without the "it works on theirs but not on mine" issue.</li>
                    <li><span className="text-zinc-200">4. Creative Chaos Without Consequence:</span> Want to mess around with a completely new architecture? Or try something experimental with an unfamiliar tool? Docker lets you do so in a sandboxed environment, minimizing risk.</li>
                </ol>

                <Image src = '/docker-concepts.gif' alt="docker concepts" width={400} height={400} className="mt-[1rem]"></Image>
                </div>

                <h1 className="text-zinc-200 text-[20px] mt-[2rem]">The Hidden Benefits: Confidence and Freedom</h1>
                <p className="text-zinc-400 mt-[1rem]">Docker doesn’t just save time; it empowers developers. Knowing that you can experiment freely without derailing your main project fosters a sense of confidence. It also opens doors to creative solutions you might not have considered in a more restrictive setup.

Moreover, Docker makes collaboration across teams—or even continents—more straightforward. Shared Docker images and Compose files act as a universal language, ensuring that everyone is on the same page regardless of their local setup.</p>

                <h1 className="text-zinc-200 text-[20px] mt-[2rem]">Final Thoughts: Embracing the Chaos</h1>
                <p className="text-zinc-400 mt-[1rem]">In a world where chaos often reigns, Docker offers a way to embrace it without being overwhelmed. Its ability to compartmentalize, standardize, and simplify workflows transforms what could be a frustrating experience into one brimming with opportunity and innovation.
                So, whether you’re a seasoned developer or a curious tinkerer, let Docker be your gateway to a world where the boundaries of creativity are limited only by your imagination—and not your environment.</p>

                <div className="flex items-end gap-4">
                    <Image src = '/docker_end.jpg' alt="docker end" width={120} height={100} className="mt-[2rem]"></Image>
                    <i>[The end]</i>
                </div>
            </div>
        </div>
    );
}
