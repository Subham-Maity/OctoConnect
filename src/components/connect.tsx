// connect.tsx
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import styles from './connect.module.css';
import Link from "next/link";
// A custom hook to fetch data from a GitHub API endpoint
const useGitHubData = (url: string) => {
    const [data, setData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
};

// A custom hook to fetch data from a GitHub API endpoint for languages
const useGitHubLanguages = (url: string) => {
    const [data, setData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
};

// A component to display a GitHub profile picture in a circle
const ProfilePicture = ({
                            githubProfileLink,
                            name,
                        }: {
    githubProfileLink: string;
    name?: string;
}) => {
    const username = githubProfileLink.split('/').pop();
    const { data, loading, error } = useGitHubData(
        `https://api.github.com/users/${username}`
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.message}</div>;

    return (
        <div className="flex flex-col items-center">
            <Image
                src={data?.avatar_url}
                alt={username || ''}
                width={240}
                height={240}
                className="rounded-full border-4 border-white"
            />
            {name ? (
                <div className="text-gray-800 font-bold text-lg mt-2">{name}</div>
            ) : null}
        </div>
    );
};

// A component to display a GitHub contribution graph
const ContributionGraph = ({
                               githubProfileLink,
                           }: {
    githubProfileLink: string;
}) => {
    // Extract the username from the profile link
    const username = githubProfileLink.split('/').pop();

    // Return an image element with the contribution graph and some styles
    return (
        <img
            src={`https://ghchart.rshah.org/${username}`}
            alt={`GitHub contribution graph of ${username}`}
            width={672}
            height={96}
            className="mt-4"
        />
    );
};

// A component to display a streak stats image
const StreakStats = ({
                         githubProfileLink,
                     }: {
    githubProfileLink: string;
}) => {
    // Extract the username from the profile link
    const username = githubProfileLink.split('/').pop();

    // Return an img element with the streak stats image and some styles
    return (
        <img
            style={{verticalAlign: 'center'}}
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=false&border_radius=10&exclude_days=Sun%2CMon%2CTue%2CWed%2CThu%2CFri%2CSat`}
        />
    );
};

// A component to display a GitHub repository details in a box
const RepositoryBox = ({
                           githubRepositoryLink,
                       }: {
    githubRepositoryLink: string;
}) => {
    // Extract the username and repo name from the repository link
    const [username, repoName] = githubRepositoryLink.split('/').slice(-2);

    // Use the custom hook to fetch the repo data
    const {data: repoData, loading: repoLoading, error: repoError} =
        useGitHubData(`https://api.github.com/repos/${username}/${repoName}`);

    // Use another custom hook to fetch the languages' data
    const {data: langData, loading: langLoading, error: langError} =
        useGitHubLanguages(
            `https://api.github.com/repos/${username}/${repoName}/languages`
        );

    // Define an object that maps language names to colors
    const langColors: { [key: string]: string } = {
        JavaScript: '#f1e05a',
        TypeScript: '#2b7489',
        Python: '#3572A5',
        Ruby: '#701516',
        Java: '#b07219',
        SCSS: '#c6538c',
        HTML: '#e34c26',
        Shell: '#89e051',
        Procfile: '#960050',
    };

// Define a function that returns a percentage of a language usage in a repo
    const getLangPercentage = (lang: string) => {
        // Get the total bytes of all languages in the repo
        const totalBytes: number = Object.values(langData).reduce(
            (sum: number, bytes: unknown) => {
                if (typeof bytes === 'number') {
                    return sum + bytes;
                }
                return sum;
            },
            0
        );
        // Get the bytes of the given language in the repo
        const langBytes: number | undefined = langData[lang];

        if (typeof langBytes === 'number') {
            // Calculate and return the percentage as a string with one decimal place
            return ((langBytes / totalBytes) * 100).toFixed(1) + '%';
        }

        return '';
    };


    if (repoLoading || langLoading) return <div>Loading...</div>;
    if (repoError || langError)
        return <div>Error: {(repoError || langError)?.message}</div>;

// Return a div element with the repo details and some styles
    return (
        <div className="relative bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center space-x-4">
                <Image
                    src={repoData?.owner.avatar_url}
                    alt={username}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white/50"
                />
                <div className="text-white">
                    <h3 className="font-bold text-lg">{repoData?.full_name}</h3>
                    <div className="bg-gray-600 p-2 rounded-lg">
                        <p className="text-sm">{repoData?.description}</p>
                    </div>
                    <div className="flex flex-wrap space-x-2 mt-2">
                        {Object.keys(langData || {}).map((lang) => (
                            <span
                                key={lang}
                                style={{ backgroundColor: langColors[lang] }}
                                className="px-2 py-1 m-2 rounded-lg text-black font-bold"
                            >
 {lang} ({getLangPercentage(lang)})
 </span>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px", padding: "10px" }}>
                <Link
                    className={`${styles.cta} text-sm py-1 px-2 rounded-full`}
                    href={githubRepositoryLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    View Repository <span>→</span>
                </Link>
            </div>
        </div>
    );
};





// The main component that takes two props: a GitHub profile link and a GitHub repository link
const Connect = ({
                     githubProfileLink,
                     githubRepositoryLink,
                     name,
                 }: {
    githubProfileLink: string;
    githubRepositoryLink: string;
    name?: string;
}) => {
    return (
        <div className="flex flex-col mt-4 items-center space-y-8 max-w-screen-md mx-auto">
            {githubProfileLink ? (
                <>
                    <div className="relative w-full md:w-64 h-full md:h-64 bg-gray-400 rounded-xl p-8">
                        <ProfilePicture
                            githubProfileLink={githubProfileLink}
                            name={name} // Pass the `name` prop to the `ProfilePicture` component
                        />

                    </div>
                    <StreakStats githubProfileLink={githubProfileLink} />
                    <ContributionGraph githubProfileLink={githubProfileLink} />
                </>
            ) : null}
            {githubRepositoryLink ? (
                <RepositoryBox githubRepositoryLink={githubRepositoryLink} />
            ) : null}
        </div>
    );
};


export default Connect;
