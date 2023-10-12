import type { Startup } from "../models/startup";
import StartupDetail from "./StartupDetail";

type StartupListProps = {
    startups: Startup[];
};

export default function StartupList({ startups }: StartupListProps) {
    return (
        <div className="space-y-10">
            {
                startups.map(startup => (
                    <StartupDetail key={startup.name} startup={startup} />
                ))
            }
        </div>
    )
}