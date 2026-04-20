import { useEffect } from 'react'

const SITE = 'Canalix'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : SITE
  }, [title])
}
