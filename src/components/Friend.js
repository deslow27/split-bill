export default function Friend({ friend }) {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    Kamu berhutang Rp {Math.abs(friend.balance)} kepada {friend.name}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} berhutang Rp {Math.abs(friend.balance)} kepada kamu
                </p>
            )}
            {friend.balance === 0 && <p>Kamu dan {friend.name} berhutang</p>}
            <button className="button">Pilih</button>
        </li>
    );
}
