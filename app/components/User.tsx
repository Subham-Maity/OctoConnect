import Connect from "@/app/(site)/components/connect";

export const User = () => {
    return (
        <div>
            <div className="box">
                <Connect
                    name="Subham Maity"
                    githubProfileLink="https://github.com/Subham-Maity"
                    githubRepositoryLink="https://github.com/Subham-Maity/ReactJS-For-Beginners"
                />

                <Connect githubRepositoryLink="https://github.com/Subham-Maity/docker_tutorial"/>

                <Connect githubRepositoryLink="https://github.com/Subham-Maity/prisma-tutorial"/>
            </div>

            <div className="box">
                <Connect
                    name="Linus Torvalds"
                    githubProfileLink="https://github.com/torvalds"
                    githubRepositoryLink="https://github.com/torvalds/linux"
                />

                <Connect githubRepositoryLink="https://github.com/torvalds/test-tlb"/>
            </div>
        </div>
    );
};
