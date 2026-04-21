/**
 * Canalix brand reference page — data arrays.
 *
 * Raw content (color ramps, logo variants, asset file lists, type scales)
 * lives here so `Canalix.jsx` can stay JSX-focused. Anything view-configuration
 * (table column render functions, etc.) stays in the page file alongside the
 * JSX that consumes it.
 */

export const identityRamps = [
  { name: 'grey',   stops: [['grey-50','#FAFAFA'],['grey-100','#F3F3F3'],['grey-200','#E6E6E6'],['grey-300','#BFBFBF'],['grey-400','#9F9F9F'],['grey-500','#818181'],['grey-600','#5E5E5E'],['grey-700','#383939'],['grey-800','#1D1D1D'],['grey-900','#121315']] },
  { name: 'cream',  stops: [['cream-50','#FAF9F5'],['cream-100','#F5F3EF'],['cream-200','#F0EDE9'],['cream-300','#ECE8DE'],['cream-400','#E5E0D6'],['cream-500','#DCD6C8'],['cream-600','#D3CCBA'],['cream-700','#C9C2B0']] },
  { name: 'slate',  stops: [['slate-300','#B9BABD'],['slate-400','#787C85'],['slate-500','#4F535C'],['slate-600','#3A3E47'],['slate-700','#262A33'],['slate-800','#1E1E21']] },
  { name: 'yellow', stops: [['yellow-200','#FAE290'],['yellow-300','#F9D86B'],['yellow-400','#F7CE46'],['yellow-500 · brand','#DEB430']] },
  { name: 'orange', stops: [['orange-500','#CB7D26'],['orange-600','#B76912'],['orange-700','#A55700']] },
  { name: 'red',    stops: [['red-200','#F5A693'],['red-300','#E58168'],['red-400','#D06C53'],['red-500 · brand','#B5523F']] },
  { name: 'brown',  stops: [['brown-500','#835831'],['brown-600','#6F441D'],['brown-700','#5D320B'],['brown-800','#34291F']] },
  { name: 'blue',   stops: [['blue-500 · brand','#225FA6'],['blue-800 · brand','#0E3655'],['blue-900 · brand','#142438']] },
  { name: 'navy',   stops: [['navy-500','#48576A'],['navy-600','#3B4757'],['navy-700','#303A47']] },
]

export const logoVariants = [
  { name: 'logomark',    caption: 'logomark · canonical' },
  { name: 'logomark-01', caption: 'logomark · 01' },
  { name: 'logomark-02', caption: 'logomark · contained' },
  { name: 'logomark-03', caption: 'logomark · alt' },
  { name: 'lockup',      caption: 'lockup · vertical' },
  { name: 'lockup-1',    caption: 'lockup · vertical tight' },
  { name: 'lockup-2',    caption: 'lockup · contained' },
  { name: 'lockup-3',    caption: 'lockup · horizontal' },
  { name: 'lockup-4',    caption: 'lockup · horizontal wide' },
  { name: 'wordmark',    caption: 'wordmark' },
]

export const moodFiles = ['mood-no-logo-01', 'mood-no-logo-02', 'mood-no-logo-03', 'mood-no-logo-04']
export const stationeryFiles = ['01', '02', '03']
export const patternFiles = Array.from({ length: 20 }, (_, i) => String(i + 1).padStart(2, '0'))

export const brandFeelSlides = [
  'Brand Feel_01', 'Brand Feel_02', 'Brand Feel_03', 'Brand Feel_04',
  'Brand Feel_05', 'Brand Feel_06', 'Brand Feel_07', 'Brand Feel_08', 'Brand Feel_09',
  'Feel 2_01', 'Feel 2_02', 'Feel 2_04',
  'Brand sheets',
]

export const montserratScale = [
  { token: 'D1', weight: 700, size: 72, lh: 80 },
  { token: 'H1', weight: 700, size: 56, lh: 64 },
  { token: 'H2', weight: 600, size: 40, lh: 48 },
  { token: 'H3', weight: 600, size: 32, lh: 40 },
  { token: 'H4', weight: 500, size: 24, lh: 32 },
  { token: 'S1', weight: 500, size: 20, lh: 28 },
  { token: 'T1', weight: 400, size: 16, lh: 24 },
  { token: 'T2', weight: 400, size: 14, lh: 20 },
  { token: 'L1', weight: 500, size: 12, lh: 16 },
]

export const hattonScale = [
  { token: 'Ultralight', weight: 200, sample: 'Above as below' },
  { token: 'Light',      weight: 300, sample: 'Above as below' },
  { token: 'Medium',     weight: 500, sample: 'Above as below' },
  { token: 'Bold',       weight: 700, sample: 'Above as below' },
  { token: 'Ultrabold',  weight: 900, sample: 'Above as below' },
]
