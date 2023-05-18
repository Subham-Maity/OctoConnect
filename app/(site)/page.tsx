import {User} from "@/app/components/User";
import {Heading} from "@/app/components/Heading";
import data from "../../Your Data/Heading.json";

export default function Home() {
    return (
        <div className="main-bg">
            <div className="flex-item">
                <Heading data={data} />
                <User/>
            </div>
        </div>
    );
}
