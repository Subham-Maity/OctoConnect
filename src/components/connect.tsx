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
    const {data, loading, error} = useGitHubData(
        `https://api.github.com/users/${username}`
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.message}</div>;

    return (
        <div className="flex flex-col items-center">
            <Link href={githubProfileLink} legacyBehavior>
                <a target="_blank">
                    <Image
                        src={data?.avatar_url}
                        alt={username || ''}
                        width={240}
                        height={240}
                        className="rounded-full border-4 border-gray-600/25 shadow-md hover:border-gray-400 transition duration-300 animate-pulse"
                    />
                </a>
            </Link>


            {name ? (
                <div className="text-gray-100/75 text-2xl mb-4 mt-2 font-bold ">{name}</div>
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
        PHP: '#9B4F96',
        CSS: '#563d7c',
        C: '#555555',
        'C++': '#f34b7d',
        'C#': '#178600',
        'Visual Basic': '#945db7',
        'Objective-C': '#438eff',
        'Objective-C++': '#6866fb',
        'CoffeeScript': '#244776',
        'Dockerfile': '#384d54',
        'PowerShell': '#012456',
        'Go': '#00ADD8',
        'Swift': '#ffac45',
        'Kotlin': '#F18E33',
        'Rust': '#dea584',
        'Scala': '#c22d40',
        'Haskell': '#5e5086',
        'Lua': '#000080',
        'Perl': '#0298c3',
        'TeX': '#3D6117',
        'Elixir': '#6e4a7e',
        'Emacs Lisp': '#c065db',
        'Clojure': '#db5855',
        'Groovy': '#e69f56',
        'OCaml': '#3be133',
        'R': '#198ce7',
        'Vim script': '#199f4b',
        'Matlab': '#bb92ac',
        'Arduino': '#bd79d1',
        'Makefile': '#427819',
        'Assembly': '#6E4C13',
        'Vue': '#2c3e50',
        'Dart': '#00B4AB',
        'Roff': '#ecdebe',
        'Puppet': '#302B6D',
        'Erlang': '#B83998',
        'Crystal': '#000100',
        'PLpgSQL': '#336790',
        'Jupyter Notebook': '#DA5B0B',
        'HCL': '#ccc',
        'Nix': '#7e7eff',
        'D': '#ba595e',
        'Nim': '#ffc200',
        'Pascal': '#E3F171',
        'F#': '#b845fc',
        'Elm': '#60B5CC',
        'PureScript': '#1D222D',
        'Racket': '#3c5caa',
        'F*': '#572e30',
        'Zig': '#ec915c',
        'Standard ML': '#dc566d',
        'V': '#4f87c4',
        'Coq': '#d0b68c',
        'Apex': '#1797c0',
        'Haxe': '#df7900',
        'Scheme': '#2244bc',
        'XSLT': '#EB8CEB',
        'Dhall': '#dfafff',
        'VCL': '#148AA8',
        'Nunjucks': '#3d8137',
        'Eagle': '#814C05',
        'BitBake': '#00bce4',
        'Gherkin': '#5B2063',
        'DIGITAL Command Language': '#0AA0FF',
        'CMake': '#DA3434',
        'Smalltalk': '#596706',
        'FORTRAN': '#4d41b1',
        Cuda: '#3A4E3A',
        'WebAssembly': '#04133b',
        Handlebars: '#01a9d6',
        Less: '#1d365d',
        Scilab: '#ca0f19',
        'Batchfile': '#C1F12E',
        Julia: '#a270ba',
        'Visual Basic .NET': '#945db7',
        Pug: '#a86454',
        ShaderLab: '#222c37',
        HLSL: '#aace60',
        Hack: '#878787',
        'Inno Setup': '#264b99',
        SmPL: '#c94949',
        Yacc: '#4B6C4B',
        Lex: '#DBCA00',
        Ada: '#02f88c',
        Awk: '#c30e9b',
        'GDScript': '#355570',
        'C# .NET': '#178600',
        UnrealScript: '#a54c4d',
        Raku: '#4040c7',
        'AutoHotkey': '#6594b9',
        M4: '#b04646',
        MATLAB: '#e16737',
        XS: '#eb427f',
        sed: '#64b970',


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
        <div
            className="relative bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-300/50 to-indigo-900/45 p-4 rounded-lg">
            <div className="flex items-center space-x-4">
                <Image
                    src={repoData?.owner.avatar_url}
                    alt={username}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white/30"
                />
                <div className="text-white">
                    <h3 className="font-bold text-lg text-stone-200">{repoData?.full_name}</h3>
                    <div className="mt-2 bg-gradient-to-r from-gray-700 via-gray-900 to-cyan-900 p-2 rounded-lg">
                        <p className="text-sm text-neutral-200/75 font-semibold">{repoData?.description}</p>
                    </div>
                    <div className="flex flex-wrap space-x-2 mt-2 opacity-90">
                        {Object.keys(langData || {}).map((lang) => (
                            <span
                                key={lang}
                                style={{backgroundColor: langColors[lang]}}
                                className="px-1 py-0.5 m-1 rounded-lg text-gray-800 font-bold text-xs"
                            >
                                {lang} ({getLangPercentage(lang)})
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{display: "flex", justifyContent: "flex-end", margin: "10px", padding: "12px"}}>
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
        <div className="flex flex-col mt-4 items-center space-y-8 max-w-screen-md mx-auto pt-8 pl-2 pr-2">
            {githubProfileLink ? (
                <div className="bg-gray-600/25 rounded-xl flex flex-col items-center p-4">
                    <ProfilePicture
                        githubProfileLink={githubProfileLink}
                        name={name} // Pass the `name` prop to the `ProfilePicture` component
                    />
                    <StreakStats githubProfileLink={githubProfileLink}/>
                    <ContributionGraph githubProfileLink={githubProfileLink}/>
                </div>
            ) : null}
            {githubRepositoryLink ? (
                <RepositoryBox githubRepositoryLink={githubRepositoryLink}/>
            ) : null}
        </div>
    );
};


export default Connect;


