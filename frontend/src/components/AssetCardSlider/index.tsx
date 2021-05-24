import { ArrowLeft, ArrowRight } from '@styled-icons/material-outlined'
import AssetCard, { AssetCardProps } from 'components/AssetCard'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

export type AssetCardSliderProps = {
  assets: AssetCardProps[]
}

const settings: SliderSettings = {
  slidesToShow: 2,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
  nextArrow: <ArrowRight aria-label="próximo" />,
  prevArrow: <ArrowLeft aria-label="anterior" />,
}

const AssetCardSlider = ({ assets }: AssetCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {assets.map((asset, index) => (
        <AssetCard key={index} {...asset} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default AssetCardSlider
