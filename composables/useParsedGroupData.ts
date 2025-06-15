export function useParsedGroupData<T>(groupName: string) {
  return useFetch<T[]>(`https://api.los-bio.ru/info/group/${groupName}`, {
    transform: (rawData: any) => {
      return (rawData || [])
        .map((item: any) => {
          try {
            return JSON.parse(item.value) as T
          } catch (e) {
            console.error(`Ошибка парсинга value (${groupName}):`, item.value)
            return null
          }
        })
        .filter(Boolean)
    },
  })
}