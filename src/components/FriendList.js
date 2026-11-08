import Friend from "./Friend";

export default function FriendList({ friends, onSelected }) {
    return (
        <ul>
            {friends.map((friend, index) => (
                <Friend key={index} friend={friend} onSelected={onSelected} />
            ))}
        </ul>
    );
}
