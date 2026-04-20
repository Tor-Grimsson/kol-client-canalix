import Swatch from './Swatch'

export default function Ramp({ name, stops }) {
  return (
    <div className="kol-ramp">
      <h4 className="kol-ramp__name">{name}</h4>
      <div className="kol-ramp__chips">
        {stops.map(([stopName, hex]) => (
          <Swatch key={hex} hex={hex} name={stopName} />
        ))}
      </div>
    </div>
  )
}
