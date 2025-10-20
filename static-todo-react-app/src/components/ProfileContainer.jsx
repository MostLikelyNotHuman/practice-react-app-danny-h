import ProfileCard from "./ProfileCard";



const ProfileContainer = () => {

    return (
        <>
            <header id="userProfilesHeader">
                <h1>User Profiles</h1>
            </header>
            <ProfileCard name='Alex' age={25} bio='A software engineer who loves hiking.' />
            <ProfileCard name='Taylor' age={30} bio='A designer passionate about photography.' />
        </>
    )
}


export default ProfileContainer;