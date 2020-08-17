export function GnomeCard({ key, gnomeData }) {
    return (
        <div key={key}>
            <img src={gnomeData.thumbnail}/>
            <p>{gnomeData.name}</p>
        </div>
    )
}