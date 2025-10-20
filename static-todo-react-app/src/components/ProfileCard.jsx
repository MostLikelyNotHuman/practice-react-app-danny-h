


const ProfileCard = ({ name, age, bio }) => {
    return (
        <div id='profileCard'>
            <p className="name">Name: {name}</p>
            <p className="age">Age: {age}</p>
            <p className="bio">Bio: {bio}</p>
        </div>
    )
};



export default ProfileCard;