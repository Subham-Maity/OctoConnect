import Connect from "@/app/(site)/components/connect";
import githubDetails from "../../Your Data/GithubDetails.json";

export const User = () => {
    return (
        <div>
            {githubDetails.map((user, index) => (
                <div className="box" key={index}>
                    <Connect
                        name={user.name}
                        githubProfileLink={user.githubProfileLink}
                        githubRepositoryLinks={user.githubRepositoryLinks}
                    />
                </div>
            ))}
        </div>
    );
};
