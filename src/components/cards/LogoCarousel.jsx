import Carousel from '../ui/Carousel'
import LogoCard from './LogoCard'

export default function LogoCarousel({ brand, logos, light = false, backdrop }) {
  return (
    <Carousel>
      {logos.map((l) => (
        <LogoCard
          key={l.name}
          brand={brand}
          name={l.name}
          caption={l.caption}
          backdrop={l.backdrop ?? backdrop}
          light={light}
        />
      ))}
    </Carousel>
  )
}
