export default function FormSplitBill() {
    return (
        <form action="" className="form-split-bill">
            <h2>Patungan Bareng si X</h2>

            <label htmlFor="">Total Tagihan</label>
            <input type="text" name="" id="" />

            <label htmlFor="">Tagihan Kamu</label>
            <input type="text" id="" />

            <label htmlFor="">Tagihan x</label>
            <input type="text" id="" disabled />

            <label htmlFor="">Siapa yang membayar tagihan?</label>
            <select name="" id="">
                <option value="user">Kamu</option>
                <option value="friend">Si X</option>
            </select>

            <button className="button">Tambah</button>
        </form>
    );
}
