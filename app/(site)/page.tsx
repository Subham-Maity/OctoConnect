import {User} from "@/app/components/User";
import {Heading} from "@/app/components/Heading";

export default function Home() {
    return (
        <div className="main-bg">
            <div className="flex-item">
                <Heading/>
                <User/>
            </div>
        </div>
    );
}
