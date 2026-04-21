import Swatch from './Swatch'

export default function Ramp({ name, stops }) {
  return (
    <div className="kol-ramp">
      <h4 className="kol-helper-xs-2 uppercase tracking-widest text-fg-64 m-0 mb-2">
        {name}
      </h4>
      <div className="kol-ramp-chips">
        {stops.map(([stopName, hex]) => (
          <Swatch key={hex} hex={hex} name={stopName} />
        ))}
      </div>
    </div>
  )
}
