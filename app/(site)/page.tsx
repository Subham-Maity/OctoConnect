import {User} from "@/app/components/User";
import {Heading} from "@/app/components/Heading";
import data from "../../Your Data/Heading.json";
import Backtotop from "@/app/(site)/components/Backtotop";

export default function Home() {
    return (
        <div className="main-bg">
            <div className="flex-item">
                <Backtotop/>
                <Heading data={data} />
                <User/>
            </div>
        </div>
    );
}
