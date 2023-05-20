import {User} from "@/app/components/User";
import {Heading} from "@/app/components/Heading";
import data from "../../Your Data/Heading.json";
import backToTopData from "../../Your Data/Components/Backtotop.json";
import Backtotop from "@/app/(site)/components/Backtotop"; // Import the JSON data


const backToTopProps = backToTopData[0];

export default function Home() {
    return (
        <div className="main-bg">
            <div className="flex-item">
                <Backtotop disabled={backToTopProps.disabled} right={backToTopProps.right}
                           delay={backToTopProps.delay}/>
                {/*<Backtotop disabled={backToTopProps.disabled} left={backToTopProps.left}*/}
                {/*           delay={backToTopProps.delay}/>*/}
                <Heading data={data}/>
                <User/>
            </div>
        </div>
    );
}
