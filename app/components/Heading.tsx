type HeadingData = {
    title: string;
    question: string;
    answer: string;
};

type HeadingProps = {
    data: HeadingData;
};

export const Heading = (props: HeadingProps) => {
    return (
        <div>
            <div className="mb-2 text-center font-bold text-transparent sm:text-6xl text-[25px] bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-300/50 to-indigo-900/45">
                {props.data.title}
            </div>
            <details className="details">
                <summary className="qs mb-2 sm:text-2xl text-[25px] text-gray-500">
                    {props.data.question}
                </summary>
                <div className="ml-2 mr-2 sm:ml-64 sm:mr-64 md:ml-32 md:mr-32 lg:ml-16 lg:mr-16 xl:ml-8 xl:mr-8 bg-gray-600/25 rounded-xl flex flex-col items-center p-4">
                    <h1 className="mb-2 text-center text-transparent sm:text-1xl text-[25px] bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-300/50 to-indigo-200/25">
                        {props.data.answer}
                    </h1>
                </div>
            </details>
        </div>
    );
};
