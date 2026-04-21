/**
 * Casedoc brand reference page — data arrays.
 *
 * Raw content (color ramps, logo variants, asset file lists, type scale)
 * lives here so `Casedoc.jsx` stays JSX-focused.
 */

export const CASEDOC_BACKDROP = '#002A5E'

export const productRamps = [
  { name: 'grey',   stops: [['white','#FFFFFF'],['grey-50','#FAFAFA'],['grey-200','#EEEEEE'],['grey-300','#D5D5D5'],['grey-400','#BDBDBD'],['grey-500','#9E9E9E'],['grey-600','#757575'],['grey-700','#616161'],['grey-800','#424242'],['grey-900','#212121']] },
  { name: 'slate',  stops: [['slate-50','#F9FAFC'],['slate-75','#F7F8FA'],['slate-100','#F2F4F7'],['slate-200','#E6E9F0'],['slate-250','#DFE2EB'],['slate-300','#CED4E5'],['slate-350','#C5CDE0'],['slate-400','#97A4C7'],['slate-500','#7684A8'],['slate-600','#627199'],['slate-650','#505F8A'],['slate-700','#3A4971'],['slate-800','#202A42'],['slate-900','#141C32'],['slate-950','#040B1F']] },
  { name: 'yellow', stops: [['yellow-100','#FCEC49'],['yellow-200','#F9E039'],['yellow-300','#F3CB28'],['yellow-400','#EDB617'],['yellow-500','#E7A30D']] },
  { name: 'orange', stops: [['orange-100','#FBBF24'],['orange-200','#F8A81C'],['orange-300','#F28813'],['orange-400','#EC680A'],['orange-500','#E65005']] },
  { name: 'red',    stops: [['red-100','#F26958'],['red-200','#F15845'],['red-300','#E74636'],['red-400','#D63226'],['red-500','#C51E16']] },
  { name: 'pink',   stops: [['pink-100','#FD63EE'],['pink-200','#FC4FE2'],['pink-300','#FA39CF'],['pink-400','#F823BC'],['pink-500','#F615AA']] },
  { name: 'purple', stops: [['purple-100','#BB6DF5'],['purple-200','#A358ED'],['purple-300','#8340DF'],['purple-400','#6328D1'],['purple-500','#4B19C4']] },
  { name: 'navy',   stops: [['navy-100','#0075CF'],['navy-200','#005FBA'],['navy-300 · Hugvit Blue','#00469C'],['navy-400','#00377A'],['navy-500','#002A5E']] },
  { name: 'blue',   stops: [['blue-100','#00ABEC'],['blue-200','#0093E0'],['blue-300','#0073CC'],['blue-400','#0053B8'],['blue-500','#003CA5']] },
  { name: 'sky',    stops: [['sky-100','#45E1FF'],['sky-200','#36D0FF'],['sky-300','#26B6FF'],['sky-400','#169CFF'],['sky-500','#0D86FF']] },
  { name: 'teal',   stops: [['teal-100','#00ECE5'],['teal-200','#00E0D6'],['teal-300','#00CCBE'],['teal-400','#00B8A6'],['teal-500','#00A591']] },
  { name: 'steel',  stops: [['steel-100','#49A6C5'],['steel-200','#398EAF'],['steel-300','#286F90'],['steel-400','#175071'],['steel-500','#0D3958']] },
  { name: 'green',  stops: [['green-100','#84E84D'],['green-200','#6DDA3D'],['green-300','#51C32B'],['green-400','#35AC19'],['green-500','#23980F']] },
  { name: 'lime',   stops: [['lime-100','#E3FC2D'],['lime-200','#D3FA23'],['lime-300','#BAF518'],['lime-400','#A1F00D'],['lime-500','#8BEB07']] },
]

export const coreStops = [
  ['yellow-300', '#F3CB28'], ['orange-300', '#F28813'], ['red-300', '#E74636'],
  ['blue-500', '#003CA5'],   ['navy-500', '#002A5E'],   ['—', '#001937'],
  ['sky-300', '#26B6FF'],    ['blue-300', '#0073CC'],   ['navy-300', '#00469C'],
]

export const accentStops = [
  ['yellow-300', '#F3CB28'], ['orange-300', '#F28813'], ['orange-500', '#E65005'],
  ['red-300', '#E74636'],    ['steel-300', '#286F90'],  ['teal-500', '#00A591'],
  ['green-300', '#51C32B'],  ['lime-500', '#8BEB07'],
]

export const logoVariants = [
  { name: 'logomark',            caption: 'logomark' },
  { name: 'logomark-1',          caption: 'logomark · contained' },
  { name: 'lockup-vertical',     caption: 'lockup · vertical' },
  { name: 'lockup-vertical-1',   caption: 'lockup · vertical alt' },
  { name: 'lockup-horizontal',   caption: 'lockup · horizontal' },
  { name: 'lockup-horizontal-1', caption: 'lockup · horizontal alt' },
  { name: 'wordmark',            caption: 'wordmark' },
]

export const productUiFiles = [
  { src: '/brand/casedoc/product-ui/Product UI Abstractions_01.svg',   caption: 'abstraction 01' },
  { src: '/brand/casedoc/product-ui/Product UI Abstractions_02.svg',   caption: 'abstraction 02' },
  { src: '/brand/casedoc/product-ui/Product UI Abstractions_02-1.svg', caption: 'abstraction 02·alt' },
  { src: '/brand/casedoc/product-ui/Product UI Abstractions_03.svg',   caption: 'abstraction 03' },
  { src: '/brand/casedoc/product-ui/01.svg', caption: 'window 01' },
  { src: '/brand/casedoc/product-ui/02.svg', caption: 'window 02' },
  { src: '/brand/casedoc/product-ui/03.svg', caption: 'window 03' },
  { src: '/brand/casedoc/product-ui/04.svg', caption: 'window 04' },
]

export const deviceFiles = ['01', '02', '03', '04', '05']
export const graphicsB = ['01', '02', '03', '04', '05']
export const graphicsC = ['01', '02']
export const brandedProduct = ['branded house', 'branded house-1', 'branded house-2', 'branded house-3', 'branded house-4']

export const slideFiles = Array.from({ length: 14 }, (_, i) => String(i + 1).padStart(2, '0'))

export const montserratScale = [
  { token: 'H1',      weight: 700, size: 56, lh: 64 },
  { token: 'H4',      weight: 500, size: 40, lh: 48 },
  { token: 'p-big',   weight: 400, size: 20, lh: 28 },
  { token: 'p',       weight: 400, size: 16, lh: 24 },
  { token: 'p-small', weight: 400, size: 12, lh: 20 },
]
