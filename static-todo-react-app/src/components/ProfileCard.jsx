


const ProfileCard = ({ name, age, bio }) => {
    return (
        <div id='profileCard'>
            <p className="name">Name: {name}</p><br />
            <p className="age">Age: {age}</p><br />
            <p className="bio">Bio: {bio}</p><br />
        </div>
    )
};



export default ProfileCard;