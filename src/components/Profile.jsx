import StatCard from "./StatCard";
import Bio from "./Bio";

function Profile({value, label, rate}) {
    return (
        <div>
            <Bio name="Ashlee Faye Batayola" username="@ashbatayola" />

        <div className="mt-6 flex gap-6">
            <StatCard value={value} label={label} />
            <StatCard value={rate} label="PHP per hour" />
        </div>
        </div>
    );
}

export default Profile;